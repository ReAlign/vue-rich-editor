<template>
    <div class="quill-wrapper">
        <div
            ref="quillContainer"
            class="vre-editor-sign-only"
            :id="id">
        </div>
        <input
            ref="fileInput"
            id="file-upload"
            type="file"
            accept="image/*"
            style="display:none"
            v-if="useCustomImageHandler"
            @change="emitImageInfo($event)"
        />
    </div>
</template>

<script>
import Quill from 'quill';
import _ from 'n-tools';

import Config from './config';

export default {
    name: 'vue-rich-editor',
    props: {
        value: {
            type: String,
            default: ''
        },
        id: {
            type: String,
            required: true,
            default: 'quill-container'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        editorContainer: {
            type: Array,
            default: () => []
        },
        useCustomImageHandler: {
            type: Boolean,
            default: false
        },
        quillRegisterKeys: {
            type: Array,
            default: () => null
        },
        placeholder: {
            type: String,
            default: ''
        },
        linkPlaceholder: {
            type: String,
            default: '请输入链接'
        }
    },

    data() {
        return {
            quill: null,
            editor: null,
            toolbarContainer: (_.typeof(this.editorContainer) === 'array'
                                && this.editorContainer.length)
                                ? this.editorContainer
                                : Config.defaultEditorContainer,
            toolbarHandlers: {
                'image-link': () => {
                    const Editor = this.quill;
                    const range = Editor.getSelection();
                    const cursorLocation = range.index;
                    this.$emit('reImageLink', {
                        Editor,
                        range,
                        cursorLocation
                        });
                }
            }
        };
    },

    mounted() {
        this.initRegisterModules();
        this.initializeVueRichEditor();
        this.handleUpdatedEditor();
        this.listenStateChangeEditor();
    },

    created() {
        //
    },

    watch: {
        value(val) {
            if (val != this.editor.innerHTML
                && !this.quill.hasFocus()) {
                this.editor.innerHTML = val;
            }
        },
        disabled(status) {
            this.quill.enable(!status);
        }
    },

    methods: {
        initRegisterModules() {
            if (!this.quillRegisterKeys
                || (this.quillRegisterKeys
                    && this.quillRegisterKeys.length)) {
                const _keys = (this.quillRegisterKeys
                                && this.quillRegisterKeys.length)
                            ? this.quillRegisterKeys
                            : Config.defaultQuillRegisterKeys;

                let _modules = {};

                _keys.forEach(item => {
                    if (Config.ENUM_MAP[item]) {
                        Config.ENUM_MAP[item].forEach(that => {
                            _modules[that.key] = that.value;
                        });
                    }
                });

                Quill.register(_modules, true);
            }
        },

        initializeVueRichEditor() {
            this.setQuillElement();
            this.setEditorElement();
            this.checkForInitialContent();
        },

        setQuillElement() {
            const _modulesConf = {
                toolbar: {
                    container: this.toolbarContainer,
                    handlers: this.toolbarHandlers
                },
                clipboard: {
                    matchVisual: false
                },
                imageLink: true
            };

            if((this.quillRegisterKeys &&
                this.quillRegisterKeys.length &&
                this.quillRegisterKeys.indexOf('imageResize') != -1) ||
                !this.quillRegisterKeys) {
                _modulesConf.blotFormatter = {
                    specs: [Config.MyImageSpec]
                };
            }

            this.quill = new Quill(this.$refs.quillContainer, {
                theme: 'snow',
                bounds: `#${this.id}`,
                formats: Config.defaultClipboardFormats,
                modules: _modulesConf,
                placeholder: this.placeholder,
                readOnly: this.disabled
                            ? this.disabled
                            : false
            });

            // change the link placeholder to www.github.com
            const tooltip = this.quill.theme.tooltip;
            const input = tooltip.root.querySelector('input[data-link]');
            input.dataset.link = this.linkPlaceholder;

            this.checkForCustomImageHandler();
        },

        setEditorElement() {
            this.editor = document.querySelector(`#${this.id} .ql-editor`);
        },

        checkForInitialContent() {
            this.editor.innerHTML = this.value || '';
        },

        checkForCustomImageHandler() {
            this.useCustomImageHandler === true
                                            ? this.setupCustomImageHandler()
                                            : '';
        },

        setupCustomImageHandler() {
            const toolbar = this.quill.getModule('toolbar');
            toolbar.addHandler('image', this.customImageHandler);
        },

        handleUpdatedEditor() {
            const self = this;
            this.quill.on('text-change', () => {
                self.$emit('input', this.editor.innerHTML);
            });
        },

        listenStateChangeEditor() {
            const self = this;
            this.quill.on('selection-change', (range, oldRange, source) => {
                console.log(source);
                if (range) {
                    if (range.length == 0) {
                        self.$emit('reFocus', range);
                    } else {
                        const text = self.quill.getText(range.index, range.length);
                        self.$emit('reHighlighted', text, range);
                    }
                } else {
                    self.$emit('reBlur', source);
                }
            });
        },

        customImageHandler() {
            this.$refs.fileInput.click();
        },

        emitImageInfo($event) {
            const file = $event.target.files[0];
            const Editor = this.quill;
            const range = Editor.getSelection();
            const cursorLocation = range.index;
            this.$emit('reImageAdded', file, Editor, cursorLocation);
        }
    }
};
</script>

<style lang='scss'>
@import './../../node_modules/quill/dist/quill.core.css';
@import './../../node_modules/quill/dist/quill.snow.css';
@import './index.scss';
</style>

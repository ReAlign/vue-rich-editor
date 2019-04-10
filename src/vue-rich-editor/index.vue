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
import TransStyleTags from 'trans-style-tags';
import _ from './extend/util';

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
        keepPasteFormat: {
            type: Boolean,
            default: true
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
        },
        imageLinkTitle: {
            type: String,
            default: '请输入图片地址：'
        },
        imageLinkPlaceholder: {
            type: String,
            default: 'https://'
        },
        customLinkHref: {
            type: String,
            default: ''
        }
    },

    data() {
        return {
            quill: null,
            editor: null,
            toolbarContainer: [],
            toolbarHandlers: {
                'image-link': () => {
                    const Editor = this.quill;
                    const range = Editor.getSelection();
                    const cursorLocation = range.index;
                    let type = '';

                    const url = prompt(this.imageLinkTitle, this.imageLinkPlaceholder);

                    type = url === null
                            ? 'cancel'
                            : 'ok';

                    const options = {
                        url,
                        Editor,
                        range,
                        cursorLocation
                    };

                    this.$emit('reImageLink', type, options);
                },
                'custom-link': () => {
                    const vm = this;
                    const Editor = vm.quill;
                    const msgMap = Config.customLinkMsgMap;
                    const cusHref = vm.customLinkHref || '';
                    const { index = 0, length = 0 } = Editor.getSelection() || {};
                    let code = 0;

                    if(length) {
                        const hrefCL = cusHref ? cusHref : Editor.getText(index, length);
                        Editor.format('link', hrefCL);
                    } else {
                        code = 1;
                    }

                    this.$emit('reCustomLink', { code, msg: msgMap[code] || '' });
                }
            }
        };
    },

    mounted() {
        this.initToolbarContainer();
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
            if(val != this.editor.innerHTML && !this.quill.hasFocus()) {
                this.editor.innerHTML = val;
            }
        },
        disabled(status) {
            this.quill.enable(!status);
        }
    },

    methods: {
        // 初始化操作按钮
        initToolbarContainer() {
            const vm = this;
            const barArr = vm.editorContainer;
            const _flag = _.typeOf(barArr) === 'array'
                            && barArr.length;
            const attachBars = [];

            if(vm.customLinkHref) {
                attachBars.push('custom-link');
            }

            vm.toolbarContainer = _flag ? barArr : Config.defaultEditorContainer;
            if(attachBars.length) {
                vm.toolbarContainer.push(attachBars);
            }
        },
        initRegisterModules() {
            if(!this.quillRegisterKeys
                || (this.quillRegisterKeys
                    && this.quillRegisterKeys.length)) {
                const _keys = (this.quillRegisterKeys
                                && this.quillRegisterKeys.length)
                            ? this.quillRegisterKeys
                            : Config.defaultQuillRegisterKeys;

                let _modules = {};

                _keys.forEach(item => {
                    if(Config.ENUM_MAP[item]) {
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
                imageLink: true,
                customLink: true
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
                readOnly: this.disabled ? this.disabled : false
            });
            // clear format from Clipboard Paste
            if(!this.keepPasteFormat) {
                this.quill.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
                    delta.ops = delta.ops.map(op => {
                        return { insert: op.insert };
                    });
                    return delta;
                });
            }

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
            const quill = self.quill;

            quill.on('editor-change', (eventName, ...args) => {
                if(eventName === 'selection-change') {
                    self.$emit('reCursorMove', {
                        range: args[0],
                        oldRange: args[1]
                    });
                }
            });

            quill.on('selection-change', (range, oldRange, source) => {
                const Editor = quill;

                let options = {
                    Editor,
                    source
                };
                if(range) {
                    const cursorLocation = range.index;

                    const _o = {
                        range,
                        oldRange,
                        cursorLocation
                    };

                    Object.assign(options, _o);

                    if(range.length == 0) {
                        self.$emit('reFocus', options);
                    } else {
                        const text = quill.getText(range.index, range.length);
                        Object.assign(options, { text });
                        self.$emit('reHighlighted', options);
                    }
                } else {
                    self.$emit('reBlur', options);
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

            const options = {
                file,
                Editor,
                range,
                cursorLocation
            };

            this.$emit('reImageAdded', options);
        },
        _$getTagFillHtml() {
            return new TransStyleTags().parse(this.value);
        }
    }
};
</script>

<style lang='scss'>
@import './../../node_modules/quill/dist/quill.core.css';
@import './../../node_modules/quill/dist/quill.snow.css';
@import './index.scss';
@import './custom-modules/image-link/index.scss';
@import './custom-modules/custom-link/index.scss';
</style>

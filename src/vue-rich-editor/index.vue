<template>
    <div class="quill-wrapper" :id="wrapId">
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
const FormatsLink = Quill.import('formats/link');

import TransStyleTags from 'trans-style-tags';
import _ from './extend/util';
import dom from './extend/dom';

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
        customProtocol: {
            type: Array,
            default: () => null
        },
        customLinkHref: {
            type: String,
            default: ''
        },
        toolbarTips: {
            type: Boolean,
            default: false
        },
        toolbarTipsText: {
            type: Object,
            default: () => null
        },
        atList: {
            type: Array,
            default: () => []
        },
        atHooks: {
            type: Object,
            default: () => null
        }
    },

    data() {
        return {
            quill: null,
            editor: null,
            toolbarContainer: [],
            allProtocol: null,
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
                    const allProtocol = vm.allProtocol;
                    const cusHref = vm.customLinkHref || '';
                    const { index = 0, length = 0 } = Editor.getSelection() || {};
                    let code = 0;

                    if(length) {
                        // 判断自定义链接协议是否安全
                        const protocolOK = _.protocolSafe(allProtocol, cusHref);
                        // 不安全有提示
                        if(!protocolOK) {
                            const err = [
                                'Error:',
                                `\tcustomLinkHref's protocol is unsafe.`,
                                '\tif you really want to use,',
                                '\tPlease set up prop: customProtocol'
                            ];
                            console.error(err.join('\n'));
                        }
                        // 不安全的协议 Quill 会自动过滤掉
                        const hrefCL = protocolOK ? cusHref : Editor.getText(index, length);
                        Editor.format('link', hrefCL);
                    } else {
                        code = 1;
                    }

                    this.$emit('reCustomLink', { code, msg: msgMap[code] || '' });
                }
            },
            __registedKeys__: []
        };
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
    computed: {
        wrapId: function () {
            return `j-${this.id}-wrap`;
        }
    },

    mounted() {
        const vm = this;
        vm.registerCustomProtocol();
        vm.initToolbarContainer();
        vm.initRegisterModules();
        vm.initializeVueRichEditor();
        vm.handleUpdatedEditor();
        vm.listenStateChangeEditor();

        setTimeout(() => {
            vm.createToolbarTips();
        }, 0);
    },

    methods: {
        // 注册自定义协议
        registerCustomProtocol() {
            const vm = this;
            (vm.customProtocol || []).forEach(protocol => {
                FormatsLink.PROTOCOL_WHITELIST.push(protocol);
            });

            Quill.register(FormatsLink, true);

            vm.allProtocol = FormatsLink.PROTOCOL_WHITELIST.map(item => item);
        },
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

            vm.toolbarContainer = _flag ? barArr : Config.defaultEditorContainer();
            if(attachBars.length) {
                vm.toolbarContainer.push(attachBars);
            }
        },
        initRegisterModules() {
            if(!this.quillRegisterKeys
                || (this.quillRegisterKeys
                    && this.quillRegisterKeys.length)) {
                this.__registedKeys__ = (this.quillRegisterKeys
                                && this.quillRegisterKeys.length)
                            ? this.quillRegisterKeys
                            : Config.defaultQuillRegisterKeys();

                let _modules = {};

                this.__registedKeys__.forEach(item => {
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
            const vm = this;
            const modules = vm.getQuillModules();
            vm.quill = new Quill(vm.$refs.quillContainer, {
                theme: 'snow',
                bounds: `#${vm.id}`,
                formats: Config.defaultClipboardFormats(),
                modules,
                placeholder: vm.placeholder,
                readOnly: vm.disabled ? vm.disabled : false
            });
            // clear format from Clipboard Paste
            if(!vm.keepPasteFormat) {
                this.quill.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
                    delta.ops = delta.ops.map(op => {
                        return { insert: op.insert };
                    });
                    return delta;
                });
            }

            const tooltip = vm.quill.theme.tooltip;
            const input = tooltip.root.querySelector('input[data-link]');
            input.dataset.link = vm.linkPlaceholder;

            vm.checkForCustomImageHandler();
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

        createToolbarTips() {
            const vm = this;

            // 需要展示提示
            if(!vm.toolbarTips) {
                return false;
            }

            const wrap = dom.$(`#${vm.wrapId}`);
            const BTNS = Config.toolbarBtns;
            const TEXT = vm.toolbarTipsText || {};

            Object.keys(BTNS).forEach((k) => {
                const tipObj = BTNS[k];
                const btn = dom.$$$(wrap, tipObj.cls)[tipObj.order || 0];
                if(btn) {
                    const tipDom = dom.create('span');
                    tipDom.className += 'm-vre-tooltips m-vre-tooltips-dark';
                    dom.html(tipDom, `<span>${TEXT[k] || tipObj.tip || '-'}</span>`)
                    dom.inject(tipDom, btn);
                }
            });
        },

        _$getTagFillHtml() {
            return new TransStyleTags().parse(this.value);
        },
        _$getEffectiveValue() {
            const vm = this;
            const Editor = vm.quill;

            const trimLenIsZero = Editor.getText().trim().length === 0;
            const notExistImg = Editor.container.firstChild.innerHTML.includes('img') === false;
            // trim长度为0 && 没有图片
            const isEmpty = trimLenIsZero && notExistImg;
            const content = isEmpty ? '' : vm.value;

            return content;
        },

        getQuillModules() {
            const vm = this;
            const _modulesConf = {
                toolbar: {
                    container: vm.toolbarContainer,
                    handlers: vm.toolbarHandlers
                },
                clipboard: {
                    matchVisual: false
                },
                imageLink: true,
                customLink: true
            };
            /**
             * 动态注册
             */
            const _rKeys_ = vm.__registedKeys__;
            // 是图缩放：设置 formatter
            if(_rKeys_.includes('imageResize')) {
                _modulesConf.blotFormatter = {
                    specs: [Config.MyImageSpec]
                };
            }
            // 是 at && 参数合法
            if(_rKeys_.includes('at') && vm.checkAtParams()) {
                _modulesConf.at = {
                    list: vm.atList,
                    hooks: vm.atHooks
                };
            }
            return _modulesConf;
        },
        checkAtParams() {
            const atList = this.atList;
            // const atHooks = this.atHooks;
            const atListOK = (atList) => {
                const flag = _.typeOf(atList) === 'array'
                    && atList.length
                    && _.typeOf(atList[0].label) === 'string';
                return flag;
            };
            const atHooksOK = () => true;
            return atListOK && atHooksOK;
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
@import './custom-modules/at/index.scss';
</style>

webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);



new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_1__App_vue___default.a);
    }
});

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = {
    URL: {
        UPLOAD_IMAGE: 'https://sm.ms/api/upload'
    },
    imageFileName: 'smfile'
};



/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_paste__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_paste___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clipboard_paste__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VueRichEditor: __WEBPACK_IMPORTED_MODULE_0__src_index_js__["a" /* VueRichEditor */]
    },
    data: function data() {
        return {
            vueEditorRef: 'vueEditorRef',
            editorId: 'editor',
            toolbarTips: true,
            customProtocol: ['qiyu'],
            customLinkHref: 'htstp://action.qiyukf.com?command=applyHumanStaff',
            keepPasteFormat: false,
            editorContent: '<h4><span style="font-weight: bold; font-style: italic; color: rgb(230, 0, 0);">这是一段文字</span></h4><br><br><img src="https://dwz.cn/fBofuN4L" width="150px" height="150px" />',
            setEditorDemo: '<h1>hahahah</h1>',
            editorIsDisabled: false,
            linkPlaceholder: '请输入链接',
            editorFocusCache: null,
            editorHasFocusFlag: false,

            vueEditorRef2: 'vueEditorRef2',
            editorId2: 'editor2',
            customLinkHref2: 'qiyu//:qqq',
            editorContent2: ''
        };
    },
    mounted: function mounted() {
        //
    },

    methods: {
        getTrans: function getTrans() {
            var vm = this;
            console.log(vm.$refs[vm.vueEditorRef]._$getTagFillHtml());
        },
        setEditor: function setEditor() {
            var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'demo';

            this.editorContent = str;
        },
        saveContent: function saveContent() {
            var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            console.log(content);
        },
        showEffectiveValue: function showEffectiveValue() {
            var vm = this;
            console.log(vm.$refs[vm.vueEditorRef]._$getEffectiveValue());
        },
        editorFocusEvt: function editorFocusEvt(opt) {
            this.editorFocusCache = opt;

            if (!this.editorHasFocusFlag) {
                this.editorHasFocusFlag = true;
                __WEBPACK_IMPORTED_MODULE_3_clipboard_paste___default.a.addEvtPaste4Image('#' + this.editorId, this.cbPasteEvtImage);
            }
        },
        cbPasteEvtImage: function cbPasteEvtImage(e, blob) {
            if (blob) {
                e.preventDefault();
                var _c = this.editorFocusCache;

                console.log(e, blob);
                console.log(_c);

                var opt = {
                    file: blob.content,
                    Editor: _c.Editor,
                    cursorLocation: _c.cursorLocation
                };
                this.uploadImage(opt);
            }
        },
        editorCustomLink: function editorCustomLink(opts) {
            console.log(opts);
        },
        editorCursorMove: function editorCursorMove(opt) {
            var editorFocusCache = this.editorFocusCache;
            var range = opt.range,
                oldRange = opt.oldRange;

            if (editorFocusCache && !range && oldRange) {
                editorFocusCache.range = oldRange;
                editorFocusCache.cursorLocation = oldRange.index;
            }
        },
        editorBlurEvt: function editorBlurEvt() {
            console.log('Cursor not in the editor');
        },
        editorHighlightedEvt: function editorHighlightedEvt(opt) {
            var text = opt.text,
                range = opt.range;

            console.log('User has highlighted: ', text);
            console.log(range);
        },
        uploadImage: function uploadImage(options) {
            var self = this;
            var file = options.file,
                Editor = options.Editor,
                cursorLocation = options.cursorLocation;

            var formData = new FormData();
            formData.append(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].imageFileName, file);

            this.editorIsDisabled = true;

            __WEBPACK_IMPORTED_MODULE_1_axios___default()({
                url: __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].URL.UPLOAD_IMAGE,
                method: 'POST',
                data: formData
            }).then(function (result) {
                self.editorIsDisabled = false;
                console.log(result);
                var url = result.data.data.url;
                Editor.insertEmbed(cursorLocation, 'image', url);
            }).catch(function (err) {
                self.editorIsDisabled = false;
                console.log(err);
            });
        },
        addImageLink: function addImageLink() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ok';
            var options = arguments[1];
            var url = options.url,
                Editor = options.Editor,
                cursorLocation = options.cursorLocation;

            if (type == 'cancel') {
                return false;
            }
            if (type == 'ok') {
                if (url != '') {
                    alert(url);
                } else {
                    alert('url 必填哈');
                }
            }
        }
    }
});

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_trans_style_tags__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__extend_util__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__extend_dom_js__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(126);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var FormatsLink = __WEBPACK_IMPORTED_MODULE_2_quill___default.a.import('formats/link');







/* harmony default export */ __webpack_exports__["default"] = ({
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
            default: function _default() {
                return [];
            }
        },
        useCustomImageHandler: {
            type: Boolean,
            default: false
        },
        quillRegisterKeys: {
            type: Array,
            default: function _default() {
                return null;
            }
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
            default: function _default() {
                return null;
            }
        },
        customLinkHref: {
            type: String,
            default: ''
        },
        toolbarTips: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        var _this = this;

        return {
            quill: null,
            editor: null,
            toolbarContainer: [],
            allProtocol: null,
            toolbarHandlers: {
                'image-link': function imageLink() {
                    var Editor = _this.quill;
                    var range = Editor.getSelection();
                    var cursorLocation = range.index;
                    var type = '';

                    var url = prompt(_this.imageLinkTitle, _this.imageLinkPlaceholder);

                    type = url === null ? 'cancel' : 'ok';

                    var options = {
                        url: url,
                        Editor: Editor,
                        range: range,
                        cursorLocation: cursorLocation
                    };

                    _this.$emit('reImageLink', type, options);
                },
                'custom-link': function customLink() {
                    var vm = _this;
                    var Editor = vm.quill;
                    var msgMap = __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].customLinkMsgMap;
                    var allProtocol = vm.allProtocol;
                    var cusHref = vm.customLinkHref || '';

                    var _ref = Editor.getSelection() || {},
                        _ref$index = _ref.index,
                        index = _ref$index === undefined ? 0 : _ref$index,
                        _ref$length = _ref.length,
                        length = _ref$length === undefined ? 0 : _ref$length;

                    var code = 0;

                    if (length) {
                        // 判断自定义链接协议是否安全
                        var protocolOK = __WEBPACK_IMPORTED_MODULE_4__extend_util__["a" /* default */].protocolSafe(allProtocol, cusHref);
                        // 不安全有提示
                        if (!protocolOK) {
                            var err = ['Error:', '\tcustomLinkHref\'s protocol is unsafe.', '\tif you really want to use,', '\tPlease set up prop: customProtocol'];
                            console.error(err.join('\n'));
                        }
                        // 不安全的协议 Quill 会自动过滤掉
                        var hrefCL = protocolOK ? cusHref : Editor.getText(index, length);
                        Editor.format('link', hrefCL);
                    } else {
                        code = 1;
                    }

                    _this.$emit('reCustomLink', { code: code, msg: msgMap[code] || '' });
                }
            }
        };
    },


    watch: {
        value: function value(val) {
            if (val != this.editor.innerHTML && !this.quill.hasFocus()) {
                this.editor.innerHTML = val;
            }
        },
        disabled: function disabled(status) {
            this.quill.enable(!status);
        }
    },
    computed: {
        wrapId: function wrapId() {
            return 'j-' + this.id + '-wrap';
        }
    },

    mounted: function mounted() {
        var vm = this;
        vm.registerCustomProtocol();
        vm.initToolbarContainer();
        vm.initRegisterModules();
        vm.initializeVueRichEditor();
        vm.handleUpdatedEditor();
        vm.listenStateChangeEditor();

        setTimeout(function () {
            vm.createToolbarTips();
        }, 0);
    },


    methods: {
        // 注册自定义协议
        registerCustomProtocol: function registerCustomProtocol() {
            var vm = this;
            (vm.customProtocol || []).forEach(function (protocol) {
                FormatsLink.PROTOCOL_WHITELIST.push(protocol);
            });

            __WEBPACK_IMPORTED_MODULE_2_quill___default.a.register(FormatsLink, true);

            vm.allProtocol = FormatsLink.PROTOCOL_WHITELIST.map(function (item) {
                return item;
            });
        },

        // 初始化操作按钮
        initToolbarContainer: function initToolbarContainer() {
            var vm = this;
            var barArr = vm.editorContainer;
            var _flag = __WEBPACK_IMPORTED_MODULE_4__extend_util__["a" /* default */].typeOf(barArr) === 'array' && barArr.length;
            var attachBars = [];

            if (vm.customLinkHref) {
                attachBars.push('custom-link');
            }

            vm.toolbarContainer = _flag ? barArr : __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].defaultEditorContainer();
            if (attachBars.length) {
                vm.toolbarContainer.push(attachBars);
            }
        },
        initRegisterModules: function initRegisterModules() {
            if (!this.quillRegisterKeys || this.quillRegisterKeys && this.quillRegisterKeys.length) {
                var _keys = this.quillRegisterKeys && this.quillRegisterKeys.length ? this.quillRegisterKeys : __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].defaultQuillRegisterKeys();

                var _modules = {};

                _keys.forEach(function (item) {
                    if (__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].ENUM_MAP[item]) {
                        __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].ENUM_MAP[item].forEach(function (that) {
                            _modules[that.key] = that.value;
                        });
                    }
                });

                __WEBPACK_IMPORTED_MODULE_2_quill___default.a.register(_modules, true);
            }
        },
        initializeVueRichEditor: function initializeVueRichEditor() {
            this.setQuillElement();
            this.setEditorElement();
            this.checkForInitialContent();
        },
        setQuillElement: function setQuillElement() {
            var _modulesConf = {
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

            if (this.quillRegisterKeys && this.quillRegisterKeys.length && this.quillRegisterKeys.indexOf('imageResize') != -1 || !this.quillRegisterKeys) {
                _modulesConf.blotFormatter = {
                    specs: [__WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].MyImageSpec]
                };
            }

            this.quill = new __WEBPACK_IMPORTED_MODULE_2_quill___default.a(this.$refs.quillContainer, {
                theme: 'snow',
                bounds: '#' + this.id,
                formats: __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].defaultClipboardFormats(),
                modules: _modulesConf,
                placeholder: this.placeholder,
                readOnly: this.disabled ? this.disabled : false
            });
            // clear format from Clipboard Paste
            if (!this.keepPasteFormat) {
                this.quill.clipboard.addMatcher(Node.ELEMENT_NODE, function (node, delta) {
                    delta.ops = delta.ops.map(function (op) {
                        return { insert: op.insert };
                    });
                    return delta;
                });
            }

            var tooltip = this.quill.theme.tooltip;
            var input = tooltip.root.querySelector('input[data-link]');
            input.dataset.link = this.linkPlaceholder;

            this.checkForCustomImageHandler();
        },
        setEditorElement: function setEditorElement() {
            this.editor = document.querySelector('#' + this.id + ' .ql-editor');
        },
        checkForInitialContent: function checkForInitialContent() {
            this.editor.innerHTML = this.value || '';
        },
        checkForCustomImageHandler: function checkForCustomImageHandler() {
            this.useCustomImageHandler === true ? this.setupCustomImageHandler() : '';
        },
        setupCustomImageHandler: function setupCustomImageHandler() {
            var toolbar = this.quill.getModule('toolbar');
            toolbar.addHandler('image', this.customImageHandler);
        },
        handleUpdatedEditor: function handleUpdatedEditor() {
            var _this2 = this;

            var self = this;
            this.quill.on('text-change', function () {
                self.$emit('input', _this2.editor.innerHTML);
            });
        },
        listenStateChangeEditor: function listenStateChangeEditor() {
            var self = this;
            var quill = self.quill;

            quill.on('editor-change', function (eventName) {
                if (eventName === 'selection-change') {
                    self.$emit('reCursorMove', {
                        range: arguments.length <= 1 ? undefined : arguments[1],
                        oldRange: arguments.length <= 2 ? undefined : arguments[2]
                    });
                }
            });

            quill.on('selection-change', function (range, oldRange, source) {
                var Editor = quill;

                var options = {
                    Editor: Editor,
                    source: source
                };
                if (range) {
                    var cursorLocation = range.index;

                    var _o = {
                        range: range,
                        oldRange: oldRange,
                        cursorLocation: cursorLocation
                    };

                    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(options, _o);

                    if (range.length == 0) {
                        self.$emit('reFocus', options);
                    } else {
                        var text = quill.getText(range.index, range.length);
                        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(options, { text: text });
                        self.$emit('reHighlighted', options);
                    }
                } else {
                    self.$emit('reBlur', options);
                }
            });
        },
        customImageHandler: function customImageHandler() {
            this.$refs.fileInput.click();
        },
        emitImageInfo: function emitImageInfo($event) {
            var file = $event.target.files[0];
            var Editor = this.quill;
            var range = Editor.getSelection();
            var cursorLocation = range.index;

            var options = {
                file: file,
                Editor: Editor,
                range: range,
                cursorLocation: cursorLocation
            };

            this.$emit('reImageAdded', options);
        },
        createToolbarTips: function createToolbarTips() {
            var vm = this;

            // 需要展示提示
            if (!vm.toolbarTips) {
                return false;
            }

            var wrap = __WEBPACK_IMPORTED_MODULE_5__extend_dom_js__["a" /* default */].$('#' + vm.wrapId);
            var BTNS = __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].toolbarBtns;

            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(BTNS).forEach(function (k) {
                var tipObj = BTNS[k];
                var btn = __WEBPACK_IMPORTED_MODULE_5__extend_dom_js__["a" /* default */].$$$(wrap, tipObj.cls)[tipObj.order || 0];
                var tipDom = __WEBPACK_IMPORTED_MODULE_5__extend_dom_js__["a" /* default */].create('span');

                tipDom.className += 'm-vre-tooltips m-vre-tooltips-dark';
                __WEBPACK_IMPORTED_MODULE_5__extend_dom_js__["a" /* default */].html(tipDom, '<span>' + (tipObj.tip || '-') + '</span>');
                __WEBPACK_IMPORTED_MODULE_5__extend_dom_js__["a" /* default */].inject(tipDom, btn);
            });
        },
        _$getTagFillHtml: function _$getTagFillHtml() {
            return new __WEBPACK_IMPORTED_MODULE_3_trans_style_tags__["a" /* default */]().parse(this.value);
        },
        _$getEffectiveValue: function _$getEffectiveValue() {
            var vm = this;
            var Editor = vm.quill;

            var trimLenIsZero = Editor.getText().trim().length === 0;
            var notExistImg = Editor.container.firstChild.innerHTML.includes('img') === false;
            // trim长度为0 && 没有图片
            var isEmpty = trimLenIsZero && notExistImg;
            var content = isEmpty ? '' : vm.value;

            return content;
        }
    }
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_rich_editor_index_vue__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_rich_editor_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue_rich_editor_index_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vue_rich_editor_index_vue___default.a; });


var VEditor = {
    VueRichEditor: __WEBPACK_IMPORTED_MODULE_0__vue_rich_editor_index_vue___default.a,
    install: function install(Vue) {
        Vue.component(__WEBPACK_IMPORTED_MODULE_0__vue_rich_editor_index_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_0__vue_rich_editor_index_vue___default.a);
    }
};

/* unused harmony default export */ var _unused_webpack_default_export = (VEditor);


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rewrite_set_style_method_bold__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rewrite_set_style_method_italic__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rewrite_set_style_method_underline__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rewrite_set_style_method_size__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_n_quill_blot_formatter__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_n_quill_blot_formatter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_n_quill_blot_formatter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_n_quill_blot_formatter_dist_specs_ImageSpec__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_n_quill_blot_formatter_dist_specs_ImageSpec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_n_quill_blot_formatter_dist_specs_ImageSpec__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_n_quill_blot_formatter_dist_actions_ResizeAction__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_n_quill_blot_formatter_dist_actions_ResizeAction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_n_quill_blot_formatter_dist_actions_ResizeAction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_n_quill_blot_formatter_dist_actions_DeleteAction__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_n_quill_blot_formatter_dist_actions_DeleteAction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_n_quill_blot_formatter_dist_actions_DeleteAction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__custom_modules_image_link_index__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__custom_modules_custom_link_index__ = __webpack_require__(127);


















var config = {};

config.defaultEditorContainer = function () {
    return [['link', 'bold', 'italic', 'underline'], [{ color: [] }], [{ list: 'bullet' }, { list: 'ordered' }], ['image', 'image-link'], [{
        size: ['32px', '24px', '18px', '16px', '13px', '12px', false]
    }], ['clean']];
};

config.defaultClipboardFormats = function () {
    return ['link', 'bold', 'italic', 'underline', 'color', 'list', 'image', 'width', 'height', 'size', 'header'];
};

config.defaultQuillRegisterKeys = function () {
    return ['inline', 'size', 'imageResize', 'imageLink', 'customLink'];
};

config.ENUM_MAP = {
    inline: [{
        key: 'formats/bold',
        value: __WEBPACK_IMPORTED_MODULE_5__rewrite_set_style_method_bold__["a" /* default */]
    }, {
        key: 'formats/italic',
        value: __WEBPACK_IMPORTED_MODULE_6__rewrite_set_style_method_italic__["a" /* default */]
    }, {
        key: 'formats/underline',
        value: __WEBPACK_IMPORTED_MODULE_7__rewrite_set_style_method_underline__["a" /* default */]
    }],
    size: [{
        key: 'formats/size',
        value: __WEBPACK_IMPORTED_MODULE_8__rewrite_set_style_method_size__["a" /* default */]
    }],
    imageResize: [{
        key: 'modules/blotFormatter',
        value: __WEBPACK_IMPORTED_MODULE_9_n_quill_blot_formatter___default.a
    }],
    imageLink: [{
        key: 'modules/imageLink',
        value: __WEBPACK_IMPORTED_MODULE_13__custom_modules_image_link_index__["a" /* default */]
    }],
    customLink: [{
        key: 'modules/customLink',
        value: __WEBPACK_IMPORTED_MODULE_14__custom_modules_custom_link_index__["a" /* default */]
    }]
};

var MyResizeAction = function (_ResizeAction) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MyResizeAction, _ResizeAction);

    function MyResizeAction() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MyResizeAction);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MyResizeAction.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MyResizeAction)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MyResizeAction, [{
        key: 'onUpdate',
        value: function onUpdate() {
            //
        }
    }]);

    return MyResizeAction;
}(__WEBPACK_IMPORTED_MODULE_11_n_quill_blot_formatter_dist_actions_ResizeAction___default.a);

var MyImageSpec = function (_ImageSpec) {
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MyImageSpec, _ImageSpec);

    function MyImageSpec() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MyImageSpec);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MyImageSpec.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MyImageSpec)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MyImageSpec, [{
        key: 'getActions',
        value: function getActions() {
            return [MyResizeAction, __WEBPACK_IMPORTED_MODULE_12_n_quill_blot_formatter_dist_actions_DeleteAction___default.a];
        }
    }]);

    return MyImageSpec;
}(__WEBPACK_IMPORTED_MODULE_10_n_quill_blot_formatter_dist_specs_ImageSpec___default.a);

config.MyImageSpec = MyImageSpec;

config.customLinkMsgMap = {
    0: 'Set custom-link successful.',
    1: 'Selection is empty!'
};

config.toolbarBtns = {
    link: {
        cls: '.ql-link',
        tip: '超链接'
    },
    bold: {
        cls: '.ql-bold',
        tip: '粗体'
    },
    italic: {
        cls: '.ql-italic',
        tip: '斜体'
    },
    underline: {
        cls: '.ql-underline',
        tip: '下划线'
    },
    color: {
        cls: '.ql-color-picker',
        tip: '文字颜色'
    },
    bullet: {
        cls: '.ql-list',
        order: 0,
        tip: '无序列表'
    },
    ordered: {
        cls: '.ql-list',
        order: 1,
        tip: '有序列表'
    },
    image: {
        cls: '.ql-image',
        tip: '图片文件'
    },
    'image-link': {
        cls: '.ql-image-link',
        tip: '在线图片'
    },
    size: {
        cls: '.ql-size',
        tip: '文字大小'
    },
    clean: {
        cls: '.ql-clean',
        tip: '清除格式'
    },
    'custom-link': {
        cls: '.ql-custom-link',
        tip: '自定义链接'
    }
};

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);


var CustomLink = function CustomLink() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, CustomLink);

    var customLinkBtns = document.getElementsByClassName('ql-custom-link');
    if (customLinkBtns) {
        [].slice.call(customLinkBtns).forEach(function (item) {
            item.innerHTML = '<span class="ql-custom-link-inner"></span>';
        });
    };
};

/* harmony default export */ __webpack_exports__["a"] = (CustomLink);

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);


var ImageLink = function ImageLink() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, ImageLink);

    var imageLinkBtns = document.getElementsByClassName('ql-image-link');
    if (imageLinkBtns) {
        [].slice.call(imageLinkBtns).forEach(function (item) {
            item.innerHTML = '<span class="ql-image-link-inner"></span>';
        });
    };
};

/* harmony default export */ __webpack_exports__["a"] = (ImageLink);

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(69);


var dom = {};

dom.$ = function () {
    var sl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (document.querySelector) {
        try {
            return document.querySelector(sl);
        } catch (e) {
            throw new Error(e);
        }
    }
    if (sl.indexOf('#') !== -1) {
        return document.getElementById(sl.slice(1));
    }
};
dom.$$ = function () {
    var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var cls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return elem.querySelector(cls);
};
dom.$$$ = function () {
    var elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var cls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return elem.querySelectorAll(cls);
};

dom.text = function () {
    var map = {};
    if (dom.msie && dom.msie < 9) {
        map[1] = 'innerText';
        map[3] = 'nodeValue';
    } else {
        map[1] = map[3] = 'textContent';
    }

    return function (node, value) {
        var textProp = map[node.nodeType];
        if (value === null) {
            return textProp ? node[textProp] : '';
        }
        node[textProp] = value;
    };
}();

dom.html = function () {
    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].typeOf(html) !== 'undefined') {
        node.innerHTML = html;
    } else {
        return node.innerHTML;
    }
};

dom.create = function () {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var d = type ? document.createElement(type) : null;
    return d;
};

dom.inject = function () {
    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var refer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (!node) {
        return null;
    }

    if (Array.isArray(node)) {
        var tmp = node;
        node = dom.fragment();
        for (var i = 0, len = tmp.length; i < len; i++) {
            node.appendChild(tmp[i]);
        }
    }

    refer.appendChild(node);
};

/* harmony default export */ __webpack_exports__["a"] = (dom);

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);









var Parchment = __WEBPACK_IMPORTED_MODULE_6_quill___default.a.import('parchment');

var BoldStyleAttributor = function (_Parchment$Attributor) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(BoldStyleAttributor, _Parchment$Attributor);

    function BoldStyleAttributor() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, BoldStyleAttributor);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BoldStyleAttributor.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(BoldStyleAttributor)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(BoldStyleAttributor, [{
        key: 'value',
        value: function value(domNode) {
            var value = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default()(BoldStyleAttributor.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(BoldStyleAttributor.prototype), 'value', this).call(this, domNode);
            return value;
        }
    }, {
        key: 'add',
        value: function add(node) {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(node).css('font-weight', 'bold');
            return true;
        }
    }, {
        key: 'remove',
        value: function remove(node) {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(node).css('font-weight', 'normal');
        }
    }]);

    return BoldStyleAttributor;
}(Parchment.Attributor.Style);

var BoldStyle = new BoldStyleAttributor('bold', 'font-weight', {
    scope: Parchment.Scope.INLINE
});

/* harmony default export */ __webpack_exports__["a"] = (BoldStyle);

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);









var Parchment = __WEBPACK_IMPORTED_MODULE_6_quill___default.a.import('parchment');

var ItalicStyleAttributor = function (_Parchment$Attributor) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(ItalicStyleAttributor, _Parchment$Attributor);

    function ItalicStyleAttributor() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ItalicStyleAttributor);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ItalicStyleAttributor.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ItalicStyleAttributor)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ItalicStyleAttributor, [{
        key: 'value',
        value: function value(domNode) {
            var value = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default()(ItalicStyleAttributor.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ItalicStyleAttributor.prototype), 'value', this).call(this, domNode);
            return value;
        }
    }, {
        key: 'add',
        value: function add(node) {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(node).css('font-style', 'italic');
            return true;
        }
    }, {
        key: 'remove',
        value: function remove(node) {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(node).css('font-style', 'normal');
        }
    }]);

    return ItalicStyleAttributor;
}(Parchment.Attributor.Style);

var ItalicStyle = new ItalicStyleAttributor('italic', 'font-style', {
    scope: Parchment.Scope.INLINE
});

/* harmony default export */ __webpack_exports__["a"] = (ItalicStyle);

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_quill__);


var SizeStyle = __WEBPACK_IMPORTED_MODULE_0_quill___default.a.import('attributors/style/size');
SizeStyle.whitelist = ['32px', '24px', '18px', '16px', '13px', '12px', false];

/* harmony default export */ __webpack_exports__["a"] = (SizeStyle);

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);









var Parchment = __WEBPACK_IMPORTED_MODULE_6_quill___default.a.import('parchment');

var UnderlineStyleAttributor = function (_Parchment$Attributor) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(UnderlineStyleAttributor, _Parchment$Attributor);

    function UnderlineStyleAttributor() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, UnderlineStyleAttributor);

        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (UnderlineStyleAttributor.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(UnderlineStyleAttributor)).apply(this, arguments));
    }

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(UnderlineStyleAttributor, [{
        key: 'value',
        value: function value(domNode) {
            var value = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default()(UnderlineStyleAttributor.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(UnderlineStyleAttributor.prototype), 'value', this).call(this, domNode);
            return value;
        }
    }, {
        key: 'add',
        value: function add(node) {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(node).css('text-decoration', 'underline');
            return true;
        }
    }, {
        key: 'remove',
        value: function remove(node) {
            __WEBPACK_IMPORTED_MODULE_7_jquery___default()(node).css('text-decoration', 'none');
        }
    }]);

    return UnderlineStyleAttributor;
}(Parchment.Attributor.Style);

var UnderlineStyle = new UnderlineStyleAttributor('underline', 'text-decoration', {
    scope: Parchment.Scope.INLINE
});

/* harmony default export */ __webpack_exports__["a"] = (UnderlineStyle);

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = {"Aacute;":"Á","Aacute":"Á","aacute;":"á","aacute":"á","Abreve;":"Ă","abreve;":"ă","ac;":"∾","acd;":"∿","acE;":"∾̳","Acirc;":"Â","Acirc":"Â","acirc;":"â","acirc":"â","acute;":"´","acute":"´","Acy;":"А","acy;":"а","AElig;":"Æ","AElig":"Æ","aelig;":"æ","aelig":"æ","af;":"⁡","Afr;":"𝔄","afr;":"𝔞","Agrave;":"À","Agrave":"À","agrave;":"à","agrave":"à","alefsym;":"ℵ","aleph;":"ℵ","Alpha;":"Α","alpha;":"α","Amacr;":"Ā","amacr;":"ā","amalg;":"⨿","AMP;":"&","AMP":"&","amp;":"&","amp":"&","And;":"⩓","and;":"∧","andand;":"⩕","andd;":"⩜","andslope;":"⩘","andv;":"⩚","ang;":"∠","ange;":"⦤","angle;":"∠","angmsd;":"∡","angmsdaa;":"⦨","angmsdab;":"⦩","angmsdac;":"⦪","angmsdad;":"⦫","angmsdae;":"⦬","angmsdaf;":"⦭","angmsdag;":"⦮","angmsdah;":"⦯","angrt;":"∟","angrtvb;":"⊾","angrtvbd;":"⦝","angsph;":"∢","angst;":"Å","angzarr;":"⍼","Aogon;":"Ą","aogon;":"ą","Aopf;":"𝔸","aopf;":"𝕒","ap;":"≈","apacir;":"⩯","apE;":"⩰","ape;":"≊","apid;":"≋","apos;":"'","ApplyFunction;":"⁡","approx;":"≈","approxeq;":"≊","Aring;":"Å","Aring":"Å","aring;":"å","aring":"å","Ascr;":"𝒜","ascr;":"𝒶","Assign;":"≔","ast;":"*","asymp;":"≈","asympeq;":"≍","Atilde;":"Ã","Atilde":"Ã","atilde;":"ã","atilde":"ã","Auml;":"Ä","Auml":"Ä","auml;":"ä","auml":"ä","awconint;":"∳","awint;":"⨑","backcong;":"≌","backepsilon;":"϶","backprime;":"‵","backsim;":"∽","backsimeq;":"⋍","Backslash;":"∖","Barv;":"⫧","barvee;":"⊽","Barwed;":"⌆","barwed;":"⌅","barwedge;":"⌅","bbrk;":"⎵","bbrktbrk;":"⎶","bcong;":"≌","Bcy;":"Б","bcy;":"б","bdquo;":"„","becaus;":"∵","Because;":"∵","because;":"∵","bemptyv;":"⦰","bepsi;":"϶","bernou;":"ℬ","Bernoullis;":"ℬ","Beta;":"Β","beta;":"β","beth;":"ℶ","between;":"≬","Bfr;":"𝔅","bfr;":"𝔟","bigcap;":"⋂","bigcirc;":"◯","bigcup;":"⋃","bigodot;":"⨀","bigoplus;":"⨁","bigotimes;":"⨂","bigsqcup;":"⨆","bigstar;":"★","bigtriangledown;":"▽","bigtriangleup;":"△","biguplus;":"⨄","bigvee;":"⋁","bigwedge;":"⋀","bkarow;":"⤍","blacklozenge;":"⧫","blacksquare;":"▪","blacktriangle;":"▴","blacktriangledown;":"▾","blacktriangleleft;":"◂","blacktriangleright;":"▸","blank;":"␣","blk12;":"▒","blk14;":"░","blk34;":"▓","block;":"█","bne;":"=⃥","bnequiv;":"≡⃥","bNot;":"⫭","bnot;":"⌐","Bopf;":"𝔹","bopf;":"𝕓","bot;":"⊥","bottom;":"⊥","bowtie;":"⋈","boxbox;":"⧉","boxDL;":"╗","boxDl;":"╖","boxdL;":"╕","boxdl;":"┐","boxDR;":"╔","boxDr;":"╓","boxdR;":"╒","boxdr;":"┌","boxH;":"═","boxh;":"─","boxHD;":"╦","boxHd;":"╤","boxhD;":"╥","boxhd;":"┬","boxHU;":"╩","boxHu;":"╧","boxhU;":"╨","boxhu;":"┴","boxminus;":"⊟","boxplus;":"⊞","boxtimes;":"⊠","boxUL;":"╝","boxUl;":"╜","boxuL;":"╛","boxul;":"┘","boxUR;":"╚","boxUr;":"╙","boxuR;":"╘","boxur;":"└","boxV;":"║","boxv;":"│","boxVH;":"╬","boxVh;":"╫","boxvH;":"╪","boxvh;":"┼","boxVL;":"╣","boxVl;":"╢","boxvL;":"╡","boxvl;":"┤","boxVR;":"╠","boxVr;":"╟","boxvR;":"╞","boxvr;":"├","bprime;":"‵","Breve;":"˘","breve;":"˘","brvbar;":"¦","brvbar":"¦","Bscr;":"ℬ","bscr;":"𝒷","bsemi;":"⁏","bsim;":"∽","bsime;":"⋍","bsol;":"\\","bsolb;":"⧅","bsolhsub;":"⟈","bull;":"•","bullet;":"•","bump;":"≎","bumpE;":"⪮","bumpe;":"≏","Bumpeq;":"≎","bumpeq;":"≏","Cacute;":"Ć","cacute;":"ć","Cap;":"⋒","cap;":"∩","capand;":"⩄","capbrcup;":"⩉","capcap;":"⩋","capcup;":"⩇","capdot;":"⩀","CapitalDifferentialD;":"ⅅ","caps;":"∩︀","caret;":"⁁","caron;":"ˇ","Cayleys;":"ℭ","ccaps;":"⩍","Ccaron;":"Č","ccaron;":"č","Ccedil;":"Ç","Ccedil":"Ç","ccedil;":"ç","ccedil":"ç","Ccirc;":"Ĉ","ccirc;":"ĉ","Cconint;":"∰","ccups;":"⩌","ccupssm;":"⩐","Cdot;":"Ċ","cdot;":"ċ","cedil;":"¸","cedil":"¸","Cedilla;":"¸","cemptyv;":"⦲","cent;":"¢","cent":"¢","CenterDot;":"·","centerdot;":"·","Cfr;":"ℭ","cfr;":"𝔠","CHcy;":"Ч","chcy;":"ч","check;":"✓","checkmark;":"✓","Chi;":"Χ","chi;":"χ","cir;":"○","circ;":"ˆ","circeq;":"≗","circlearrowleft;":"↺","circlearrowright;":"↻","circledast;":"⊛","circledcirc;":"⊚","circleddash;":"⊝","CircleDot;":"⊙","circledR;":"®","circledS;":"Ⓢ","CircleMinus;":"⊖","CirclePlus;":"⊕","CircleTimes;":"⊗","cirE;":"⧃","cire;":"≗","cirfnint;":"⨐","cirmid;":"⫯","cirscir;":"⧂","ClockwiseContourIntegral;":"∲","CloseCurlyDoubleQuote;":"”","CloseCurlyQuote;":"’","clubs;":"♣","clubsuit;":"♣","Colon;":"∷","colon;":":","Colone;":"⩴","colone;":"≔","coloneq;":"≔","comma;":",","commat;":"@","comp;":"∁","compfn;":"∘","complement;":"∁","complexes;":"ℂ","cong;":"≅","congdot;":"⩭","Congruent;":"≡","Conint;":"∯","conint;":"∮","ContourIntegral;":"∮","Copf;":"ℂ","copf;":"𝕔","coprod;":"∐","Coproduct;":"∐","COPY;":"©","COPY":"©","copy;":"©","copy":"©","copysr;":"℗","CounterClockwiseContourIntegral;":"∳","crarr;":"↵","Cross;":"⨯","cross;":"✗","Cscr;":"𝒞","cscr;":"𝒸","csub;":"⫏","csube;":"⫑","csup;":"⫐","csupe;":"⫒","ctdot;":"⋯","cudarrl;":"⤸","cudarrr;":"⤵","cuepr;":"⋞","cuesc;":"⋟","cularr;":"↶","cularrp;":"⤽","Cup;":"⋓","cup;":"∪","cupbrcap;":"⩈","CupCap;":"≍","cupcap;":"⩆","cupcup;":"⩊","cupdot;":"⊍","cupor;":"⩅","cups;":"∪︀","curarr;":"↷","curarrm;":"⤼","curlyeqprec;":"⋞","curlyeqsucc;":"⋟","curlyvee;":"⋎","curlywedge;":"⋏","curren;":"¤","curren":"¤","curvearrowleft;":"↶","curvearrowright;":"↷","cuvee;":"⋎","cuwed;":"⋏","cwconint;":"∲","cwint;":"∱","cylcty;":"⌭","Dagger;":"‡","dagger;":"†","daleth;":"ℸ","Darr;":"↡","dArr;":"⇓","darr;":"↓","dash;":"‐","Dashv;":"⫤","dashv;":"⊣","dbkarow;":"⤏","dblac;":"˝","Dcaron;":"Ď","dcaron;":"ď","Dcy;":"Д","dcy;":"д","DD;":"ⅅ","dd;":"ⅆ","ddagger;":"‡","ddarr;":"⇊","DDotrahd;":"⤑","ddotseq;":"⩷","deg;":"°","deg":"°","Del;":"∇","Delta;":"Δ","delta;":"δ","demptyv;":"⦱","dfisht;":"⥿","Dfr;":"𝔇","dfr;":"𝔡","dHar;":"⥥","dharl;":"⇃","dharr;":"⇂","DiacriticalAcute;":"´","DiacriticalDot;":"˙","DiacriticalDoubleAcute;":"˝","DiacriticalGrave;":"`","DiacriticalTilde;":"˜","diam;":"⋄","Diamond;":"⋄","diamond;":"⋄","diamondsuit;":"♦","diams;":"♦","die;":"¨","DifferentialD;":"ⅆ","digamma;":"ϝ","disin;":"⋲","div;":"÷","divide;":"÷","divide":"÷","divideontimes;":"⋇","divonx;":"⋇","DJcy;":"Ђ","djcy;":"ђ","dlcorn;":"⌞","dlcrop;":"⌍","dollar;":"$","Dopf;":"𝔻","dopf;":"𝕕","Dot;":"¨","dot;":"˙","DotDot;":"⃜","doteq;":"≐","doteqdot;":"≑","DotEqual;":"≐","dotminus;":"∸","dotplus;":"∔","dotsquare;":"⊡","doublebarwedge;":"⌆","DoubleContourIntegral;":"∯","DoubleDot;":"¨","DoubleDownArrow;":"⇓","DoubleLeftArrow;":"⇐","DoubleLeftRightArrow;":"⇔","DoubleLeftTee;":"⫤","DoubleLongLeftArrow;":"⟸","DoubleLongLeftRightArrow;":"⟺","DoubleLongRightArrow;":"⟹","DoubleRightArrow;":"⇒","DoubleRightTee;":"⊨","DoubleUpArrow;":"⇑","DoubleUpDownArrow;":"⇕","DoubleVerticalBar;":"∥","DownArrow;":"↓","Downarrow;":"⇓","downarrow;":"↓","DownArrowBar;":"⤓","DownArrowUpArrow;":"⇵","DownBreve;":"̑","downdownarrows;":"⇊","downharpoonleft;":"⇃","downharpoonright;":"⇂","DownLeftRightVector;":"⥐","DownLeftTeeVector;":"⥞","DownLeftVector;":"↽","DownLeftVectorBar;":"⥖","DownRightTeeVector;":"⥟","DownRightVector;":"⇁","DownRightVectorBar;":"⥗","DownTee;":"⊤","DownTeeArrow;":"↧","drbkarow;":"⤐","drcorn;":"⌟","drcrop;":"⌌","Dscr;":"𝒟","dscr;":"𝒹","DScy;":"Ѕ","dscy;":"ѕ","dsol;":"⧶","Dstrok;":"Đ","dstrok;":"đ","dtdot;":"⋱","dtri;":"▿","dtrif;":"▾","duarr;":"⇵","duhar;":"⥯","dwangle;":"⦦","DZcy;":"Џ","dzcy;":"џ","dzigrarr;":"⟿","Eacute;":"É","Eacute":"É","eacute;":"é","eacute":"é","easter;":"⩮","Ecaron;":"Ě","ecaron;":"ě","ecir;":"≖","Ecirc;":"Ê","Ecirc":"Ê","ecirc;":"ê","ecirc":"ê","ecolon;":"≕","Ecy;":"Э","ecy;":"э","eDDot;":"⩷","Edot;":"Ė","eDot;":"≑","edot;":"ė","ee;":"ⅇ","efDot;":"≒","Efr;":"𝔈","efr;":"𝔢","eg;":"⪚","Egrave;":"È","Egrave":"È","egrave;":"è","egrave":"è","egs;":"⪖","egsdot;":"⪘","el;":"⪙","Element;":"∈","elinters;":"⏧","ell;":"ℓ","els;":"⪕","elsdot;":"⪗","Emacr;":"Ē","emacr;":"ē","empty;":"∅","emptyset;":"∅","EmptySmallSquare;":"◻","emptyv;":"∅","EmptyVerySmallSquare;":"▫","emsp;":" ","emsp13;":" ","emsp14;":" ","ENG;":"Ŋ","eng;":"ŋ","ensp;":" ","Eogon;":"Ę","eogon;":"ę","Eopf;":"𝔼","eopf;":"𝕖","epar;":"⋕","eparsl;":"⧣","eplus;":"⩱","epsi;":"ε","Epsilon;":"Ε","epsilon;":"ε","epsiv;":"ϵ","eqcirc;":"≖","eqcolon;":"≕","eqsim;":"≂","eqslantgtr;":"⪖","eqslantless;":"⪕","Equal;":"⩵","equals;":"=","EqualTilde;":"≂","equest;":"≟","Equilibrium;":"⇌","equiv;":"≡","equivDD;":"⩸","eqvparsl;":"⧥","erarr;":"⥱","erDot;":"≓","Escr;":"ℰ","escr;":"ℯ","esdot;":"≐","Esim;":"⩳","esim;":"≂","Eta;":"Η","eta;":"η","ETH;":"Ð","ETH":"Ð","eth;":"ð","eth":"ð","Euml;":"Ë","Euml":"Ë","euml;":"ë","euml":"ë","euro;":"€","excl;":"!","exist;":"∃","Exists;":"∃","expectation;":"ℰ","ExponentialE;":"ⅇ","exponentiale;":"ⅇ","fallingdotseq;":"≒","Fcy;":"Ф","fcy;":"ф","female;":"♀","ffilig;":"ﬃ","fflig;":"ﬀ","ffllig;":"ﬄ","Ffr;":"𝔉","ffr;":"𝔣","filig;":"ﬁ","FilledSmallSquare;":"◼","FilledVerySmallSquare;":"▪","fjlig;":"fj","flat;":"♭","fllig;":"ﬂ","fltns;":"▱","fnof;":"ƒ","Fopf;":"𝔽","fopf;":"𝕗","ForAll;":"∀","forall;":"∀","fork;":"⋔","forkv;":"⫙","Fouriertrf;":"ℱ","fpartint;":"⨍","frac12;":"½","frac12":"½","frac13;":"⅓","frac14;":"¼","frac14":"¼","frac15;":"⅕","frac16;":"⅙","frac18;":"⅛","frac23;":"⅔","frac25;":"⅖","frac34;":"¾","frac34":"¾","frac35;":"⅗","frac38;":"⅜","frac45;":"⅘","frac56;":"⅚","frac58;":"⅝","frac78;":"⅞","frasl;":"⁄","frown;":"⌢","Fscr;":"ℱ","fscr;":"𝒻","gacute;":"ǵ","Gamma;":"Γ","gamma;":"γ","Gammad;":"Ϝ","gammad;":"ϝ","gap;":"⪆","Gbreve;":"Ğ","gbreve;":"ğ","Gcedil;":"Ģ","Gcirc;":"Ĝ","gcirc;":"ĝ","Gcy;":"Г","gcy;":"г","Gdot;":"Ġ","gdot;":"ġ","gE;":"≧","ge;":"≥","gEl;":"⪌","gel;":"⋛","geq;":"≥","geqq;":"≧","geqslant;":"⩾","ges;":"⩾","gescc;":"⪩","gesdot;":"⪀","gesdoto;":"⪂","gesdotol;":"⪄","gesl;":"⋛︀","gesles;":"⪔","Gfr;":"𝔊","gfr;":"𝔤","Gg;":"⋙","gg;":"≫","ggg;":"⋙","gimel;":"ℷ","GJcy;":"Ѓ","gjcy;":"ѓ","gl;":"≷","gla;":"⪥","glE;":"⪒","glj;":"⪤","gnap;":"⪊","gnapprox;":"⪊","gnE;":"≩","gne;":"⪈","gneq;":"⪈","gneqq;":"≩","gnsim;":"⋧","Gopf;":"𝔾","gopf;":"𝕘","grave;":"`","GreaterEqual;":"≥","GreaterEqualLess;":"⋛","GreaterFullEqual;":"≧","GreaterGreater;":"⪢","GreaterLess;":"≷","GreaterSlantEqual;":"⩾","GreaterTilde;":"≳","Gscr;":"𝒢","gscr;":"ℊ","gsim;":"≳","gsime;":"⪎","gsiml;":"⪐","GT;":">","GT":">","Gt;":"≫","gt;":">","gt":">","gtcc;":"⪧","gtcir;":"⩺","gtdot;":"⋗","gtlPar;":"⦕","gtquest;":"⩼","gtrapprox;":"⪆","gtrarr;":"⥸","gtrdot;":"⋗","gtreqless;":"⋛","gtreqqless;":"⪌","gtrless;":"≷","gtrsim;":"≳","gvertneqq;":"≩︀","gvnE;":"≩︀","Hacek;":"ˇ","hairsp;":" ","half;":"½","hamilt;":"ℋ","HARDcy;":"Ъ","hardcy;":"ъ","hArr;":"⇔","harr;":"↔","harrcir;":"⥈","harrw;":"↭","Hat;":"^","hbar;":"ℏ","Hcirc;":"Ĥ","hcirc;":"ĥ","hearts;":"♥","heartsuit;":"♥","hellip;":"…","hercon;":"⊹","Hfr;":"ℌ","hfr;":"𝔥","HilbertSpace;":"ℋ","hksearow;":"⤥","hkswarow;":"⤦","hoarr;":"⇿","homtht;":"∻","hookleftarrow;":"↩","hookrightarrow;":"↪","Hopf;":"ℍ","hopf;":"𝕙","horbar;":"―","HorizontalLine;":"─","Hscr;":"ℋ","hscr;":"𝒽","hslash;":"ℏ","Hstrok;":"Ħ","hstrok;":"ħ","HumpDownHump;":"≎","HumpEqual;":"≏","hybull;":"⁃","hyphen;":"‐","Iacute;":"Í","Iacute":"Í","iacute;":"í","iacute":"í","ic;":"⁣","Icirc;":"Î","Icirc":"Î","icirc;":"î","icirc":"î","Icy;":"И","icy;":"и","Idot;":"İ","IEcy;":"Е","iecy;":"е","iexcl;":"¡","iexcl":"¡","iff;":"⇔","Ifr;":"ℑ","ifr;":"𝔦","Igrave;":"Ì","Igrave":"Ì","igrave;":"ì","igrave":"ì","ii;":"ⅈ","iiiint;":"⨌","iiint;":"∭","iinfin;":"⧜","iiota;":"℩","IJlig;":"Ĳ","ijlig;":"ĳ","Im;":"ℑ","Imacr;":"Ī","imacr;":"ī","image;":"ℑ","ImaginaryI;":"ⅈ","imagline;":"ℐ","imagpart;":"ℑ","imath;":"ı","imof;":"⊷","imped;":"Ƶ","Implies;":"⇒","in;":"∈","incare;":"℅","infin;":"∞","infintie;":"⧝","inodot;":"ı","Int;":"∬","int;":"∫","intcal;":"⊺","integers;":"ℤ","Integral;":"∫","intercal;":"⊺","Intersection;":"⋂","intlarhk;":"⨗","intprod;":"⨼","InvisibleComma;":"⁣","InvisibleTimes;":"⁢","IOcy;":"Ё","iocy;":"ё","Iogon;":"Į","iogon;":"į","Iopf;":"𝕀","iopf;":"𝕚","Iota;":"Ι","iota;":"ι","iprod;":"⨼","iquest;":"¿","iquest":"¿","Iscr;":"ℐ","iscr;":"𝒾","isin;":"∈","isindot;":"⋵","isinE;":"⋹","isins;":"⋴","isinsv;":"⋳","isinv;":"∈","it;":"⁢","Itilde;":"Ĩ","itilde;":"ĩ","Iukcy;":"І","iukcy;":"і","Iuml;":"Ï","Iuml":"Ï","iuml;":"ï","iuml":"ï","Jcirc;":"Ĵ","jcirc;":"ĵ","Jcy;":"Й","jcy;":"й","Jfr;":"𝔍","jfr;":"𝔧","jmath;":"ȷ","Jopf;":"𝕁","jopf;":"𝕛","Jscr;":"𝒥","jscr;":"𝒿","Jsercy;":"Ј","jsercy;":"ј","Jukcy;":"Є","jukcy;":"є","Kappa;":"Κ","kappa;":"κ","kappav;":"ϰ","Kcedil;":"Ķ","kcedil;":"ķ","Kcy;":"К","kcy;":"к","Kfr;":"𝔎","kfr;":"𝔨","kgreen;":"ĸ","KHcy;":"Х","khcy;":"х","KJcy;":"Ќ","kjcy;":"ќ","Kopf;":"𝕂","kopf;":"𝕜","Kscr;":"𝒦","kscr;":"𝓀","lAarr;":"⇚","Lacute;":"Ĺ","lacute;":"ĺ","laemptyv;":"⦴","lagran;":"ℒ","Lambda;":"Λ","lambda;":"λ","Lang;":"⟪","lang;":"⟨","langd;":"⦑","langle;":"⟨","lap;":"⪅","Laplacetrf;":"ℒ","laquo;":"«","laquo":"«","Larr;":"↞","lArr;":"⇐","larr;":"←","larrb;":"⇤","larrbfs;":"⤟","larrfs;":"⤝","larrhk;":"↩","larrlp;":"↫","larrpl;":"⤹","larrsim;":"⥳","larrtl;":"↢","lat;":"⪫","lAtail;":"⤛","latail;":"⤙","late;":"⪭","lates;":"⪭︀","lBarr;":"⤎","lbarr;":"⤌","lbbrk;":"❲","lbrace;":"{","lbrack;":"[","lbrke;":"⦋","lbrksld;":"⦏","lbrkslu;":"⦍","Lcaron;":"Ľ","lcaron;":"ľ","Lcedil;":"Ļ","lcedil;":"ļ","lceil;":"⌈","lcub;":"{","Lcy;":"Л","lcy;":"л","ldca;":"⤶","ldquo;":"“","ldquor;":"„","ldrdhar;":"⥧","ldrushar;":"⥋","ldsh;":"↲","lE;":"≦","le;":"≤","LeftAngleBracket;":"⟨","LeftArrow;":"←","Leftarrow;":"⇐","leftarrow;":"←","LeftArrowBar;":"⇤","LeftArrowRightArrow;":"⇆","leftarrowtail;":"↢","LeftCeiling;":"⌈","LeftDoubleBracket;":"⟦","LeftDownTeeVector;":"⥡","LeftDownVector;":"⇃","LeftDownVectorBar;":"⥙","LeftFloor;":"⌊","leftharpoondown;":"↽","leftharpoonup;":"↼","leftleftarrows;":"⇇","LeftRightArrow;":"↔","Leftrightarrow;":"⇔","leftrightarrow;":"↔","leftrightarrows;":"⇆","leftrightharpoons;":"⇋","leftrightsquigarrow;":"↭","LeftRightVector;":"⥎","LeftTee;":"⊣","LeftTeeArrow;":"↤","LeftTeeVector;":"⥚","leftthreetimes;":"⋋","LeftTriangle;":"⊲","LeftTriangleBar;":"⧏","LeftTriangleEqual;":"⊴","LeftUpDownVector;":"⥑","LeftUpTeeVector;":"⥠","LeftUpVector;":"↿","LeftUpVectorBar;":"⥘","LeftVector;":"↼","LeftVectorBar;":"⥒","lEg;":"⪋","leg;":"⋚","leq;":"≤","leqq;":"≦","leqslant;":"⩽","les;":"⩽","lescc;":"⪨","lesdot;":"⩿","lesdoto;":"⪁","lesdotor;":"⪃","lesg;":"⋚︀","lesges;":"⪓","lessapprox;":"⪅","lessdot;":"⋖","lesseqgtr;":"⋚","lesseqqgtr;":"⪋","LessEqualGreater;":"⋚","LessFullEqual;":"≦","LessGreater;":"≶","lessgtr;":"≶","LessLess;":"⪡","lesssim;":"≲","LessSlantEqual;":"⩽","LessTilde;":"≲","lfisht;":"⥼","lfloor;":"⌊","Lfr;":"𝔏","lfr;":"𝔩","lg;":"≶","lgE;":"⪑","lHar;":"⥢","lhard;":"↽","lharu;":"↼","lharul;":"⥪","lhblk;":"▄","LJcy;":"Љ","ljcy;":"љ","Ll;":"⋘","ll;":"≪","llarr;":"⇇","llcorner;":"⌞","Lleftarrow;":"⇚","llhard;":"⥫","lltri;":"◺","Lmidot;":"Ŀ","lmidot;":"ŀ","lmoust;":"⎰","lmoustache;":"⎰","lnap;":"⪉","lnapprox;":"⪉","lnE;":"≨","lne;":"⪇","lneq;":"⪇","lneqq;":"≨","lnsim;":"⋦","loang;":"⟬","loarr;":"⇽","lobrk;":"⟦","LongLeftArrow;":"⟵","Longleftarrow;":"⟸","longleftarrow;":"⟵","LongLeftRightArrow;":"⟷","Longleftrightarrow;":"⟺","longleftrightarrow;":"⟷","longmapsto;":"⟼","LongRightArrow;":"⟶","Longrightarrow;":"⟹","longrightarrow;":"⟶","looparrowleft;":"↫","looparrowright;":"↬","lopar;":"⦅","Lopf;":"𝕃","lopf;":"𝕝","loplus;":"⨭","lotimes;":"⨴","lowast;":"∗","lowbar;":"_","LowerLeftArrow;":"↙","LowerRightArrow;":"↘","loz;":"◊","lozenge;":"◊","lozf;":"⧫","lpar;":"(","lparlt;":"⦓","lrarr;":"⇆","lrcorner;":"⌟","lrhar;":"⇋","lrhard;":"⥭","lrm;":"‎","lrtri;":"⊿","lsaquo;":"‹","Lscr;":"ℒ","lscr;":"𝓁","Lsh;":"↰","lsh;":"↰","lsim;":"≲","lsime;":"⪍","lsimg;":"⪏","lsqb;":"[","lsquo;":"‘","lsquor;":"‚","Lstrok;":"Ł","lstrok;":"ł","LT;":"<","LT":"<","Lt;":"≪","lt;":"<","lt":"<","ltcc;":"⪦","ltcir;":"⩹","ltdot;":"⋖","lthree;":"⋋","ltimes;":"⋉","ltlarr;":"⥶","ltquest;":"⩻","ltri;":"◃","ltrie;":"⊴","ltrif;":"◂","ltrPar;":"⦖","lurdshar;":"⥊","luruhar;":"⥦","lvertneqq;":"≨︀","lvnE;":"≨︀","macr;":"¯","macr":"¯","male;":"♂","malt;":"✠","maltese;":"✠","Map;":"⤅","map;":"↦","mapsto;":"↦","mapstodown;":"↧","mapstoleft;":"↤","mapstoup;":"↥","marker;":"▮","mcomma;":"⨩","Mcy;":"М","mcy;":"м","mdash;":"—","mDDot;":"∺","measuredangle;":"∡","MediumSpace;":" ","Mellintrf;":"ℳ","Mfr;":"𝔐","mfr;":"𝔪","mho;":"℧","micro;":"µ","micro":"µ","mid;":"∣","midast;":"*","midcir;":"⫰","middot;":"·","middot":"·","minus;":"−","minusb;":"⊟","minusd;":"∸","minusdu;":"⨪","MinusPlus;":"∓","mlcp;":"⫛","mldr;":"…","mnplus;":"∓","models;":"⊧","Mopf;":"𝕄","mopf;":"𝕞","mp;":"∓","Mscr;":"ℳ","mscr;":"𝓂","mstpos;":"∾","Mu;":"Μ","mu;":"μ","multimap;":"⊸","mumap;":"⊸","nabla;":"∇","Nacute;":"Ń","nacute;":"ń","nang;":"∠⃒","nap;":"≉","napE;":"⩰̸","napid;":"≋̸","napos;":"ŉ","napprox;":"≉","natur;":"♮","natural;":"♮","naturals;":"ℕ","nbsp;":" ","nbsp":" ","nbump;":"≎̸","nbumpe;":"≏̸","ncap;":"⩃","Ncaron;":"Ň","ncaron;":"ň","Ncedil;":"Ņ","ncedil;":"ņ","ncong;":"≇","ncongdot;":"⩭̸","ncup;":"⩂","Ncy;":"Н","ncy;":"н","ndash;":"–","ne;":"≠","nearhk;":"⤤","neArr;":"⇗","nearr;":"↗","nearrow;":"↗","nedot;":"≐̸","NegativeMediumSpace;":"​","NegativeThickSpace;":"​","NegativeThinSpace;":"​","NegativeVeryThinSpace;":"​","nequiv;":"≢","nesear;":"⤨","nesim;":"≂̸","NestedGreaterGreater;":"≫","NestedLessLess;":"≪","NewLine;":"\n","nexist;":"∄","nexists;":"∄","Nfr;":"𝔑","nfr;":"𝔫","ngE;":"≧̸","nge;":"≱","ngeq;":"≱","ngeqq;":"≧̸","ngeqslant;":"⩾̸","nges;":"⩾̸","nGg;":"⋙̸","ngsim;":"≵","nGt;":"≫⃒","ngt;":"≯","ngtr;":"≯","nGtv;":"≫̸","nhArr;":"⇎","nharr;":"↮","nhpar;":"⫲","ni;":"∋","nis;":"⋼","nisd;":"⋺","niv;":"∋","NJcy;":"Њ","njcy;":"њ","nlArr;":"⇍","nlarr;":"↚","nldr;":"‥","nlE;":"≦̸","nle;":"≰","nLeftarrow;":"⇍","nleftarrow;":"↚","nLeftrightarrow;":"⇎","nleftrightarrow;":"↮","nleq;":"≰","nleqq;":"≦̸","nleqslant;":"⩽̸","nles;":"⩽̸","nless;":"≮","nLl;":"⋘̸","nlsim;":"≴","nLt;":"≪⃒","nlt;":"≮","nltri;":"⋪","nltrie;":"⋬","nLtv;":"≪̸","nmid;":"∤","NoBreak;":"⁠","NonBreakingSpace;":" ","Nopf;":"ℕ","nopf;":"𝕟","Not;":"⫬","not;":"¬","not":"¬","NotCongruent;":"≢","NotCupCap;":"≭","NotDoubleVerticalBar;":"∦","NotElement;":"∉","NotEqual;":"≠","NotEqualTilde;":"≂̸","NotExists;":"∄","NotGreater;":"≯","NotGreaterEqual;":"≱","NotGreaterFullEqual;":"≧̸","NotGreaterGreater;":"≫̸","NotGreaterLess;":"≹","NotGreaterSlantEqual;":"⩾̸","NotGreaterTilde;":"≵","NotHumpDownHump;":"≎̸","NotHumpEqual;":"≏̸","notin;":"∉","notindot;":"⋵̸","notinE;":"⋹̸","notinva;":"∉","notinvb;":"⋷","notinvc;":"⋶","NotLeftTriangle;":"⋪","NotLeftTriangleBar;":"⧏̸","NotLeftTriangleEqual;":"⋬","NotLess;":"≮","NotLessEqual;":"≰","NotLessGreater;":"≸","NotLessLess;":"≪̸","NotLessSlantEqual;":"⩽̸","NotLessTilde;":"≴","NotNestedGreaterGreater;":"⪢̸","NotNestedLessLess;":"⪡̸","notni;":"∌","notniva;":"∌","notnivb;":"⋾","notnivc;":"⋽","NotPrecedes;":"⊀","NotPrecedesEqual;":"⪯̸","NotPrecedesSlantEqual;":"⋠","NotReverseElement;":"∌","NotRightTriangle;":"⋫","NotRightTriangleBar;":"⧐̸","NotRightTriangleEqual;":"⋭","NotSquareSubset;":"⊏̸","NotSquareSubsetEqual;":"⋢","NotSquareSuperset;":"⊐̸","NotSquareSupersetEqual;":"⋣","NotSubset;":"⊂⃒","NotSubsetEqual;":"⊈","NotSucceeds;":"⊁","NotSucceedsEqual;":"⪰̸","NotSucceedsSlantEqual;":"⋡","NotSucceedsTilde;":"≿̸","NotSuperset;":"⊃⃒","NotSupersetEqual;":"⊉","NotTilde;":"≁","NotTildeEqual;":"≄","NotTildeFullEqual;":"≇","NotTildeTilde;":"≉","NotVerticalBar;":"∤","npar;":"∦","nparallel;":"∦","nparsl;":"⫽⃥","npart;":"∂̸","npolint;":"⨔","npr;":"⊀","nprcue;":"⋠","npre;":"⪯̸","nprec;":"⊀","npreceq;":"⪯̸","nrArr;":"⇏","nrarr;":"↛","nrarrc;":"⤳̸","nrarrw;":"↝̸","nRightarrow;":"⇏","nrightarrow;":"↛","nrtri;":"⋫","nrtrie;":"⋭","nsc;":"⊁","nsccue;":"⋡","nsce;":"⪰̸","Nscr;":"𝒩","nscr;":"𝓃","nshortmid;":"∤","nshortparallel;":"∦","nsim;":"≁","nsime;":"≄","nsimeq;":"≄","nsmid;":"∤","nspar;":"∦","nsqsube;":"⋢","nsqsupe;":"⋣","nsub;":"⊄","nsubE;":"⫅̸","nsube;":"⊈","nsubset;":"⊂⃒","nsubseteq;":"⊈","nsubseteqq;":"⫅̸","nsucc;":"⊁","nsucceq;":"⪰̸","nsup;":"⊅","nsupE;":"⫆̸","nsupe;":"⊉","nsupset;":"⊃⃒","nsupseteq;":"⊉","nsupseteqq;":"⫆̸","ntgl;":"≹","Ntilde;":"Ñ","Ntilde":"Ñ","ntilde;":"ñ","ntilde":"ñ","ntlg;":"≸","ntriangleleft;":"⋪","ntrianglelefteq;":"⋬","ntriangleright;":"⋫","ntrianglerighteq;":"⋭","Nu;":"Ν","nu;":"ν","num;":"#","numero;":"№","numsp;":" ","nvap;":"≍⃒","nVDash;":"⊯","nVdash;":"⊮","nvDash;":"⊭","nvdash;":"⊬","nvge;":"≥⃒","nvgt;":">⃒","nvHarr;":"⤄","nvinfin;":"⧞","nvlArr;":"⤂","nvle;":"≤⃒","nvlt;":"<⃒","nvltrie;":"⊴⃒","nvrArr;":"⤃","nvrtrie;":"⊵⃒","nvsim;":"∼⃒","nwarhk;":"⤣","nwArr;":"⇖","nwarr;":"↖","nwarrow;":"↖","nwnear;":"⤧","Oacute;":"Ó","Oacute":"Ó","oacute;":"ó","oacute":"ó","oast;":"⊛","ocir;":"⊚","Ocirc;":"Ô","Ocirc":"Ô","ocirc;":"ô","ocirc":"ô","Ocy;":"О","ocy;":"о","odash;":"⊝","Odblac;":"Ő","odblac;":"ő","odiv;":"⨸","odot;":"⊙","odsold;":"⦼","OElig;":"Œ","oelig;":"œ","ofcir;":"⦿","Ofr;":"𝔒","ofr;":"𝔬","ogon;":"˛","Ograve;":"Ò","Ograve":"Ò","ograve;":"ò","ograve":"ò","ogt;":"⧁","ohbar;":"⦵","ohm;":"Ω","oint;":"∮","olarr;":"↺","olcir;":"⦾","olcross;":"⦻","oline;":"‾","olt;":"⧀","Omacr;":"Ō","omacr;":"ō","Omega;":"Ω","omega;":"ω","Omicron;":"Ο","omicron;":"ο","omid;":"⦶","ominus;":"⊖","Oopf;":"𝕆","oopf;":"𝕠","opar;":"⦷","OpenCurlyDoubleQuote;":"“","OpenCurlyQuote;":"‘","operp;":"⦹","oplus;":"⊕","Or;":"⩔","or;":"∨","orarr;":"↻","ord;":"⩝","order;":"ℴ","orderof;":"ℴ","ordf;":"ª","ordf":"ª","ordm;":"º","ordm":"º","origof;":"⊶","oror;":"⩖","orslope;":"⩗","orv;":"⩛","oS;":"Ⓢ","Oscr;":"𝒪","oscr;":"ℴ","Oslash;":"Ø","Oslash":"Ø","oslash;":"ø","oslash":"ø","osol;":"⊘","Otilde;":"Õ","Otilde":"Õ","otilde;":"õ","otilde":"õ","Otimes;":"⨷","otimes;":"⊗","otimesas;":"⨶","Ouml;":"Ö","Ouml":"Ö","ouml;":"ö","ouml":"ö","ovbar;":"⌽","OverBar;":"‾","OverBrace;":"⏞","OverBracket;":"⎴","OverParenthesis;":"⏜","par;":"∥","para;":"¶","para":"¶","parallel;":"∥","parsim;":"⫳","parsl;":"⫽","part;":"∂","PartialD;":"∂","Pcy;":"П","pcy;":"п","percnt;":"%","period;":".","permil;":"‰","perp;":"⊥","pertenk;":"‱","Pfr;":"𝔓","pfr;":"𝔭","Phi;":"Φ","phi;":"φ","phiv;":"ϕ","phmmat;":"ℳ","phone;":"☎","Pi;":"Π","pi;":"π","pitchfork;":"⋔","piv;":"ϖ","planck;":"ℏ","planckh;":"ℎ","plankv;":"ℏ","plus;":"+","plusacir;":"⨣","plusb;":"⊞","pluscir;":"⨢","plusdo;":"∔","plusdu;":"⨥","pluse;":"⩲","PlusMinus;":"±","plusmn;":"±","plusmn":"±","plussim;":"⨦","plustwo;":"⨧","pm;":"±","Poincareplane;":"ℌ","pointint;":"⨕","Popf;":"ℙ","popf;":"𝕡","pound;":"£","pound":"£","Pr;":"⪻","pr;":"≺","prap;":"⪷","prcue;":"≼","prE;":"⪳","pre;":"⪯","prec;":"≺","precapprox;":"⪷","preccurlyeq;":"≼","Precedes;":"≺","PrecedesEqual;":"⪯","PrecedesSlantEqual;":"≼","PrecedesTilde;":"≾","preceq;":"⪯","precnapprox;":"⪹","precneqq;":"⪵","precnsim;":"⋨","precsim;":"≾","Prime;":"″","prime;":"′","primes;":"ℙ","prnap;":"⪹","prnE;":"⪵","prnsim;":"⋨","prod;":"∏","Product;":"∏","profalar;":"⌮","profline;":"⌒","profsurf;":"⌓","prop;":"∝","Proportion;":"∷","Proportional;":"∝","propto;":"∝","prsim;":"≾","prurel;":"⊰","Pscr;":"𝒫","pscr;":"𝓅","Psi;":"Ψ","psi;":"ψ","puncsp;":" ","Qfr;":"𝔔","qfr;":"𝔮","qint;":"⨌","Qopf;":"ℚ","qopf;":"𝕢","qprime;":"⁗","Qscr;":"𝒬","qscr;":"𝓆","quaternions;":"ℍ","quatint;":"⨖","quest;":"?","questeq;":"≟","QUOT;":"\"","QUOT":"\"","quot;":"\"","quot":"\"","rAarr;":"⇛","race;":"∽̱","Racute;":"Ŕ","racute;":"ŕ","radic;":"√","raemptyv;":"⦳","Rang;":"⟫","rang;":"⟩","rangd;":"⦒","range;":"⦥","rangle;":"⟩","raquo;":"»","raquo":"»","Rarr;":"↠","rArr;":"⇒","rarr;":"→","rarrap;":"⥵","rarrb;":"⇥","rarrbfs;":"⤠","rarrc;":"⤳","rarrfs;":"⤞","rarrhk;":"↪","rarrlp;":"↬","rarrpl;":"⥅","rarrsim;":"⥴","Rarrtl;":"⤖","rarrtl;":"↣","rarrw;":"↝","rAtail;":"⤜","ratail;":"⤚","ratio;":"∶","rationals;":"ℚ","RBarr;":"⤐","rBarr;":"⤏","rbarr;":"⤍","rbbrk;":"❳","rbrace;":"}","rbrack;":"]","rbrke;":"⦌","rbrksld;":"⦎","rbrkslu;":"⦐","Rcaron;":"Ř","rcaron;":"ř","Rcedil;":"Ŗ","rcedil;":"ŗ","rceil;":"⌉","rcub;":"}","Rcy;":"Р","rcy;":"р","rdca;":"⤷","rdldhar;":"⥩","rdquo;":"”","rdquor;":"”","rdsh;":"↳","Re;":"ℜ","real;":"ℜ","realine;":"ℛ","realpart;":"ℜ","reals;":"ℝ","rect;":"▭","REG;":"®","REG":"®","reg;":"®","reg":"®","ReverseElement;":"∋","ReverseEquilibrium;":"⇋","ReverseUpEquilibrium;":"⥯","rfisht;":"⥽","rfloor;":"⌋","Rfr;":"ℜ","rfr;":"𝔯","rHar;":"⥤","rhard;":"⇁","rharu;":"⇀","rharul;":"⥬","Rho;":"Ρ","rho;":"ρ","rhov;":"ϱ","RightAngleBracket;":"⟩","RightArrow;":"→","Rightarrow;":"⇒","rightarrow;":"→","RightArrowBar;":"⇥","RightArrowLeftArrow;":"⇄","rightarrowtail;":"↣","RightCeiling;":"⌉","RightDoubleBracket;":"⟧","RightDownTeeVector;":"⥝","RightDownVector;":"⇂","RightDownVectorBar;":"⥕","RightFloor;":"⌋","rightharpoondown;":"⇁","rightharpoonup;":"⇀","rightleftarrows;":"⇄","rightleftharpoons;":"⇌","rightrightarrows;":"⇉","rightsquigarrow;":"↝","RightTee;":"⊢","RightTeeArrow;":"↦","RightTeeVector;":"⥛","rightthreetimes;":"⋌","RightTriangle;":"⊳","RightTriangleBar;":"⧐","RightTriangleEqual;":"⊵","RightUpDownVector;":"⥏","RightUpTeeVector;":"⥜","RightUpVector;":"↾","RightUpVectorBar;":"⥔","RightVector;":"⇀","RightVectorBar;":"⥓","ring;":"˚","risingdotseq;":"≓","rlarr;":"⇄","rlhar;":"⇌","rlm;":"‏","rmoust;":"⎱","rmoustache;":"⎱","rnmid;":"⫮","roang;":"⟭","roarr;":"⇾","robrk;":"⟧","ropar;":"⦆","Ropf;":"ℝ","ropf;":"𝕣","roplus;":"⨮","rotimes;":"⨵","RoundImplies;":"⥰","rpar;":")","rpargt;":"⦔","rppolint;":"⨒","rrarr;":"⇉","Rrightarrow;":"⇛","rsaquo;":"›","Rscr;":"ℛ","rscr;":"𝓇","Rsh;":"↱","rsh;":"↱","rsqb;":"]","rsquo;":"’","rsquor;":"’","rthree;":"⋌","rtimes;":"⋊","rtri;":"▹","rtrie;":"⊵","rtrif;":"▸","rtriltri;":"⧎","RuleDelayed;":"⧴","ruluhar;":"⥨","rx;":"℞","Sacute;":"Ś","sacute;":"ś","sbquo;":"‚","Sc;":"⪼","sc;":"≻","scap;":"⪸","Scaron;":"Š","scaron;":"š","sccue;":"≽","scE;":"⪴","sce;":"⪰","Scedil;":"Ş","scedil;":"ş","Scirc;":"Ŝ","scirc;":"ŝ","scnap;":"⪺","scnE;":"⪶","scnsim;":"⋩","scpolint;":"⨓","scsim;":"≿","Scy;":"С","scy;":"с","sdot;":"⋅","sdotb;":"⊡","sdote;":"⩦","searhk;":"⤥","seArr;":"⇘","searr;":"↘","searrow;":"↘","sect;":"§","sect":"§","semi;":";","seswar;":"⤩","setminus;":"∖","setmn;":"∖","sext;":"✶","Sfr;":"𝔖","sfr;":"𝔰","sfrown;":"⌢","sharp;":"♯","SHCHcy;":"Щ","shchcy;":"щ","SHcy;":"Ш","shcy;":"ш","ShortDownArrow;":"↓","ShortLeftArrow;":"←","shortmid;":"∣","shortparallel;":"∥","ShortRightArrow;":"→","ShortUpArrow;":"↑","shy;":"­","shy":"­","Sigma;":"Σ","sigma;":"σ","sigmaf;":"ς","sigmav;":"ς","sim;":"∼","simdot;":"⩪","sime;":"≃","simeq;":"≃","simg;":"⪞","simgE;":"⪠","siml;":"⪝","simlE;":"⪟","simne;":"≆","simplus;":"⨤","simrarr;":"⥲","slarr;":"←","SmallCircle;":"∘","smallsetminus;":"∖","smashp;":"⨳","smeparsl;":"⧤","smid;":"∣","smile;":"⌣","smt;":"⪪","smte;":"⪬","smtes;":"⪬︀","SOFTcy;":"Ь","softcy;":"ь","sol;":"/","solb;":"⧄","solbar;":"⌿","Sopf;":"𝕊","sopf;":"𝕤","spades;":"♠","spadesuit;":"♠","spar;":"∥","sqcap;":"⊓","sqcaps;":"⊓︀","sqcup;":"⊔","sqcups;":"⊔︀","Sqrt;":"√","sqsub;":"⊏","sqsube;":"⊑","sqsubset;":"⊏","sqsubseteq;":"⊑","sqsup;":"⊐","sqsupe;":"⊒","sqsupset;":"⊐","sqsupseteq;":"⊒","squ;":"□","Square;":"□","square;":"□","SquareIntersection;":"⊓","SquareSubset;":"⊏","SquareSubsetEqual;":"⊑","SquareSuperset;":"⊐","SquareSupersetEqual;":"⊒","SquareUnion;":"⊔","squarf;":"▪","squf;":"▪","srarr;":"→","Sscr;":"𝒮","sscr;":"𝓈","ssetmn;":"∖","ssmile;":"⌣","sstarf;":"⋆","Star;":"⋆","star;":"☆","starf;":"★","straightepsilon;":"ϵ","straightphi;":"ϕ","strns;":"¯","Sub;":"⋐","sub;":"⊂","subdot;":"⪽","subE;":"⫅","sube;":"⊆","subedot;":"⫃","submult;":"⫁","subnE;":"⫋","subne;":"⊊","subplus;":"⪿","subrarr;":"⥹","Subset;":"⋐","subset;":"⊂","subseteq;":"⊆","subseteqq;":"⫅","SubsetEqual;":"⊆","subsetneq;":"⊊","subsetneqq;":"⫋","subsim;":"⫇","subsub;":"⫕","subsup;":"⫓","succ;":"≻","succapprox;":"⪸","succcurlyeq;":"≽","Succeeds;":"≻","SucceedsEqual;":"⪰","SucceedsSlantEqual;":"≽","SucceedsTilde;":"≿","succeq;":"⪰","succnapprox;":"⪺","succneqq;":"⪶","succnsim;":"⋩","succsim;":"≿","SuchThat;":"∋","Sum;":"∑","sum;":"∑","sung;":"♪","Sup;":"⋑","sup;":"⊃","sup1;":"¹","sup1":"¹","sup2;":"²","sup2":"²","sup3;":"³","sup3":"³","supdot;":"⪾","supdsub;":"⫘","supE;":"⫆","supe;":"⊇","supedot;":"⫄","Superset;":"⊃","SupersetEqual;":"⊇","suphsol;":"⟉","suphsub;":"⫗","suplarr;":"⥻","supmult;":"⫂","supnE;":"⫌","supne;":"⊋","supplus;":"⫀","Supset;":"⋑","supset;":"⊃","supseteq;":"⊇","supseteqq;":"⫆","supsetneq;":"⊋","supsetneqq;":"⫌","supsim;":"⫈","supsub;":"⫔","supsup;":"⫖","swarhk;":"⤦","swArr;":"⇙","swarr;":"↙","swarrow;":"↙","swnwar;":"⤪","szlig;":"ß","szlig":"ß","Tab;":"\t","target;":"⌖","Tau;":"Τ","tau;":"τ","tbrk;":"⎴","Tcaron;":"Ť","tcaron;":"ť","Tcedil;":"Ţ","tcedil;":"ţ","Tcy;":"Т","tcy;":"т","tdot;":"⃛","telrec;":"⌕","Tfr;":"𝔗","tfr;":"𝔱","there4;":"∴","Therefore;":"∴","therefore;":"∴","Theta;":"Θ","theta;":"θ","thetasym;":"ϑ","thetav;":"ϑ","thickapprox;":"≈","thicksim;":"∼","ThickSpace;":"  ","thinsp;":" ","ThinSpace;":" ","thkap;":"≈","thksim;":"∼","THORN;":"Þ","THORN":"Þ","thorn;":"þ","thorn":"þ","Tilde;":"∼","tilde;":"˜","TildeEqual;":"≃","TildeFullEqual;":"≅","TildeTilde;":"≈","times;":"×","times":"×","timesb;":"⊠","timesbar;":"⨱","timesd;":"⨰","tint;":"∭","toea;":"⤨","top;":"⊤","topbot;":"⌶","topcir;":"⫱","Topf;":"𝕋","topf;":"𝕥","topfork;":"⫚","tosa;":"⤩","tprime;":"‴","TRADE;":"™","trade;":"™","triangle;":"▵","triangledown;":"▿","triangleleft;":"◃","trianglelefteq;":"⊴","triangleq;":"≜","triangleright;":"▹","trianglerighteq;":"⊵","tridot;":"◬","trie;":"≜","triminus;":"⨺","TripleDot;":"⃛","triplus;":"⨹","trisb;":"⧍","tritime;":"⨻","trpezium;":"⏢","Tscr;":"𝒯","tscr;":"𝓉","TScy;":"Ц","tscy;":"ц","TSHcy;":"Ћ","tshcy;":"ћ","Tstrok;":"Ŧ","tstrok;":"ŧ","twixt;":"≬","twoheadleftarrow;":"↞","twoheadrightarrow;":"↠","Uacute;":"Ú","Uacute":"Ú","uacute;":"ú","uacute":"ú","Uarr;":"↟","uArr;":"⇑","uarr;":"↑","Uarrocir;":"⥉","Ubrcy;":"Ў","ubrcy;":"ў","Ubreve;":"Ŭ","ubreve;":"ŭ","Ucirc;":"Û","Ucirc":"Û","ucirc;":"û","ucirc":"û","Ucy;":"У","ucy;":"у","udarr;":"⇅","Udblac;":"Ű","udblac;":"ű","udhar;":"⥮","ufisht;":"⥾","Ufr;":"𝔘","ufr;":"𝔲","Ugrave;":"Ù","Ugrave":"Ù","ugrave;":"ù","ugrave":"ù","uHar;":"⥣","uharl;":"↿","uharr;":"↾","uhblk;":"▀","ulcorn;":"⌜","ulcorner;":"⌜","ulcrop;":"⌏","ultri;":"◸","Umacr;":"Ū","umacr;":"ū","uml;":"¨","uml":"¨","UnderBar;":"_","UnderBrace;":"⏟","UnderBracket;":"⎵","UnderParenthesis;":"⏝","Union;":"⋃","UnionPlus;":"⊎","Uogon;":"Ų","uogon;":"ų","Uopf;":"𝕌","uopf;":"𝕦","UpArrow;":"↑","Uparrow;":"⇑","uparrow;":"↑","UpArrowBar;":"⤒","UpArrowDownArrow;":"⇅","UpDownArrow;":"↕","Updownarrow;":"⇕","updownarrow;":"↕","UpEquilibrium;":"⥮","upharpoonleft;":"↿","upharpoonright;":"↾","uplus;":"⊎","UpperLeftArrow;":"↖","UpperRightArrow;":"↗","Upsi;":"ϒ","upsi;":"υ","upsih;":"ϒ","Upsilon;":"Υ","upsilon;":"υ","UpTee;":"⊥","UpTeeArrow;":"↥","upuparrows;":"⇈","urcorn;":"⌝","urcorner;":"⌝","urcrop;":"⌎","Uring;":"Ů","uring;":"ů","urtri;":"◹","Uscr;":"𝒰","uscr;":"𝓊","utdot;":"⋰","Utilde;":"Ũ","utilde;":"ũ","utri;":"▵","utrif;":"▴","uuarr;":"⇈","Uuml;":"Ü","Uuml":"Ü","uuml;":"ü","uuml":"ü","uwangle;":"⦧","vangrt;":"⦜","varepsilon;":"ϵ","varkappa;":"ϰ","varnothing;":"∅","varphi;":"ϕ","varpi;":"ϖ","varpropto;":"∝","vArr;":"⇕","varr;":"↕","varrho;":"ϱ","varsigma;":"ς","varsubsetneq;":"⊊︀","varsubsetneqq;":"⫋︀","varsupsetneq;":"⊋︀","varsupsetneqq;":"⫌︀","vartheta;":"ϑ","vartriangleleft;":"⊲","vartriangleright;":"⊳","Vbar;":"⫫","vBar;":"⫨","vBarv;":"⫩","Vcy;":"В","vcy;":"в","VDash;":"⊫","Vdash;":"⊩","vDash;":"⊨","vdash;":"⊢","Vdashl;":"⫦","Vee;":"⋁","vee;":"∨","veebar;":"⊻","veeeq;":"≚","vellip;":"⋮","Verbar;":"‖","verbar;":"|","Vert;":"‖","vert;":"|","VerticalBar;":"∣","VerticalLine;":"|","VerticalSeparator;":"❘","VerticalTilde;":"≀","VeryThinSpace;":" ","Vfr;":"𝔙","vfr;":"𝔳","vltri;":"⊲","vnsub;":"⊂⃒","vnsup;":"⊃⃒","Vopf;":"𝕍","vopf;":"𝕧","vprop;":"∝","vrtri;":"⊳","Vscr;":"𝒱","vscr;":"𝓋","vsubnE;":"⫋︀","vsubne;":"⊊︀","vsupnE;":"⫌︀","vsupne;":"⊋︀","Vvdash;":"⊪","vzigzag;":"⦚","Wcirc;":"Ŵ","wcirc;":"ŵ","wedbar;":"⩟","Wedge;":"⋀","wedge;":"∧","wedgeq;":"≙","weierp;":"℘","Wfr;":"𝔚","wfr;":"𝔴","Wopf;":"𝕎","wopf;":"𝕨","wp;":"℘","wr;":"≀","wreath;":"≀","Wscr;":"𝒲","wscr;":"𝓌","xcap;":"⋂","xcirc;":"◯","xcup;":"⋃","xdtri;":"▽","Xfr;":"𝔛","xfr;":"𝔵","xhArr;":"⟺","xharr;":"⟷","Xi;":"Ξ","xi;":"ξ","xlArr;":"⟸","xlarr;":"⟵","xmap;":"⟼","xnis;":"⋻","xodot;":"⨀","Xopf;":"𝕏","xopf;":"𝕩","xoplus;":"⨁","xotime;":"⨂","xrArr;":"⟹","xrarr;":"⟶","Xscr;":"𝒳","xscr;":"𝓍","xsqcup;":"⨆","xuplus;":"⨄","xutri;":"△","xvee;":"⋁","xwedge;":"⋀","Yacute;":"Ý","Yacute":"Ý","yacute;":"ý","yacute":"ý","YAcy;":"Я","yacy;":"я","Ycirc;":"Ŷ","ycirc;":"ŷ","Ycy;":"Ы","ycy;":"ы","yen;":"¥","yen":"¥","Yfr;":"𝔜","yfr;":"𝔶","YIcy;":"Ї","yicy;":"ї","Yopf;":"𝕐","yopf;":"𝕪","Yscr;":"𝒴","yscr;":"𝓎","YUcy;":"Ю","yucy;":"ю","Yuml;":"Ÿ","yuml;":"ÿ","yuml":"ÿ","Zacute;":"Ź","zacute;":"ź","Zcaron;":"Ž","zcaron;":"ž","Zcy;":"З","zcy;":"з","Zdot;":"Ż","zdot;":"ż","zeetrf;":"ℨ","ZeroWidthSpace;":"​","Zeta;":"Ζ","zeta;":"ζ","Zfr;":"ℨ","zfr;":"𝔷","ZHcy;":"Ж","zhcy;":"ж","zigrarr;":"⇝","Zopf;":"ℤ","zopf;":"𝕫","Zscr;":"𝒵","zscr;":"𝓏","zwj;":"‍","zwnj;":"‌"}

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = {"9":"Tab;","10":"NewLine;","33":"excl;","34":"quot;","35":"num;","36":"dollar;","37":"percnt;","38":"amp;","39":"apos;","40":"lpar;","41":"rpar;","42":"midast;","43":"plus;","44":"comma;","46":"period;","47":"sol;","58":"colon;","59":"semi;","60":"lt;","61":"equals;","62":"gt;","63":"quest;","64":"commat;","91":"lsqb;","92":"bsol;","93":"rsqb;","94":"Hat;","95":"UnderBar;","96":"grave;","123":"lcub;","124":"VerticalLine;","125":"rcub;","160":"NonBreakingSpace;","161":"iexcl;","162":"cent;","163":"pound;","164":"curren;","165":"yen;","166":"brvbar;","167":"sect;","168":"uml;","169":"copy;","170":"ordf;","171":"laquo;","172":"not;","173":"shy;","174":"reg;","175":"strns;","176":"deg;","177":"pm;","178":"sup2;","179":"sup3;","180":"DiacriticalAcute;","181":"micro;","182":"para;","183":"middot;","184":"Cedilla;","185":"sup1;","186":"ordm;","187":"raquo;","188":"frac14;","189":"half;","190":"frac34;","191":"iquest;","192":"Agrave;","193":"Aacute;","194":"Acirc;","195":"Atilde;","196":"Auml;","197":"Aring;","198":"AElig;","199":"Ccedil;","200":"Egrave;","201":"Eacute;","202":"Ecirc;","203":"Euml;","204":"Igrave;","205":"Iacute;","206":"Icirc;","207":"Iuml;","208":"ETH;","209":"Ntilde;","210":"Ograve;","211":"Oacute;","212":"Ocirc;","213":"Otilde;","214":"Ouml;","215":"times;","216":"Oslash;","217":"Ugrave;","218":"Uacute;","219":"Ucirc;","220":"Uuml;","221":"Yacute;","222":"THORN;","223":"szlig;","224":"agrave;","225":"aacute;","226":"acirc;","227":"atilde;","228":"auml;","229":"aring;","230":"aelig;","231":"ccedil;","232":"egrave;","233":"eacute;","234":"ecirc;","235":"euml;","236":"igrave;","237":"iacute;","238":"icirc;","239":"iuml;","240":"eth;","241":"ntilde;","242":"ograve;","243":"oacute;","244":"ocirc;","245":"otilde;","246":"ouml;","247":"divide;","248":"oslash;","249":"ugrave;","250":"uacute;","251":"ucirc;","252":"uuml;","253":"yacute;","254":"thorn;","255":"yuml;","256":"Amacr;","257":"amacr;","258":"Abreve;","259":"abreve;","260":"Aogon;","261":"aogon;","262":"Cacute;","263":"cacute;","264":"Ccirc;","265":"ccirc;","266":"Cdot;","267":"cdot;","268":"Ccaron;","269":"ccaron;","270":"Dcaron;","271":"dcaron;","272":"Dstrok;","273":"dstrok;","274":"Emacr;","275":"emacr;","278":"Edot;","279":"edot;","280":"Eogon;","281":"eogon;","282":"Ecaron;","283":"ecaron;","284":"Gcirc;","285":"gcirc;","286":"Gbreve;","287":"gbreve;","288":"Gdot;","289":"gdot;","290":"Gcedil;","292":"Hcirc;","293":"hcirc;","294":"Hstrok;","295":"hstrok;","296":"Itilde;","297":"itilde;","298":"Imacr;","299":"imacr;","302":"Iogon;","303":"iogon;","304":"Idot;","305":"inodot;","306":"IJlig;","307":"ijlig;","308":"Jcirc;","309":"jcirc;","310":"Kcedil;","311":"kcedil;","312":"kgreen;","313":"Lacute;","314":"lacute;","315":"Lcedil;","316":"lcedil;","317":"Lcaron;","318":"lcaron;","319":"Lmidot;","320":"lmidot;","321":"Lstrok;","322":"lstrok;","323":"Nacute;","324":"nacute;","325":"Ncedil;","326":"ncedil;","327":"Ncaron;","328":"ncaron;","329":"napos;","330":"ENG;","331":"eng;","332":"Omacr;","333":"omacr;","336":"Odblac;","337":"odblac;","338":"OElig;","339":"oelig;","340":"Racute;","341":"racute;","342":"Rcedil;","343":"rcedil;","344":"Rcaron;","345":"rcaron;","346":"Sacute;","347":"sacute;","348":"Scirc;","349":"scirc;","350":"Scedil;","351":"scedil;","352":"Scaron;","353":"scaron;","354":"Tcedil;","355":"tcedil;","356":"Tcaron;","357":"tcaron;","358":"Tstrok;","359":"tstrok;","360":"Utilde;","361":"utilde;","362":"Umacr;","363":"umacr;","364":"Ubreve;","365":"ubreve;","366":"Uring;","367":"uring;","368":"Udblac;","369":"udblac;","370":"Uogon;","371":"uogon;","372":"Wcirc;","373":"wcirc;","374":"Ycirc;","375":"ycirc;","376":"Yuml;","377":"Zacute;","378":"zacute;","379":"Zdot;","380":"zdot;","381":"Zcaron;","382":"zcaron;","402":"fnof;","437":"imped;","501":"gacute;","567":"jmath;","710":"circ;","711":"Hacek;","728":"breve;","729":"dot;","730":"ring;","731":"ogon;","732":"tilde;","733":"DiacriticalDoubleAcute;","785":"DownBreve;","913":"Alpha;","914":"Beta;","915":"Gamma;","916":"Delta;","917":"Epsilon;","918":"Zeta;","919":"Eta;","920":"Theta;","921":"Iota;","922":"Kappa;","923":"Lambda;","924":"Mu;","925":"Nu;","926":"Xi;","927":"Omicron;","928":"Pi;","929":"Rho;","931":"Sigma;","932":"Tau;","933":"Upsilon;","934":"Phi;","935":"Chi;","936":"Psi;","937":"Omega;","945":"alpha;","946":"beta;","947":"gamma;","948":"delta;","949":"epsilon;","950":"zeta;","951":"eta;","952":"theta;","953":"iota;","954":"kappa;","955":"lambda;","956":"mu;","957":"nu;","958":"xi;","959":"omicron;","960":"pi;","961":"rho;","962":"varsigma;","963":"sigma;","964":"tau;","965":"upsilon;","966":"phi;","967":"chi;","968":"psi;","969":"omega;","977":"vartheta;","978":"upsih;","981":"varphi;","982":"varpi;","988":"Gammad;","989":"gammad;","1008":"varkappa;","1009":"varrho;","1013":"varepsilon;","1014":"bepsi;","1025":"IOcy;","1026":"DJcy;","1027":"GJcy;","1028":"Jukcy;","1029":"DScy;","1030":"Iukcy;","1031":"YIcy;","1032":"Jsercy;","1033":"LJcy;","1034":"NJcy;","1035":"TSHcy;","1036":"KJcy;","1038":"Ubrcy;","1039":"DZcy;","1040":"Acy;","1041":"Bcy;","1042":"Vcy;","1043":"Gcy;","1044":"Dcy;","1045":"IEcy;","1046":"ZHcy;","1047":"Zcy;","1048":"Icy;","1049":"Jcy;","1050":"Kcy;","1051":"Lcy;","1052":"Mcy;","1053":"Ncy;","1054":"Ocy;","1055":"Pcy;","1056":"Rcy;","1057":"Scy;","1058":"Tcy;","1059":"Ucy;","1060":"Fcy;","1061":"KHcy;","1062":"TScy;","1063":"CHcy;","1064":"SHcy;","1065":"SHCHcy;","1066":"HARDcy;","1067":"Ycy;","1068":"SOFTcy;","1069":"Ecy;","1070":"YUcy;","1071":"YAcy;","1072":"acy;","1073":"bcy;","1074":"vcy;","1075":"gcy;","1076":"dcy;","1077":"iecy;","1078":"zhcy;","1079":"zcy;","1080":"icy;","1081":"jcy;","1082":"kcy;","1083":"lcy;","1084":"mcy;","1085":"ncy;","1086":"ocy;","1087":"pcy;","1088":"rcy;","1089":"scy;","1090":"tcy;","1091":"ucy;","1092":"fcy;","1093":"khcy;","1094":"tscy;","1095":"chcy;","1096":"shcy;","1097":"shchcy;","1098":"hardcy;","1099":"ycy;","1100":"softcy;","1101":"ecy;","1102":"yucy;","1103":"yacy;","1105":"iocy;","1106":"djcy;","1107":"gjcy;","1108":"jukcy;","1109":"dscy;","1110":"iukcy;","1111":"yicy;","1112":"jsercy;","1113":"ljcy;","1114":"njcy;","1115":"tshcy;","1116":"kjcy;","1118":"ubrcy;","1119":"dzcy;","8194":"ensp;","8195":"emsp;","8196":"emsp13;","8197":"emsp14;","8199":"numsp;","8200":"puncsp;","8201":"ThinSpace;","8202":"VeryThinSpace;","8203":"ZeroWidthSpace;","8204":"zwnj;","8205":"zwj;","8206":"lrm;","8207":"rlm;","8208":"hyphen;","8211":"ndash;","8212":"mdash;","8213":"horbar;","8214":"Vert;","8216":"OpenCurlyQuote;","8217":"rsquor;","8218":"sbquo;","8220":"OpenCurlyDoubleQuote;","8221":"rdquor;","8222":"ldquor;","8224":"dagger;","8225":"ddagger;","8226":"bullet;","8229":"nldr;","8230":"mldr;","8240":"permil;","8241":"pertenk;","8242":"prime;","8243":"Prime;","8244":"tprime;","8245":"bprime;","8249":"lsaquo;","8250":"rsaquo;","8254":"OverBar;","8257":"caret;","8259":"hybull;","8260":"frasl;","8271":"bsemi;","8279":"qprime;","8287":"MediumSpace;","8288":"NoBreak;","8289":"ApplyFunction;","8290":"it;","8291":"InvisibleComma;","8364":"euro;","8411":"TripleDot;","8412":"DotDot;","8450":"Copf;","8453":"incare;","8458":"gscr;","8459":"Hscr;","8460":"Poincareplane;","8461":"quaternions;","8462":"planckh;","8463":"plankv;","8464":"Iscr;","8465":"imagpart;","8466":"Lscr;","8467":"ell;","8469":"Nopf;","8470":"numero;","8471":"copysr;","8472":"wp;","8473":"primes;","8474":"rationals;","8475":"Rscr;","8476":"Rfr;","8477":"Ropf;","8478":"rx;","8482":"trade;","8484":"Zopf;","8487":"mho;","8488":"Zfr;","8489":"iiota;","8492":"Bscr;","8493":"Cfr;","8495":"escr;","8496":"expectation;","8497":"Fscr;","8499":"phmmat;","8500":"oscr;","8501":"aleph;","8502":"beth;","8503":"gimel;","8504":"daleth;","8517":"DD;","8518":"DifferentialD;","8519":"exponentiale;","8520":"ImaginaryI;","8531":"frac13;","8532":"frac23;","8533":"frac15;","8534":"frac25;","8535":"frac35;","8536":"frac45;","8537":"frac16;","8538":"frac56;","8539":"frac18;","8540":"frac38;","8541":"frac58;","8542":"frac78;","8592":"slarr;","8593":"uparrow;","8594":"srarr;","8595":"ShortDownArrow;","8596":"leftrightarrow;","8597":"varr;","8598":"UpperLeftArrow;","8599":"UpperRightArrow;","8600":"searrow;","8601":"swarrow;","8602":"nleftarrow;","8603":"nrightarrow;","8605":"rightsquigarrow;","8606":"twoheadleftarrow;","8607":"Uarr;","8608":"twoheadrightarrow;","8609":"Darr;","8610":"leftarrowtail;","8611":"rightarrowtail;","8612":"mapstoleft;","8613":"UpTeeArrow;","8614":"RightTeeArrow;","8615":"mapstodown;","8617":"larrhk;","8618":"rarrhk;","8619":"looparrowleft;","8620":"rarrlp;","8621":"leftrightsquigarrow;","8622":"nleftrightarrow;","8624":"lsh;","8625":"rsh;","8626":"ldsh;","8627":"rdsh;","8629":"crarr;","8630":"curvearrowleft;","8631":"curvearrowright;","8634":"olarr;","8635":"orarr;","8636":"lharu;","8637":"lhard;","8638":"upharpoonright;","8639":"upharpoonleft;","8640":"RightVector;","8641":"rightharpoondown;","8642":"RightDownVector;","8643":"LeftDownVector;","8644":"rlarr;","8645":"UpArrowDownArrow;","8646":"lrarr;","8647":"llarr;","8648":"uuarr;","8649":"rrarr;","8650":"downdownarrows;","8651":"ReverseEquilibrium;","8652":"rlhar;","8653":"nLeftarrow;","8654":"nLeftrightarrow;","8655":"nRightarrow;","8656":"Leftarrow;","8657":"Uparrow;","8658":"Rightarrow;","8659":"Downarrow;","8660":"Leftrightarrow;","8661":"vArr;","8662":"nwArr;","8663":"neArr;","8664":"seArr;","8665":"swArr;","8666":"Lleftarrow;","8667":"Rrightarrow;","8669":"zigrarr;","8676":"LeftArrowBar;","8677":"RightArrowBar;","8693":"duarr;","8701":"loarr;","8702":"roarr;","8703":"hoarr;","8704":"forall;","8705":"complement;","8706":"PartialD;","8707":"Exists;","8708":"NotExists;","8709":"varnothing;","8711":"nabla;","8712":"isinv;","8713":"notinva;","8715":"SuchThat;","8716":"NotReverseElement;","8719":"Product;","8720":"Coproduct;","8721":"sum;","8722":"minus;","8723":"mp;","8724":"plusdo;","8726":"ssetmn;","8727":"lowast;","8728":"SmallCircle;","8730":"Sqrt;","8733":"vprop;","8734":"infin;","8735":"angrt;","8736":"angle;","8737":"measuredangle;","8738":"angsph;","8739":"VerticalBar;","8740":"nsmid;","8741":"spar;","8742":"nspar;","8743":"wedge;","8744":"vee;","8745":"cap;","8746":"cup;","8747":"Integral;","8748":"Int;","8749":"tint;","8750":"oint;","8751":"DoubleContourIntegral;","8752":"Cconint;","8753":"cwint;","8754":"cwconint;","8755":"CounterClockwiseContourIntegral;","8756":"therefore;","8757":"because;","8758":"ratio;","8759":"Proportion;","8760":"minusd;","8762":"mDDot;","8763":"homtht;","8764":"Tilde;","8765":"bsim;","8766":"mstpos;","8767":"acd;","8768":"wreath;","8769":"nsim;","8770":"esim;","8771":"TildeEqual;","8772":"nsimeq;","8773":"TildeFullEqual;","8774":"simne;","8775":"NotTildeFullEqual;","8776":"TildeTilde;","8777":"NotTildeTilde;","8778":"approxeq;","8779":"apid;","8780":"bcong;","8781":"CupCap;","8782":"HumpDownHump;","8783":"HumpEqual;","8784":"esdot;","8785":"eDot;","8786":"fallingdotseq;","8787":"risingdotseq;","8788":"coloneq;","8789":"eqcolon;","8790":"eqcirc;","8791":"cire;","8793":"wedgeq;","8794":"veeeq;","8796":"trie;","8799":"questeq;","8800":"NotEqual;","8801":"equiv;","8802":"NotCongruent;","8804":"leq;","8805":"GreaterEqual;","8806":"LessFullEqual;","8807":"GreaterFullEqual;","8808":"lneqq;","8809":"gneqq;","8810":"NestedLessLess;","8811":"NestedGreaterGreater;","8812":"twixt;","8813":"NotCupCap;","8814":"NotLess;","8815":"NotGreater;","8816":"NotLessEqual;","8817":"NotGreaterEqual;","8818":"lsim;","8819":"gtrsim;","8820":"NotLessTilde;","8821":"NotGreaterTilde;","8822":"lg;","8823":"gtrless;","8824":"ntlg;","8825":"ntgl;","8826":"Precedes;","8827":"Succeeds;","8828":"PrecedesSlantEqual;","8829":"SucceedsSlantEqual;","8830":"prsim;","8831":"succsim;","8832":"nprec;","8833":"nsucc;","8834":"subset;","8835":"supset;","8836":"nsub;","8837":"nsup;","8838":"SubsetEqual;","8839":"supseteq;","8840":"nsubseteq;","8841":"nsupseteq;","8842":"subsetneq;","8843":"supsetneq;","8845":"cupdot;","8846":"uplus;","8847":"SquareSubset;","8848":"SquareSuperset;","8849":"SquareSubsetEqual;","8850":"SquareSupersetEqual;","8851":"SquareIntersection;","8852":"SquareUnion;","8853":"oplus;","8854":"ominus;","8855":"otimes;","8856":"osol;","8857":"odot;","8858":"ocir;","8859":"oast;","8861":"odash;","8862":"plusb;","8863":"minusb;","8864":"timesb;","8865":"sdotb;","8866":"vdash;","8867":"LeftTee;","8868":"top;","8869":"UpTee;","8871":"models;","8872":"vDash;","8873":"Vdash;","8874":"Vvdash;","8875":"VDash;","8876":"nvdash;","8877":"nvDash;","8878":"nVdash;","8879":"nVDash;","8880":"prurel;","8882":"vltri;","8883":"vrtri;","8884":"trianglelefteq;","8885":"trianglerighteq;","8886":"origof;","8887":"imof;","8888":"mumap;","8889":"hercon;","8890":"intercal;","8891":"veebar;","8893":"barvee;","8894":"angrtvb;","8895":"lrtri;","8896":"xwedge;","8897":"xvee;","8898":"xcap;","8899":"xcup;","8900":"diamond;","8901":"sdot;","8902":"Star;","8903":"divonx;","8904":"bowtie;","8905":"ltimes;","8906":"rtimes;","8907":"lthree;","8908":"rthree;","8909":"bsime;","8910":"cuvee;","8911":"cuwed;","8912":"Subset;","8913":"Supset;","8914":"Cap;","8915":"Cup;","8916":"pitchfork;","8917":"epar;","8918":"ltdot;","8919":"gtrdot;","8920":"Ll;","8921":"ggg;","8922":"LessEqualGreater;","8923":"gtreqless;","8926":"curlyeqprec;","8927":"curlyeqsucc;","8928":"nprcue;","8929":"nsccue;","8930":"nsqsube;","8931":"nsqsupe;","8934":"lnsim;","8935":"gnsim;","8936":"prnsim;","8937":"succnsim;","8938":"ntriangleleft;","8939":"ntriangleright;","8940":"ntrianglelefteq;","8941":"ntrianglerighteq;","8942":"vellip;","8943":"ctdot;","8944":"utdot;","8945":"dtdot;","8946":"disin;","8947":"isinsv;","8948":"isins;","8949":"isindot;","8950":"notinvc;","8951":"notinvb;","8953":"isinE;","8954":"nisd;","8955":"xnis;","8956":"nis;","8957":"notnivc;","8958":"notnivb;","8965":"barwedge;","8966":"doublebarwedge;","8968":"LeftCeiling;","8969":"RightCeiling;","8970":"lfloor;","8971":"RightFloor;","8972":"drcrop;","8973":"dlcrop;","8974":"urcrop;","8975":"ulcrop;","8976":"bnot;","8978":"profline;","8979":"profsurf;","8981":"telrec;","8982":"target;","8988":"ulcorner;","8989":"urcorner;","8990":"llcorner;","8991":"lrcorner;","8994":"sfrown;","8995":"ssmile;","9005":"cylcty;","9006":"profalar;","9014":"topbot;","9021":"ovbar;","9023":"solbar;","9084":"angzarr;","9136":"lmoustache;","9137":"rmoustache;","9140":"tbrk;","9141":"UnderBracket;","9142":"bbrktbrk;","9180":"OverParenthesis;","9181":"UnderParenthesis;","9182":"OverBrace;","9183":"UnderBrace;","9186":"trpezium;","9191":"elinters;","9251":"blank;","9416":"oS;","9472":"HorizontalLine;","9474":"boxv;","9484":"boxdr;","9488":"boxdl;","9492":"boxur;","9496":"boxul;","9500":"boxvr;","9508":"boxvl;","9516":"boxhd;","9524":"boxhu;","9532":"boxvh;","9552":"boxH;","9553":"boxV;","9554":"boxdR;","9555":"boxDr;","9556":"boxDR;","9557":"boxdL;","9558":"boxDl;","9559":"boxDL;","9560":"boxuR;","9561":"boxUr;","9562":"boxUR;","9563":"boxuL;","9564":"boxUl;","9565":"boxUL;","9566":"boxvR;","9567":"boxVr;","9568":"boxVR;","9569":"boxvL;","9570":"boxVl;","9571":"boxVL;","9572":"boxHd;","9573":"boxhD;","9574":"boxHD;","9575":"boxHu;","9576":"boxhU;","9577":"boxHU;","9578":"boxvH;","9579":"boxVh;","9580":"boxVH;","9600":"uhblk;","9604":"lhblk;","9608":"block;","9617":"blk14;","9618":"blk12;","9619":"blk34;","9633":"square;","9642":"squf;","9643":"EmptyVerySmallSquare;","9645":"rect;","9646":"marker;","9649":"fltns;","9651":"xutri;","9652":"utrif;","9653":"utri;","9656":"rtrif;","9657":"triangleright;","9661":"xdtri;","9662":"dtrif;","9663":"triangledown;","9666":"ltrif;","9667":"triangleleft;","9674":"lozenge;","9675":"cir;","9708":"tridot;","9711":"xcirc;","9720":"ultri;","9721":"urtri;","9722":"lltri;","9723":"EmptySmallSquare;","9724":"FilledSmallSquare;","9733":"starf;","9734":"star;","9742":"phone;","9792":"female;","9794":"male;","9824":"spadesuit;","9827":"clubsuit;","9829":"heartsuit;","9830":"diams;","9834":"sung;","9837":"flat;","9838":"natural;","9839":"sharp;","10003":"checkmark;","10007":"cross;","10016":"maltese;","10038":"sext;","10072":"VerticalSeparator;","10098":"lbbrk;","10099":"rbbrk;","10184":"bsolhsub;","10185":"suphsol;","10214":"lobrk;","10215":"robrk;","10216":"LeftAngleBracket;","10217":"RightAngleBracket;","10218":"Lang;","10219":"Rang;","10220":"loang;","10221":"roang;","10229":"xlarr;","10230":"xrarr;","10231":"xharr;","10232":"xlArr;","10233":"xrArr;","10234":"xhArr;","10236":"xmap;","10239":"dzigrarr;","10498":"nvlArr;","10499":"nvrArr;","10500":"nvHarr;","10501":"Map;","10508":"lbarr;","10509":"rbarr;","10510":"lBarr;","10511":"rBarr;","10512":"RBarr;","10513":"DDotrahd;","10514":"UpArrowBar;","10515":"DownArrowBar;","10518":"Rarrtl;","10521":"latail;","10522":"ratail;","10523":"lAtail;","10524":"rAtail;","10525":"larrfs;","10526":"rarrfs;","10527":"larrbfs;","10528":"rarrbfs;","10531":"nwarhk;","10532":"nearhk;","10533":"searhk;","10534":"swarhk;","10535":"nwnear;","10536":"toea;","10537":"tosa;","10538":"swnwar;","10547":"rarrc;","10549":"cudarrr;","10550":"ldca;","10551":"rdca;","10552":"cudarrl;","10553":"larrpl;","10556":"curarrm;","10557":"cularrp;","10565":"rarrpl;","10568":"harrcir;","10569":"Uarrocir;","10570":"lurdshar;","10571":"ldrushar;","10574":"LeftRightVector;","10575":"RightUpDownVector;","10576":"DownLeftRightVector;","10577":"LeftUpDownVector;","10578":"LeftVectorBar;","10579":"RightVectorBar;","10580":"RightUpVectorBar;","10581":"RightDownVectorBar;","10582":"DownLeftVectorBar;","10583":"DownRightVectorBar;","10584":"LeftUpVectorBar;","10585":"LeftDownVectorBar;","10586":"LeftTeeVector;","10587":"RightTeeVector;","10588":"RightUpTeeVector;","10589":"RightDownTeeVector;","10590":"DownLeftTeeVector;","10591":"DownRightTeeVector;","10592":"LeftUpTeeVector;","10593":"LeftDownTeeVector;","10594":"lHar;","10595":"uHar;","10596":"rHar;","10597":"dHar;","10598":"luruhar;","10599":"ldrdhar;","10600":"ruluhar;","10601":"rdldhar;","10602":"lharul;","10603":"llhard;","10604":"rharul;","10605":"lrhard;","10606":"UpEquilibrium;","10607":"ReverseUpEquilibrium;","10608":"RoundImplies;","10609":"erarr;","10610":"simrarr;","10611":"larrsim;","10612":"rarrsim;","10613":"rarrap;","10614":"ltlarr;","10616":"gtrarr;","10617":"subrarr;","10619":"suplarr;","10620":"lfisht;","10621":"rfisht;","10622":"ufisht;","10623":"dfisht;","10629":"lopar;","10630":"ropar;","10635":"lbrke;","10636":"rbrke;","10637":"lbrkslu;","10638":"rbrksld;","10639":"lbrksld;","10640":"rbrkslu;","10641":"langd;","10642":"rangd;","10643":"lparlt;","10644":"rpargt;","10645":"gtlPar;","10646":"ltrPar;","10650":"vzigzag;","10652":"vangrt;","10653":"angrtvbd;","10660":"ange;","10661":"range;","10662":"dwangle;","10663":"uwangle;","10664":"angmsdaa;","10665":"angmsdab;","10666":"angmsdac;","10667":"angmsdad;","10668":"angmsdae;","10669":"angmsdaf;","10670":"angmsdag;","10671":"angmsdah;","10672":"bemptyv;","10673":"demptyv;","10674":"cemptyv;","10675":"raemptyv;","10676":"laemptyv;","10677":"ohbar;","10678":"omid;","10679":"opar;","10681":"operp;","10683":"olcross;","10684":"odsold;","10686":"olcir;","10687":"ofcir;","10688":"olt;","10689":"ogt;","10690":"cirscir;","10691":"cirE;","10692":"solb;","10693":"bsolb;","10697":"boxbox;","10701":"trisb;","10702":"rtriltri;","10703":"LeftTriangleBar;","10704":"RightTriangleBar;","10716":"iinfin;","10717":"infintie;","10718":"nvinfin;","10723":"eparsl;","10724":"smeparsl;","10725":"eqvparsl;","10731":"lozf;","10740":"RuleDelayed;","10742":"dsol;","10752":"xodot;","10753":"xoplus;","10754":"xotime;","10756":"xuplus;","10758":"xsqcup;","10764":"qint;","10765":"fpartint;","10768":"cirfnint;","10769":"awint;","10770":"rppolint;","10771":"scpolint;","10772":"npolint;","10773":"pointint;","10774":"quatint;","10775":"intlarhk;","10786":"pluscir;","10787":"plusacir;","10788":"simplus;","10789":"plusdu;","10790":"plussim;","10791":"plustwo;","10793":"mcomma;","10794":"minusdu;","10797":"loplus;","10798":"roplus;","10799":"Cross;","10800":"timesd;","10801":"timesbar;","10803":"smashp;","10804":"lotimes;","10805":"rotimes;","10806":"otimesas;","10807":"Otimes;","10808":"odiv;","10809":"triplus;","10810":"triminus;","10811":"tritime;","10812":"iprod;","10815":"amalg;","10816":"capdot;","10818":"ncup;","10819":"ncap;","10820":"capand;","10821":"cupor;","10822":"cupcap;","10823":"capcup;","10824":"cupbrcap;","10825":"capbrcup;","10826":"cupcup;","10827":"capcap;","10828":"ccups;","10829":"ccaps;","10832":"ccupssm;","10835":"And;","10836":"Or;","10837":"andand;","10838":"oror;","10839":"orslope;","10840":"andslope;","10842":"andv;","10843":"orv;","10844":"andd;","10845":"ord;","10847":"wedbar;","10854":"sdote;","10858":"simdot;","10861":"congdot;","10862":"easter;","10863":"apacir;","10864":"apE;","10865":"eplus;","10866":"pluse;","10867":"Esim;","10868":"Colone;","10869":"Equal;","10871":"eDDot;","10872":"equivDD;","10873":"ltcir;","10874":"gtcir;","10875":"ltquest;","10876":"gtquest;","10877":"LessSlantEqual;","10878":"GreaterSlantEqual;","10879":"lesdot;","10880":"gesdot;","10881":"lesdoto;","10882":"gesdoto;","10883":"lesdotor;","10884":"gesdotol;","10885":"lessapprox;","10886":"gtrapprox;","10887":"lneq;","10888":"gneq;","10889":"lnapprox;","10890":"gnapprox;","10891":"lesseqqgtr;","10892":"gtreqqless;","10893":"lsime;","10894":"gsime;","10895":"lsimg;","10896":"gsiml;","10897":"lgE;","10898":"glE;","10899":"lesges;","10900":"gesles;","10901":"eqslantless;","10902":"eqslantgtr;","10903":"elsdot;","10904":"egsdot;","10905":"el;","10906":"eg;","10909":"siml;","10910":"simg;","10911":"simlE;","10912":"simgE;","10913":"LessLess;","10914":"GreaterGreater;","10916":"glj;","10917":"gla;","10918":"ltcc;","10919":"gtcc;","10920":"lescc;","10921":"gescc;","10922":"smt;","10923":"lat;","10924":"smte;","10925":"late;","10926":"bumpE;","10927":"preceq;","10928":"succeq;","10931":"prE;","10932":"scE;","10933":"prnE;","10934":"succneqq;","10935":"precapprox;","10936":"succapprox;","10937":"prnap;","10938":"succnapprox;","10939":"Pr;","10940":"Sc;","10941":"subdot;","10942":"supdot;","10943":"subplus;","10944":"supplus;","10945":"submult;","10946":"supmult;","10947":"subedot;","10948":"supedot;","10949":"subseteqq;","10950":"supseteqq;","10951":"subsim;","10952":"supsim;","10955":"subsetneqq;","10956":"supsetneqq;","10959":"csub;","10960":"csup;","10961":"csube;","10962":"csupe;","10963":"subsup;","10964":"supsub;","10965":"subsub;","10966":"supsup;","10967":"suphsub;","10968":"supdsub;","10969":"forkv;","10970":"topfork;","10971":"mlcp;","10980":"DoubleLeftTee;","10982":"Vdashl;","10983":"Barv;","10984":"vBar;","10985":"vBarv;","10987":"Vbar;","10988":"Not;","10989":"bNot;","10990":"rnmid;","10991":"cirmid;","10992":"midcir;","10993":"topcir;","10994":"nhpar;","10995":"parsim;","11005":"parsl;","64256":"fflig;","64257":"filig;","64258":"fllig;","64259":"ffilig;","64260":"ffllig;"}

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = {"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(202)

var Component = __webpack_require__(102)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(229),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/seewater/hub/editor/vue-rich-editor/example/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a2f6966", Component.options)
  } else {
    hotAPI.reload("data-v-7a2f6966", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(203)

var Component = __webpack_require__(102)(
  /* script */
  __webpack_require__(124),
  /* template */
  __webpack_require__(230),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/seewater/hub/editor/vue-rich-editor/src/vue-rich-editor/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec3d4dce", Component.options)
  } else {
    hotAPI.reload("data-v-ec3d4dce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "ve-container"
  }, [_c('h2', [_vm._v("DEMO")]), _vm._v(" "), _c('vue-rich-editor', {
    ref: _vm.vueEditorRef,
    attrs: {
      "id": _vm.editorId,
      "toolbarTips": _vm.toolbarTips,
      "customProtocol": _vm.customProtocol,
      "customLinkHref": _vm.customLinkHref,
      "keepPasteFormat": _vm.keepPasteFormat,
      "useCustomImageHandler": "",
      "useCustomImageLinkHandler": "",
      "disabled": _vm.editorIsDisabled,
      "linkPlaceholder": _vm.linkPlaceholder
    },
    on: {
      "reCustomLink": _vm.editorCustomLink,
      "reCursorMove": _vm.editorCursorMove,
      "reBlur": _vm.editorBlurEvt,
      "reFocus": _vm.editorFocusEvt,
      "reHighlighted": _vm.editorHighlightedEvt,
      "reImageAdded": _vm.uploadImage,
      "reImageLink": _vm.addImageLink
    },
    model: {
      value: (_vm.editorContent),
      callback: function($$v) {
        _vm.editorContent = $$v
      },
      expression: "editorContent"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ve-button-area"
  }, [_c('button', {
    staticClass: "ve-button",
    on: {
      "click": function($event) {
        _vm.saveContent(_vm.editorContent)
      }
    }
  }, [_vm._v("\n                console content\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "ve-button",
    on: {
      "click": function($event) {
        _vm.showEffectiveValue()
      }
    }
  }, [_vm._v("\n                console effective content\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "ve-button",
    on: {
      "click": function($event) {
        _vm.setEditor(_vm.setEditorDemo)
      }
    }
  }, [_vm._v("\n                set editor\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "ve-button",
    on: {
      "click": function($event) {
        _vm.getTrans()
      }
    }
  }, [_vm._v("\n                get transed html\n            ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "ve-container"
  }, [_c('h2', [_vm._v("DEMO2")]), _vm._v(" "), _c('vue-rich-editor', {
    ref: _vm.vueEditorRef2,
    attrs: {
      "id": _vm.editorId2,
      "customLinkHref": _vm.customLinkHref2
    },
    model: {
      value: (_vm.editorContent2),
      callback: function($$v) {
        _vm.editorContent2 = $$v
      },
      expression: "editorContent2"
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7a2f6966", module.exports)
  }
}

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "quill-wrapper",
    attrs: {
      "id": _vm.wrapId
    }
  }, [_c('div', {
    ref: "quillContainer",
    staticClass: "vre-editor-sign-only",
    attrs: {
      "id": _vm.id
    }
  }), _vm._v(" "), (_vm.useCustomImageHandler) ? _c('input', {
    ref: "fileInput",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "id": "file-upload",
      "type": "file",
      "accept": "image/*"
    },
    on: {
      "change": function($event) {
        _vm.emitImageInfo($event)
      }
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ec3d4dce", module.exports)
  }
}

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(103);


/***/ }),

/***/ 55:
/***/ (function(module, exports) {

module.exports = {"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\"","QUOT":"\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = {"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""}

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ = {
    typeOf: function typeOf() {
        var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        return o == null ? String(o) : {}.toString.call(o).slice(8, -1).toLowerCase();
    },
    protocolSafe: function protocolSafe() {
        var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        var location = document.createElement('a');
        location.href = url || '';
        var protocol = location.protocol || '';
        protocol = protocol.substr(0, protocol.length - 1);
        return list.includes(protocol);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (_);

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

module.exports = {"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\"","QUOT":"\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}

/***/ })

},[235]);
//# sourceMappingURL=client.js.map
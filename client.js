webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(45);
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

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(45);
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

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quill__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_quill__);


var SizeStyle = __WEBPACK_IMPORTED_MODULE_0_quill___default.a.import('attributors/style/size');
SizeStyle.whitelist = ['32px', '24px', '18px', '16px', '13px', '12px', false];

/* harmony default export */ __webpack_exports__["a"] = (SizeStyle);

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(45);
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

/***/ 152:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(152)

var Component = __webpack_require__(73)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(162),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/seewater/NOTE/my_github/vue-rich-editor/example/App.vue"
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

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(153)

var Component = __webpack_require__(73)(
  /* script */
  __webpack_require__(95),
  /* template */
  __webpack_require__(163),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/seewater/NOTE/my_github/vue-rich-editor/src/vue-rich-editor/index.vue"
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

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "ve-container"
  }, [_c('h3', [_vm._v("vue rich editor example")]), _vm._v(" "), _c('vue-rich-editor', {
    attrs: {
      "id": _vm.editorId,
      "quillRegisterKeys": _vm.quillRegisterKeys,
      "useCustomImageHandler": "",
      "useCustomImageLinkHandler": "",
      "disabled": _vm.editorIsDisabled,
      "linkPlaceholder": _vm.linkPlaceholder
    },
    on: {
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
  }, [_vm._v("\n                save content\n            ")]), _vm._v(" "), _c('button', {
    staticClass: "ve-button",
    on: {
      "click": function($event) {
        _vm.setEditor(_vm.setEditorDemo)
      }
    }
  }, [_vm._v("\n                set editor\n            ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "ve-container"
  }, [_c('h3', [_vm._v("vue rich editor example2")]), _vm._v(" "), _c('vue-rich-editor', {
    attrs: {
      "id": _vm.editorId1,
      "quillRegisterKeys": _vm.quillRegisterKeys1,
      "useCustomImageHandler": "",
      "useCustomImageLinkHandler": "",
      "disabled": _vm.editorIsDisabled1,
      "linkPlaceholder": _vm.linkPlaceholder1
    },
    on: {
      "reImageAdded": _vm.uploadImage1,
      "reImageLink": _vm.addImageLink1
    },
    model: {
      value: (_vm.editorContent1),
      callback: function($$v) {
        _vm.editorContent1 = $$v
      },
      expression: "editorContent1"
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

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "quill-wrapper"
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

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);



new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    render: function render(h) {
        return h(__WEBPACK_IMPORTED_MODULE_1__App_vue___default.a);
    }
});

/***/ }),

/***/ 93:
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

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard_paste__ = __webpack_require__(113);
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






/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        VueRichEditor: __WEBPACK_IMPORTED_MODULE_0__src_index_js__["a" /* VueRichEditor */]
    },
    data: function data() {
        return {
            editorId: 'editor',
            editorContent: '',
            setEditorDemo: '<h1>hahahah</h1>',
            editorIsDisabled: false,
            quillRegisterKeys: ['inline', 'size', 'imageResize', 'imageLink'],
            linkPlaceholder: '请输入链接',
            editorFocusCache: null,
            editorHasFocusFlag: false,
            //
            editorId1: 'editor1',
            editorContent1: 'demo1<img src="http://olz3b8fm9.bkt.clouddn.com/18-1-11/17450321.jpg" width="200px" height="100px" />',
            setEditorDemo1: '<h2>hahahah</h2>',
            editorIsDisabled1: false,
            quillRegisterKeys1: ['inline', 'size', 'imageResize', 'imageLink'],
            linkPlaceholder1: '请输入链接1'
        };
    },
    mounted: function mounted() {
        //
    },

    methods: {
        setEditor: function setEditor() {
            var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'demo';

            this.editorContent = str;
        },
        saveContent: function saveContent() {
            var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            console.log(content);
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
        },
        uploadImage1: function uploadImage1(options) {
            console.log(options);
        },
        addImageLink1: function addImageLink1(type, options) {
            console.log(type, options);
        }
    }
});

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quill__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extend_util__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(97);

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
        }
    },

    data: function data() {
        var _this = this;

        return {
            quill: null,
            editor: null,
            toolbarContainer: __WEBPACK_IMPORTED_MODULE_2__extend_util__["a" /* default */].typeOf(this.editorContainer) === 'array' && this.editorContainer.length ? this.editorContainer : __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].defaultEditorContainer,
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
                }
            }
        };
    },
    mounted: function mounted() {
        this.initRegisterModules();
        this.initializeVueRichEditor();
        this.handleUpdatedEditor();
        this.listenStateChangeEditor();
    },
    created: function created() {
        //
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

    methods: {
        initRegisterModules: function initRegisterModules() {
            if (!this.quillRegisterKeys || this.quillRegisterKeys && this.quillRegisterKeys.length) {
                var _keys = this.quillRegisterKeys && this.quillRegisterKeys.length ? this.quillRegisterKeys : __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].defaultQuillRegisterKeys;

                var _modules = {};

                _keys.forEach(function (item) {
                    if (__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].ENUM_MAP[item]) {
                        __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].ENUM_MAP[item].forEach(function (that) {
                            _modules[that.key] = that.value;
                        });
                    }
                });

                __WEBPACK_IMPORTED_MODULE_1_quill___default.a.register(_modules, true);
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
                imageLink: true
            };

            if (this.quillRegisterKeys && this.quillRegisterKeys.length && this.quillRegisterKeys.indexOf('imageResize') != -1 || !this.quillRegisterKeys) {
                _modulesConf.blotFormatter = {
                    specs: [__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].MyImageSpec]
                };
            }

            this.quill = new __WEBPACK_IMPORTED_MODULE_1_quill___default.a(this.$refs.quillContainer, {
                theme: 'snow',
                bounds: '#' + this.id,
                formats: __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].defaultClipboardFormats,
                modules: _modulesConf,
                placeholder: this.placeholder,
                readOnly: this.disabled ? this.disabled : false
            });

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

                    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(options, _o);

                    if (range.length == 0) {
                        self.$emit('reFocus', options);
                    } else {
                        var text = quill.getText(range.index, range.length);
                        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(options, { text: text });
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
        }
    }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_rich_editor_index_vue__ = __webpack_require__(161);
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

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rewrite_set_style_method_bold__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rewrite_set_style_method_italic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rewrite_set_style_method_underline__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rewrite_set_style_method_size__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_n_quill_blot_formatter__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_n_quill_blot_formatter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_n_quill_blot_formatter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_n_quill_blot_formatter_dist_specs_ImageSpec__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_n_quill_blot_formatter_dist_specs_ImageSpec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_n_quill_blot_formatter_dist_specs_ImageSpec__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_n_quill_blot_formatter_dist_actions_ResizeAction__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_n_quill_blot_formatter_dist_actions_ResizeAction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_n_quill_blot_formatter_dist_actions_ResizeAction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_n_quill_blot_formatter_dist_actions_DeleteAction__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_n_quill_blot_formatter_dist_actions_DeleteAction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_n_quill_blot_formatter_dist_actions_DeleteAction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__custom_modules_image_link_index__ = __webpack_require__(98);

















var config = {};

config.defaultEditorContainer = [['link', 'bold', 'italic', 'underline'], [{ color: [] }], [{ list: 'bullet' }, { list: 'ordered' }], ['image', 'image-link'], [{
    size: ['32px', '24px', '18px', '16px', '13px', '12px', false]
}], ['clean']];

config.defaultClipboardFormats = ['link', 'bold', 'italic', 'underline', 'color', 'list', 'image', 'width', 'height', 'size', 'header'];

config.defaultQuillRegisterKeys = ['inline', 'size', 'imageResize', 'imageLink'];

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

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(16);
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

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _ = {
    typeOf: function typeOf() {
        var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        return o == null ? String(o) : {}.toString.call(o).slice(8, -1).toLowerCase();
    }
};

/* harmony default export */ __webpack_exports__["a"] = (_);

/***/ })

},[165]);
//# sourceMappingURL=client.js.map
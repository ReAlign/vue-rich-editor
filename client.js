webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quill__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_quill__);


var SizeStyle = __WEBPACK_IMPORTED_MODULE_0_quill___default.a.import('attributors/style/size');
SizeStyle.whitelist = ['32px', '24px', '18px', '16px', '13px', '12px', false];

/* harmony default export */ __webpack_exports__["a"] = (SizeStyle);

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);









var Parchment = __WEBPACK_IMPORTED_MODULE_6_quill___default.a.import('parchment');

var UnderlineStyleAttributor = function (_Parchment$Attributor) {
  __WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits___default()(UnderlineStyleAttributor, _Parchment$Attributor);

  function UnderlineStyleAttributor() {
    __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck___default()(this, UnderlineStyleAttributor);

    return __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, (UnderlineStyleAttributor.__proto__ || __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default()(UnderlineStyleAttributor)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass___default()(UnderlineStyleAttributor, [{
    key: 'value',
    value: function value(domNode) {
      var value = __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get___default()(UnderlineStyleAttributor.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default()(UnderlineStyleAttributor.prototype), 'value', this).call(this, domNode);
      return value;
    }
  }, {
    key: 'add',
    value: function add(node, value) {
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

var UnderlineStyle = new UnderlineStyleAttributor('underline', 'text-decoration');

/* harmony default export */ __webpack_exports__["a"] = (UnderlineStyle);

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(150)

var Component = __webpack_require__(74)(
  /* script */
  __webpack_require__(95),
  /* template */
  __webpack_require__(166),
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

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(151)

var Component = __webpack_require__(74)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(167),
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

/***/ 166:
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
      "id": "editor",
      "quillRegisterKeys": _vm.quillRegisterKeys,
      "useCustomImageHandler": "",
      "disabled": _vm.editorIsDisabled
    },
    on: {
      "imageAdded": _vm.uploadImage
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
  }, [_vm._v("\n        save content\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "ve-button",
    on: {
      "click": function($event) {
        _vm.setEditor(_vm.setEditorDemo)
      }
    }
  }, [_vm._v("\n        set editor\n      ")])])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7a2f6966", module.exports)
  }
}

/***/ }),

/***/ 167:
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
      "type": "file"
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

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);



new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_1__App_vue___default.a);
  }
});

/***/ }),

/***/ 94:
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

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index_js__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(94);
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
      editorContent: 'demo string<img src="https://olx7tg2rm.qnssl.com/new.png" />',
      setEditorDemo: '<h1>hahahah</h1>',
      editorIsDisabled: false,
      quillRegisterKeys: ['inline', 'size', 'imageResize']
    };
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
    uploadImage: function uploadImage(file, Editor, cursorLocation) {
      var self = this;
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
    }
  }
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_quill_dist_quill_core_css__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_quill_dist_quill_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_quill_dist_quill_snow_css__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_n_quill_emoji_dist_n_quill_emoji_css__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_n_quill_emoji_dist_n_quill_emoji_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_n_quill_emoji_dist_n_quill_emoji_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rewrite_set_style_method_bold__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rewrite_set_style_method_italic__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rewrite_set_style_method_underline__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rewrite_set_style_method_size__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_n_quill_blot_formatter__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_n_quill_blot_formatter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_n_quill_blot_formatter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_n_quill_blot_formatter_dist_specs_ImageSpec__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_n_quill_blot_formatter_dist_specs_ImageSpec___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_n_quill_blot_formatter_dist_specs_ImageSpec__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_n_quill_blot_formatter_dist_actions_ResizeAction__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_n_quill_blot_formatter_dist_actions_ResizeAction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_n_quill_blot_formatter_dist_actions_ResizeAction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_n_quill_blot_formatter_dist_actions_align_AlignAction__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_n_quill_blot_formatter_dist_actions_align_AlignAction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_n_quill_blot_formatter_dist_actions_align_AlignAction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_n_quill_blot_formatter_dist_actions_DeleteAction__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_n_quill_blot_formatter_dist_actions_DeleteAction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_n_quill_blot_formatter_dist_actions_DeleteAction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_n_quill_emoji__ = __webpack_require__(161);





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




















var gValue = { value: '' };

var defaultToolbar = {
  container: [['link', 'bold', 'italic', 'underline'], [{ color: [] }], [{ list: 'bullet' }, { list: 'ordered' }], ['image'], ['emoji'], [{ size: ['32px', '24px', '18px', '16px', '13px', '12px', false] }], ['clean']],
  handlers: {
    'emoji': function emoji() {}
  }
};

var ENUM_MAP = {
  inline: [{
    key: 'formats/bold',
    value: __WEBPACK_IMPORTED_MODULE_10__rewrite_set_style_method_bold__["a" /* default */]
  }, {
    key: 'formats/italic',
    value: __WEBPACK_IMPORTED_MODULE_11__rewrite_set_style_method_italic__["a" /* default */]
  }, {
    key: 'formats/underline',
    value: __WEBPACK_IMPORTED_MODULE_12__rewrite_set_style_method_underline__["a" /* default */]
  }],
  size: [{
    key: 'formats/size',
    value: __WEBPACK_IMPORTED_MODULE_13__rewrite_set_style_method_size__["a" /* default */]
  }],
  imageResize: [{
    key: 'modules/blotFormatter',
    value: __WEBPACK_IMPORTED_MODULE_14_n_quill_blot_formatter___default.a
  }]
};

var defaultQuillRegisterKeys = ['inline', 'size', 'imageResize'];

var MyResizeAction = function (_ResizeAction) {
  __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits___default()(MyResizeAction, _ResizeAction);

  function MyResizeAction() {
    __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck___default()(this, MyResizeAction);

    return __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MyResizeAction.__proto__ || __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default()(MyResizeAction)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass___default()(MyResizeAction, [{
    key: 'onUpdate',
    value: function onUpdate() {
      gValue.value = __WEBPACK_IMPORTED_MODULE_6_jquery___default()('.vre-editor-sign-only .ql-editor')[0].innerHTML;
    }
  }]);

  return MyResizeAction;
}(__WEBPACK_IMPORTED_MODULE_16_n_quill_blot_formatter_dist_actions_ResizeAction___default.a);

var MyImageSpec = function (_ImageSpec) {
  __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits___default()(MyImageSpec, _ImageSpec);

  function MyImageSpec() {
    __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck___default()(this, MyImageSpec);

    return __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MyImageSpec.__proto__ || __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default()(MyImageSpec)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass___default()(MyImageSpec, [{
    key: 'getActions',
    value: function getActions() {
      return [MyResizeAction, __WEBPACK_IMPORTED_MODULE_17_n_quill_blot_formatter_dist_actions_align_AlignAction___default.a, __WEBPACK_IMPORTED_MODULE_18_n_quill_blot_formatter_dist_actions_DeleteAction___default.a];
    }
  }]);

  return MyImageSpec;
}(__WEBPACK_IMPORTED_MODULE_15_n_quill_blot_formatter_dist_specs_ImageSpec___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vue-rich-editor',
  props: {
    value: String,
    id: {
      type: String,
      default: 'quill-container'
    },
    disabled: Boolean,
    editorToolbar: Array,
    useCustomImageHandler: {
      type: Boolean,
      default: false
    },
    quillRegisterKeys: {
      type: Array,
      default: function _default() {
        return null;
      }
    }
  },

  data: function data() {
    return {
      gValue: gValue,
      quill: null,
      editor: null,
      toolbar: this.editorToolbar ? this.editorToolbar : defaultToolbar,
      placeholder: this.placeholder ? this.placeholder : ''
    };
  },
  mounted: function mounted() {
    this.initRegisterModules();
    this.initializeVueRichEditor();
    this.handleUpdatedEditor();
  },


  watch: {
    value: function value(val) {
      if (val != this.editor.innerHTML && !this.quill.hasFocus()) {
        this.editor.innerHTML = val;
      }
    },
    disabled: function disabled(status) {
      this.quill.enable(!status);
    },
    'gValue.value': function gValueValue(val) {
      this.$emit('input', val);
    }
  },

  methods: {
    initRegisterModules: function initRegisterModules() {
      if (!this.quillRegisterKeys || this.quillRegisterKeys && this.quillRegisterKeys.length) {
        var _keys = this.quillRegisterKeys && this.quillRegisterKeys.length ? this.quillRegisterKeys : defaultQuillRegisterKeys;
        var _modules = {};

        _keys.forEach(function (item) {
          if (ENUM_MAP[item]) {
            ENUM_MAP[item].forEach(function (that) {
              _modules[that.key] = that.value;
            });
          }
        });

        __WEBPACK_IMPORTED_MODULE_5_quill___default.a.register(_modules, true);
      }
    },
    initializeVueRichEditor: function initializeVueRichEditor() {
      this.setQuillElement();
      this.setEditorElement();
      this.checkForInitialContent();
    },
    setQuillElement: function setQuillElement() {
      var self = this;

      var _modulesConf = {
        toolbar: this.toolbar,
        toolbar_emoji: true
      };

      if (this.quillRegisterKeys && this.quillRegisterKeys.length && this.quillRegisterKeys.indexOf('imageResize') != -1 || !this.quillRegisterKeys) {
        _modulesConf.blotFormatter = {
          specs: [MyImageSpec]
        };
      }

      this.quill = new __WEBPACK_IMPORTED_MODULE_5_quill___default.a(this.$refs.quillContainer, {
        bounds: '.vre-editor-sign-only',
        modules: _modulesConf,
        placeholder: this.placeholder,
        theme: 'snow',
        readOnly: this.disabled ? this.disabled : false
      });

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
      var _this3 = this;

      this.quill.on('text-change', function () {
        _this3.$emit('input', _this3.editor.innerHTML);
      });
    },
    customImageHandler: function customImageHandler(image, callback) {
      this.$refs.fileInput.click();
    },
    emitImageInfo: function emitImageInfo($event) {
      var file = $event.target.files[0];
      var Editor = this.quill;
      var range = Editor.getSelection();
      var cursorLocation = range.index;
      this.$emit('imageAdded', file, Editor, cursorLocation);
    }
  }
});

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue_rich_editor_index_vue__ = __webpack_require__(165);
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

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);









var Parchment = __WEBPACK_IMPORTED_MODULE_6_quill___default.a.import('parchment');

var BoldStyleAttributor = function (_Parchment$Attributor) {
  __WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits___default()(BoldStyleAttributor, _Parchment$Attributor);

  function BoldStyleAttributor() {
    __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck___default()(this, BoldStyleAttributor);

    return __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, (BoldStyleAttributor.__proto__ || __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default()(BoldStyleAttributor)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass___default()(BoldStyleAttributor, [{
    key: 'value',
    value: function value(domNode) {
      var value = __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get___default()(BoldStyleAttributor.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default()(BoldStyleAttributor.prototype), 'value', this).call(this, domNode);
      return value;
    }
  }, {
    key: 'add',
    value: function add(node, value) {
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

var BoldStyle = new BoldStyleAttributor('bold', 'font-weight');

/* harmony default export */ __webpack_exports__["a"] = (BoldStyle);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_quill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);









var Parchment = __WEBPACK_IMPORTED_MODULE_6_quill___default.a.import('parchment');

var ItalicStyleAttributor = function (_Parchment$Attributor) {
  __WEBPACK_IMPORTED_MODULE_5__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_inherits___default()(ItalicStyleAttributor, _Parchment$Attributor);

  function ItalicStyleAttributor() {
    __WEBPACK_IMPORTED_MODULE_1__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_classCallCheck___default()(this, ItalicStyleAttributor);

    return __WEBPACK_IMPORTED_MODULE_3__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ItalicStyleAttributor.__proto__ || __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default()(ItalicStyleAttributor)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_createClass___default()(ItalicStyleAttributor, [{
    key: 'value',
    value: function value(domNode) {
      var value = __WEBPACK_IMPORTED_MODULE_4__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_helpers_get___default()(ItalicStyleAttributor.prototype.__proto__ || __WEBPACK_IMPORTED_MODULE_0__Users_seewater_NOTE_my_github_vue_rich_editor_node_modules_babel_runtime_core_js_object_get_prototype_of___default()(ItalicStyleAttributor.prototype), 'value', this).call(this, domNode);
      return value;
    }
  }, {
    key: 'add',
    value: function add(node, value) {
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

var ItalicStyle = new ItalicStyleAttributor('italic', 'font-style');

/* harmony default export */ __webpack_exports__["a"] = (ItalicStyle);

/***/ })

},[169]);
//# sourceMappingURL=client.js.map
<template>
<div class='quill-wrapper'>
  <div
    ref='quillContainer'
    class='vre-editor-sign-only'
    :id='id'>
  </div>
  <input
    ref='fileInput'
    id='file-upload'
    type='file'
    style='display:none'
    v-if='useCustomImageHandler'
    @change='emitImageInfo($event)' />
</div>
</template>

<script>
import Quill from 'quill';
import $ from 'jquery';

import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';

import MyBold from './rewrite/set-style-method/bold';
import MyItalic from './rewrite/set-style-method/italic';
import MyUnderline from './rewrite/set-style-method/underline';
import MySizeStyle from './rewrite/set-style-method/size';
import BlotFormatter from 'quill-blot-formatter';
import ImageSpec from 'quill-blot-formatter/dist/specs/ImageSpec';
import ResizeAction from 'quill-blot-formatter/dist/actions/ResizeAction';
import AlignAction from 'quill-blot-formatter/dist/actions/align/AlignAction';
import DeleteAction from 'quill-blot-formatter/dist/actions/DeleteAction';

let gValue = { value: '' };

let defaultToolbar = {
  container: [
    [ 'link', 'bold' , 'italic', 'underline' ],
    [ { color: [] } ],
    [ { list: 'bullet' }, { list: 'ordered' } ],
    [ 'image' ],
    [ { size: ['32px', '24px', '18px', '16px', '13px', '12px', false] } ],
    [ 'clean' ]
  ]
};

let ENUM_MAP = {
  inline: [
    {
      key: 'formats/bold',
      value: MyBold
    },
    {
      key: 'formats/italic',
      value: MyItalic
    },{
      key: 'formats/underline',
      value: MyUnderline
    }
  ],
  size: [
    {
      key: 'formats/size',
      value: MySizeStyle
    }
  ],
  imageResize: [
    {
      key: 'modules/blotFormatter',
      value: BlotFormatter
    }
  ]
};

let defaultQuillRegisterKeys = [
  'inline',
  'size',
  'imageResize'
];

class MyResizeAction extends ResizeAction {
  onUpdate() {
    gValue.value = $('.vre-editor-sign-only .ql-editor')[0].innerHTML;
  }
}

class MyImageSpec extends ImageSpec {
  getActions() {
    return [
      MyResizeAction, AlignAction, DeleteAction
    ];
  }
}

export default {
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
      default: () => null
    },
  },

  data() {
    return {
      gValue,
      quill: null,
      editor: null,
      toolbar: this.editorToolbar ? this.editorToolbar : defaultToolbar,
      placeholder: this.placeholder ? this.placeholder : ''
    };
  },

  mounted() {
    this.initRegisterModules();
    this.initializeVueRichEditor();
    this.handleUpdatedEditor();
  },

  watch: {
    value(val) {
      if (val != this.editor.innerHTML && !this.quill.hasFocus()) {
        this.editor.innerHTML = val;
      }
    },
    disabled(status) {
      this.quill.enable(!status);
    },
    'gValue.value'(val) {
      this.$emit('input', val);
    }
  },

  methods: {
    initRegisterModules() {
      if(!this.quillRegisterKeys || this.quillRegisterKeys && this.quillRegisterKeys.length) {
        let _keys = this.quillRegisterKeys && this.quillRegisterKeys.length
                    ? this.quillRegisterKeys
                    : defaultQuillRegisterKeys;
        let _modules = {};

        _keys.forEach((item) => {
          if(ENUM_MAP[item]) {
            ENUM_MAP[item].forEach((that) => {
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
      const self = this;

      let _modulesConf = {
        toolbar: this.toolbar
      };

      if((this.quillRegisterKeys
          && this.quillRegisterKeys.length
          && this.quillRegisterKeys.indexOf('imageResize') != -1)
        || !this.quillRegisterKeys) {
        _modulesConf.blotFormatter = {
          specs: [
            MyImageSpec,
          ],
        };
      }

      this.quill = new Quill(this.$refs.quillContainer, {
        bounds: '.vre-editor-sign-only',
        modules: _modulesConf,
        placeholder: this.placeholder,
        theme: 'snow',
        readOnly: this.disabled ? this.disabled : false
      });

      this.checkForCustomImageHandler();
    },

    setEditorElement() {
      this.editor = document.querySelector(`#${this.id} .ql-editor`);
    },

    checkForInitialContent() {
      this.editor.innerHTML = this.value || '';
    },

    checkForCustomImageHandler() {
      this.useCustomImageHandler === true ? this.setupCustomImageHandler() : '';
    },

    setupCustomImageHandler() {
      let toolbar = this.quill.getModule('toolbar');
      toolbar.addHandler('image', this.customImageHandler);
    },

    handleUpdatedEditor() {
      this.quill.on('text-change', () => {
        this.$emit('input', this.editor.innerHTML);
      });
    },

    customImageHandler(image, callback) {
      this.$refs.fileInput.click();
    },

    emitImageInfo($event) {
      let file = $event.target.files[0];
      let Editor = this.quill;
      let range = Editor.getSelection();
      let cursorLocation = range.index;
      this.$emit('imageAdded', file, Editor, cursorLocation);
    }
  }
};
</script>

<style lang='scss'>
.ql-editor {
  min-height: 200px;
  font-size: 14px;
}

.quill-wrapper {
  .ql-disabled {
    cursor: not-allowed;
    user-select: none;
  }
  .ql-editor ul {
    &[data-checked='true'] > li::before,
    &[data-checked='false'] > li::before {
      font-size: 14px;
      vertical-align: baseline;
      bottom: 0;
      font-weight: 900;
      color: #222;
    }
  }

  .ql-snow.ql-toolbar {
    padding-top: 8px;
    padding-bottom: 4px;
    button {
      // margin: 1px;
      svg {
        width: 18px;
        height: 18px;
      }
    }
    .ql-formats {
      border: 1px solid #ccc;
      margin-bottom: 4px;
      button {
        margin: 0;
      }
      button:not(:last-child) {
        border-right: 1px solid #ccc;
      }
    }
  }

  .ql-snow {
    .ql-picker.ql-size {
      height: 24px;
      line-height: 24px;
    }
    .ql-thin, .ql-stroke.ql-thin {
      stroke-width: 1px !important;
    }
    .ql-stroke {
      stroke: rgba(63, 63, 63, 0.95);
      stroke-linecap: square;
      stroke-linejoin: initial;
      stroke-width: 1.7px;
    }

    .ql-active .ql-stroke {
      stroke-width: 2.25px;
    }

    .ql-picker.ql-size {
      .ql-picker-label[data-value='12px']::before,
      .ql-picker-item[data-value='12px']::before {
        content: '12px';
        font-size: 12px;
      }

      .ql-picker-label[data-value='13px']::before,
      .ql-picker-item[data-value='13px']::before {
        content: '13px';
        font-size: 13px;
      }

      .ql-picker-label[data-value='16px']::before,
      .ql-picker-item[data-value='16px']::before {
        content: '16px';
        font-size: 14px;
      }

      .ql-picker-label[data-value='18px']::before,
      .ql-picker-item[data-value='18px']::before {
        content: '18px';
        font-size: 15px;
      }

      .ql-picker-label[data-value='24px']::before,
      .ql-picker-item[data-value='24px']::before {
        content: '24px';
        font-size: 16px;
      }

      .ql-picker-label[data-value='32px']::before,
      .ql-picker-item[data-value='32px']::before {
        content: '32px';
        font-size: 18px;
      }

      //默认的样式
      .ql-picker-label::before,
      .ql-picker-item::before {
        content: '正常';
        font-size: 14px;
      }
    }

    .ql-tooltip[data-mode='link']::before {
      content: '输入链接:';
    }

    .ql-tooltip::before {
      content: '访问链接:';
    }

    .ql-tooltip.ql-editing a.ql-action::after {
      content: '保存';
    }

    .ql-tooltip {
      a.ql-action::after {
        content: '编辑';
      }
      a.ql-remove::before {
        content: '移除';
      }
    }
  }
}
</style>
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

import MyBold from './rewrite/set-style-method/bold';
import MyItalic from './rewrite/set-style-method/italic';
import MyUnderline from './rewrite/set-style-method/underline';
import MySizeStyle from './rewrite/set-style-method/size';
import BlotFormatter from 'n-quill-blot-formatter';
import ImageSpec from 'n-quill-blot-formatter/dist/specs/ImageSpec';
import ResizeAction from 'n-quill-blot-formatter/dist/actions/ResizeAction';
// import AlignAction from 'n-quill-blot-formatter/dist/actions/align/AlignAction';
import DeleteAction from 'n-quill-blot-formatter/dist/actions/DeleteAction';

// import {
//   emojiBlot,
//   emojiBlotTwo,
//   shortNameEmoji,
//   toolbarEmoji,
//   textAreaEmoji
// } from 'n-quill-emoji';

let gValue = { value: '', id: '' };

let defaultToolbar = {
  container: [
    [ 'link', 'bold' , 'italic', 'underline' ],
    [ { color: [] } ],
    [ { list: 'bullet' }, { list: 'ordered' } ],
    [ 'image' ],
    // [ 'emoji' ],
    [ { size: ['32px', '24px', '18px', '16px', '13px', '12px', false] } ],
    [ 'clean' ]
  ],
  // handlers: {
  //     'emoji': function () {}
  // }
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

let defaultClipboardFormatsList = [];

class MyResizeAction extends ResizeAction {
  onUpdate() {
    gValue.value = $('#' + gValue.id + ' .ql-editor')[0].innerHTML;
  }
}

class MyImageSpec extends ImageSpec {
  getActions() {
    return [
      // MyResizeAction, AlignAction, DeleteAction
      MyResizeAction, DeleteAction
    ];
  }
}

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
    editorToolbar: {
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
    clipboardFormatsList: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      gValue,
      quill: null,
      editor: null,
      toolbar: this.editorToolbar
                && this.editorToolbar.length
                ? this.editorToolbar
                : defaultToolbar,
      clipboardFormatsList: this.clipboardFormatsList
                            && this.clipboardFormatsList.length
                              ? this.clipboardFormatsList
                              : defaultClipboardFormatsList,
      placeholder: this.placeholder ? this.placeholder : ''
    };
  },

  mounted() {
    this.initRegisterModules();
    this.initializeVueRichEditor();
    this.handleUpdatedEditor();
    this.listenStateChangeEditor();
  },

  created() {
    gValue.id = this.id;
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
        toolbar: this.toolbar,
        clipboard: {
          matchVisual: false
        },
        // toolbar_emoji: true
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
        bounds: '#' + this.id,
        formats: this.clipboardFormatsList,
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
      const self = this;
      this.quill.on('text-change', () => {
        self.$emit('input', this.editor.innerHTML);
      });
    },

    listenStateChangeEditor() {
      const self = this;
      this.quill.on('selection-change', (range, oldRange, source) => {
        if (range) {
          if (range.length == 0) {
            self.$emit('reFocus', range);
          } else {
            let text = self.quill.getText(range.index, range.length);
            self.$emit('reHighlighted', text, range);
          }
        } else {
          self.$emit('reBlur');
        }
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
      this.$emit('reImageAdded', file, Editor, cursorLocation);
    }
  }
};
</script>

<style lang='scss'>
@import './../../node_modules/quill/dist/quill.core.css';
@import './../../node_modules/quill/dist/quill.snow.css';
// @import './../../node_modules/n-quill-emoji/dist/n-quill-emoji.css';
.ql-editor {
  min-height: 200px;
  font-size: 14px;
}

.quill-wrapper {
  line-height: 26px;
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
    line-height: 26px;
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
    .ql-editor img, .ql-editor p img, .ql-editor * img {
      max-width: 10000%;
    }
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

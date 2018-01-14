<template>
<div id="app">
  <div class="ve-container">
    <h3>vue rich editor example</h3>
    <vue-rich-editor
      :id="editorId"
      :quillRegisterKeys="quillRegisterKeys"
      useCustomImageHandler
      :disabled="editorIsDisabled"
      :linkPlaceholder="linkPlaceholder"
      v-model="editorContent"
      @reBlur="editorBlurEvt"
      @reFocus="editorFocusEvt"
      @reHighlighted="editorHighlightedEvt"
      @reImageAdded="uploadImage" />
    <div class="ve-button-area">
      <button
        class="ve-button"
        @click="saveContent(editorContent)">
        save content
      </button>

      <button
        class="ve-button"
        @click="setEditor(setEditorDemo)">
        set editor
      </button>
    </div>
  </div>
</div>
</template>

<script>
import { VueRichEditor } from '../src/index.js';
import axios from 'axios';
import { Config } from './config';

export default {
  components: {
    VueRichEditor
  },
  data() {
    return {
      editorId: 'editor',
      editorContent: 'demo string<img src="http://olz3b8fm9.bkt.clouddn.com/18-1-11/17450321.jpg" />',
      setEditorDemo: '<h1>hahahah</h1>',
      editorIsDisabled: false,
      quillRegisterKeys: ['inline', 'size', 'imageResize'],
      linkPlaceholder: '请输入链接'
    };
  },
  methods: {
    setEditor(str = 'demo') {
      this.editorContent = str;
    },

    saveContent(content = '') {
      console.log(content);
    },

    editorFocusEvt(range) {
      console.log(range);
      console.log('Cursor in the editor');
    },

    editorBlurEvt() {
      console.log('Cursor not in the editor');
    },
    editorHighlightedEvt(text, range) {
      console.log('User has highlighted: ', text);
      console.log(range);
    },

    uploadImage(file, Editor, cursorLocation) {
      const self = this;
      let formData = new FormData();
      formData.append(Config.imageFileName, file);

      this.editorIsDisabled = true;

      axios({
        url: Config.URL.UPLOAD_IMAGE,
        method: 'POST',
        data: formData
      })
        .then(result => {
          self.editorIsDisabled = false;
          console.log(result);
          let url = result.data.data.url;
          Editor.insertEmbed(cursorLocation, 'image', url);
        })
        .catch(err => {
          self.editorIsDisabled = false;
          console.log(err);
        });
    }
  }
};
</script>

<style lang='scss'>
.ve-container {
  position: relative;
  width: calc(100% - 40px);
  margin: 0 auto;
  .ve-button-area {
    margin: 10px 0 0 0;
    .ve-button {
      padding: 4px 10px;
      background: #00a3cf;
      border: 0;
      border-radius: 3px;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
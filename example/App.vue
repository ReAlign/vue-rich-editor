<template>
<div id='app'>
  <div class='ve-container'>
    <h3>vue rich editor example</h3>
    <vue-rich-editor
      id='editor'
      @imageAdded='uplaodImage'
      useCustomImageHandler
      v-model='editorContent' />
    <div class='ve-button-area'>
      <button
        class='ve-button'
        @click='saveContent(editorContent)'>
        save content
      </button>

      <button
        class='ve-button'
        @click='setEditor(setEditorDemo)'>
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
      editorContent: 'demo string<img src="http://www.w3school.com.cn/ui2017/compatible_safari.png" />',
      setEditorDemo: '<h1>hahahah</h1>',
      showPreview: true,
      editor1IsDisabled: false
    };
  },
  methods: {
    setEditor(str = 'demo') {
      this.editorContent = str;
    },

    saveContent(content = '') {
      console.log(content);
    },

    uplaodImage(file, Editor, cursorLocation) {
      let formData = new FormData();
      formData.append(Config.imageFileName, file);

      axios({
        url: Config.URL.UPLOAD_IMAGE,
        method: 'POST',
        data: formData
      })
        .then(result => {
          console.log(result);
          let url = result.data.data.url;
          Editor.insertEmbed(cursorLocation, 'image', url);
        })
        .catch(err => {
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

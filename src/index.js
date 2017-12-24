import VueRichEditor from './vue-rich-editor.vue';

const VEditor = {
  VueRichEditor,
  install: function(Vue) {
    Vue.component(VueRichEditor.name, VueRichEditor)
  }
};

export default VEditor;
export { VueRichEditor };

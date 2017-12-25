import VueRichEditor from './vue-rich-editor/index.vue';

const VEditor = {
  VueRichEditor,
  install: function(Vue) {
    Vue.component(VueRichEditor.name, VueRichEditor)
  }
};

export default VEditor;
export { VueRichEditor };

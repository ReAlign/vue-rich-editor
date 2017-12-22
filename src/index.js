/**
 * VueRichEditor
 */
import VueRichEditor from './vue-rich-editor.vue'

const Vue2Editor = {
  VueRichEditor,
  install: function(Vue) {
    Vue.component(VueRichEditor.name, VueRichEditor)
  }
}

export default Vue2Editor
export { VueRichEditor }

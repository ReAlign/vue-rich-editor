import Quill from 'quill';
import $ from 'jquery';

let Parchment = Quill.import('parchment');

class BoldStyleAttributor extends Parchment.Attributor.Style {
  value(domNode) {
    let value = super.value(domNode);
    return value;
  }

  add(node, value) {
    $(node).css('font-weight', 'bold');
    return true;
  }

  remove(node) {
    $(node).css('font-weight', 'normal');
  }
}

let BoldStyle = new BoldStyleAttributor('bold', 'font-weight', {
  scope: Parchment.Scope.INLINE,
  whitelist: [true, false]
});

export default BoldStyle;

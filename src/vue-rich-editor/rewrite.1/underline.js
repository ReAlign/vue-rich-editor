import Quill from 'quill';
import $ from 'jquery';
import _t from './tool';

let Parchment = Quill.import('parchment');

class UnderlineStyleAttributor extends Parchment.Attributor.Style {
  value(domNode) {
    let value = super.value(domNode);
    return value;
  }

  add(node, value) {
    $(node).css('text-decoration', 'underline');
    return true;
  }
  remove(node) {
    $(node).css('text-decoration', _t.filterStyle(node, 'text-decoration', {style: 'underline', normal: 'none'}));
  }
}

let UnderlineStyle = new UnderlineStyleAttributor('underline', 'text-decoration', {
  scope: Parchment.Scope.INLINE,
  whitelist: [true, false]
});

export default UnderlineStyle;

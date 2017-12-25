import Quill from 'quill';
import $ from 'jquery';
import _t from './tool';

let Parchment = Quill.import('parchment');

class ItalicStyleAttributor extends Parchment.Attributor.Style {
  value(domNode) {
    let value = super.value(domNode);
    return value;
  }

  add(node, value) {
    $(node).css('font-style', 'italic');
    return true;
  }
  remove(node) {
    $(node).css('font-style', _t.filterStyle(node, 'font-style', {style: 'italic', normal: 'normal'}));
  }
}

let ItalicStyle = new ItalicStyleAttributor('italic', 'font-style', {
  scope: Parchment.Scope.INLINE,
  whitelist: [true, false]
});

export default ItalicStyle;

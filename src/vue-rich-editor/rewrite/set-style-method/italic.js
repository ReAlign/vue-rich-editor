import Quill from 'quill';
import $ from 'jquery';

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
    $(node).css('font-style', 'normal');
  }
}

let ItalicStyle = new ItalicStyleAttributor('italic', 'font-style');

export default ItalicStyle;

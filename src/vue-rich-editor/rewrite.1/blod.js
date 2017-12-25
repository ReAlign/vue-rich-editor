import Quill from 'quill';
import $ from 'jquery';
// import _t from './tool';

let Parchment = Quill.import('parchment');

class BoldStyleAttributor extends Parchment.Attributor.Style {
  value(domNode) {
    let value = super.value(domNode);
    return value;
  }

  add(node, value) {
    // node.tagName = 'STRONG';
    // console.log(node.tagName);
    $(node).css('font-weight', 'bold');
    $(node).addClass('aaa');
    return true;
  }

  remove(node) {
    // $(node).css('font-weight', _t.filterStyle(node, 'font-weight', {style: 'bold', normal: 'normal'}));
    $(node).css('font-weight', 'normal');
  }
}

let BoldStyle = new BoldStyleAttributor('bold', 'font-weight', {
  scope: Parchment.Scope.INLINE,
  whitelist: [true, false]
});

export default BoldStyle;

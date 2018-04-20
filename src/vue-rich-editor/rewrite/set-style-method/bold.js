import Quill from 'quill';
import $ from 'jquery';

let Parchment = Quill.import('parchment');

class BoldStyleAttributor extends Parchment.Attributor.Style {
    value(domNode) {
        let value = super.value(domNode);
        return value;
    }

    add(node) {
        $(node).css('font-weight', 'bold');
        return true;
    }

    remove(node) {
        $(node).css('font-weight', 'normal');
    }
}

const BoldStyle = new BoldStyleAttributor('bold', 'font-weight', {
    scope: Parchment.Scope.INLINE
});

export default BoldStyle;

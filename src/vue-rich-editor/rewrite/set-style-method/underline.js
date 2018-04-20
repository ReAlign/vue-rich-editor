import Quill from 'quill';
import $ from 'jquery';

const Parchment = Quill.import('parchment');

class UnderlineStyleAttributor extends Parchment.Attributor.Style {
    value(domNode) {
        let value = super.value(domNode);
        return value;
    }

    add(node) {
        $(node).css('text-decoration', 'underline');
        return true;
    }
    remove(node) {
        $(node).css('text-decoration', 'none');
    }
}

const UnderlineStyle = new UnderlineStyleAttributor('underline', 'text-decoration', {
    scope: Parchment.Scope.INLINE
});

export default UnderlineStyle;

import Quill from 'quill';
import $ from 'jquery';

const Parchment = Quill.import('parchment');

class ItalicStyleAttributor extends Parchment.Attributor.Style {
    value(domNode) {
        let value = super.value(domNode);
        return value;
    }

    add(node) {
        $(node).css('font-style', 'italic');
        return true;
    }

    remove(node) {
        $(node).css('font-style', 'normal');
    }
}

const ItalicStyle = new ItalicStyleAttributor('italic', 'font-style', {
    scope: Parchment.Scope.INLINE
});

export default ItalicStyle;

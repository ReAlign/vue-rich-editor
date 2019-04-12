import _ from './util';

const dom = {};

dom.$ = (sl = '') => {
    if (document.querySelector) {
        try {
            return document.querySelector(sl);
        } catch (e) {
            throw new Error(e);
        }
    }
    if (sl.indexOf('#') !== -1) {
        return document.getElementById(sl.slice(1));
    }
};
dom.$$ = (elem = null, cls = '') => elem.querySelector(cls);
dom.$$$ = (elem = null, cls = '') => elem.querySelectorAll(cls);

dom.text = (() => {
    const map = {};
    if (dom.msie && dom.msie < 9) {
        map[1] = 'innerText';
        map[3] = 'nodeValue';
    } else {
        map[1] = map[3] = 'textContent';
    }

    return (node, value) => {
        let textProp = map[node.nodeType];
        if (value === null) {
            return textProp ? node[textProp] : '';
        }
        node[textProp] = value;
    };
})();

dom.html = (node = null, html = '') => {
    if (_.typeOf(html) !== 'undefined') {
        node.innerHTML = html;
    } else {
        return node.innerHTML;
    }
};

dom.create = (type = '') => {
    const d = type ? document.createElement(type) : null;
    return d;
};

dom.inject = (node = null, refer = null) => {
    if (!node) {
        return null;
    }

    if (Array.isArray(node)) {
        let tmp = node;
        node = dom.fragment();
        for (let i = 0, len = tmp.length; i < len; i++) {
            node.appendChild(tmp[i]);
        }
    }

    refer.appendChild(node);
};

export default dom;
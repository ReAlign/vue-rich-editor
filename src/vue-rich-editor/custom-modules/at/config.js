const config = {};

config.UL_WIDTH = 100;
config.UL_LI_ITEM_HEIGHT = 26;
config.UL_LI_MAX_COUNT = 6;
config.UL_LIST_MAX_HEIGHT =
    config.UL_LI_ITEM_HEIGHT * config.UL_LI_MAX_COUNT;

config.MARGIN = {
    top: 20,
    left: 14
};

config.KEYS = {
    // number 2
    digit2: 50
};

config.isAt = e => e.keyCode === config.KEYS.digit2 && e.shiftKey;

config.indexDataKey = 'vre_index';

config.DOM = {
    show(node) {
        if(node) {
            node.style.display = 'block';
        }
    },
    hide(node) {
        if(node) {
            node.style.display = 'none';
        }
    },
    makeList(list = [], opts = {}) {
        const {
            className = 'm-ul',
            indexDataKey = config.indexDataKey
        } = opts;
        const UL = {
            start: `<ul class="${className}">`,
            end: '</ul>'
        };
        const makeLi = (opts = {}) => {
            const {
                klass = '',
                dataK = '',
                dataV = '',
                label = ''
            } = opts;

            return `
                <li
                    class="${klass}"
                    data-${dataK}="${dataV}"
                    title="${label}"
                >
                    ${label}
                </li>
            `;
        };

        const lis = [];

        if (list && list.length) {
            list.forEach((item = {}, index) => {
                lis.push(makeLi({
                    klass: 'vre-f-toe',
                    dataK: indexDataKey,
                    dataV: index,
                    label: item.label || ''
                }));
            });
        }

        return `${UL.start}${lis.join('')}${UL.end}`;
    }
};

export default config;
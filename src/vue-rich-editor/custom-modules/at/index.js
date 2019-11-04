import _ from './../../extend/util';
import dom from './../../extend/dom';
import Config from './config';
import Quill from 'quill';
import {
    position
} from 'caret-pos';

class At {
    constructor(quill = null, options = {}) {
        // 实例
        this.quill = quill;
        // 配置
        this.options = options || {};
        this.list = options.list || [];
        this.hooks = options.hooks || {};
        // tag class
        this.tagClassName = 'ql-custom-at-tag';
        // 唯一标记 id
        this.tagUId = `j-ql-custom-at-tag-${_.addUniqueSuffix(this.tagClassName)}`;
        // 备选列表
        this.atSelectListDom = null;

        // 初始化键盘事件
        this.initKeyEvents();
        // 初始化 at
        this.initSelectList();
    }
    initKeyEvents() {
        const {
            container
        } = this.quill;

        dom.on(container, 'keydown', this.keyDownEvt.bind(this), true);
    }

    keyDownEvt(e) {
        const vm = this;

        vm.codeKeyAtEvt(e);
    }
    codeKeyAtEvt(e) {
        const vm = this;

        if (Config.isAt(e)) {
            const {
                pxTop,
                pxLeft
            } = vm.getLatestUlListPosition();
            vm.atSelectListDom = dom.$(`#${vm.tagUId}`);

            vm.atSelectListDom.style.top = pxTop;
            vm.atSelectListDom.style.left = pxLeft;
            Config.DOM.show(vm.atSelectListDom);
        } else {
            Config.DOM.hide(vm.atSelectListDom);
        }
    }

    getLatestUlListPosition() {
        const quill = this.quill;
        const list = this.list;

        const MARGIN = Config.MARGIN;

        const maxCount = Math.min(list.length, Config.UL_LI_MAX_COUNT);
        const MAX_HEIGHT = maxCount * Config.UL_LI_ITEM_HEIGHT;

        let delta = 0;

        const ele = quill.container.querySelector('div.ql-editor');
        const computedStyle = window.getComputedStyle(ele, null);
        const eleWidth = Number(_.removeSuffix(computedStyle.width, 'px'));

        console.log(eleWidth);

        const pos = position(ele);
        const {
            top,
            left
        } = pos;

        if (top > MAX_HEIGHT) {
            delta = 0 - (MAX_HEIGHT * 1.25);
        }

        let numTop = top + delta + MARGIN.top;
        let numLeft = left + MARGIN.left;

        //    差值       = 计算所得 - (容器宽度 - 列表宽度)
        const deltaLeft = numLeft - (eleWidth - Config.UL_WIDTH);
        if (deltaLeft > 0) {
            numLeft = numLeft - deltaLeft;
        }

        return {
            top: numTop,
            left: numLeft,
            pxTop: `${numTop}px`,
            pxLeft: `${numLeft}px`
        };
    }
    initSelectList() {
        const vm = this;
        const mainNode = vm.quill.container;
        const list = vm.list || [];
        const hooks = vm.hooks || {};
        const {
            click: itemClickEvt
        } = hooks;
        const ulHtml = Config.DOM.makeList(list);

        const divNode = dom.create();
        divNode.id = this.tagUId;
        divNode.className = this.tagClassName;

        divNode.innerHTML = ulHtml;

        mainNode.appendChild(divNode);
        const _evt = (e) => {
            if (e.target.tagName.toUpperCase() === 'LI') {
                const index = parseInt(e.target.dataset[Config.indexDataKey]);
                vm.insertAtItem(list, index);
                const opts = {
                    list,
                    item: list[index],
                    index
                };
                if (_.typeOf(itemClickEvt) === 'function') {
                    itemClickEvt(opts);
                }
            }
        };

        dom.on(divNode, 'click', _evt.bind(vm));
    }

    insertAtItem(list = [], index = 0) {
        const quill = this.quill;
        const item = list[index] || {};
        const label = item.label || '';
        const insertText = ` @${label} `;

        quill.deleteText(quill.getSelection(true).index - 1, 1);

        quill.insertText(quill.getSelection(true).index, insertText, Quill.sources.USER);
        quill.setSelection(quill.getSelection(true).index + insertText.length, Quill.sources.SILENT);
        Config.DOM.hide(this.atSelectListDom);
    }
}

export default At;
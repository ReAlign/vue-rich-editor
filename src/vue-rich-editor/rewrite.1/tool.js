let _t = {
  filterStyle: (node, type = '', opt) => {
    if (node.nodeName.toLowerCase() == 'a') {
      if (node.childNodes && node.childNodes[0].nodeType != 3) {
        let _arrChild = {};
        let _stylesChild = node.childNodes[0].getAttribute('style').toString().split(';');

        _stylesChild.forEach((item) => {
          let _a = item.split(':');
          if ((_a[0] || '').trim()) {
            _arrChild[_a[0]] = (_a[1] || '').trim();
          }
        });

        console.log(_arrChild);

        return _arrChild[type] || opt.normal;
      } else {
        let _arr = {};
        let _styles = node.getAttribute('style').toString().split(';');

        _styles.forEach((item) => {
          let _a = item.split(':');
          if ((_a[0] || '').trim()) {
            _arr[_a[0]] = (_a[1] || '').trim();
          }
        });

        console.log(_arr);
        return _arr[type] == opt.style ? opt.normal : opt.style;
      }
    } else {
      return opt.normal;
    }
  }
};

export default _t;
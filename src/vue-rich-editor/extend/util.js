const _ = {};

_.typeOf = (o = '') => {
    const flag = o === null
        ? String(o)
        : ({}).toString.call(o).slice(8, -1).toLowerCase();
    return flag;
};

_.protocolSafe = (list = [], url = '') => {
    const location = document.createElement('a');
    location.href = url || '';
    let protocol = location.protocol || '';
    protocol = protocol.substr(0, protocol.length - 1);
    return list.includes(protocol);
};
// 添加唯一标记后缀
_.addUniqueSuffix = (str = '') =>
    `${str}-${+Date.now()}-${parseInt(Math.random() * 10000)}`;

_.isNumber = o => _.typeOf(o) === 'number';

_.isInteger = o => _.isNumber(o) && o % 1 === 0;

_.isIntegerNotZero = o => _.isInteger(0) && o !== 0;

// 移除字符串后缀
_.removeSuffix = (str = '', suf = '') => {
    if(_.typeOf(str) !== 'string' && _.typeOf(suf) !== 'string') {
        return str;
    }
    if(!str || !suf) {
        return str;
    }
    if(str.length <= suf.length) {
        return str;
    }

    return str.substr(0, str.length - suf.length);
};

export default _;
let _ = {
    typeOf(o = '') {
        return o == null
            ? String(o)
            : ({}).toString.call(o).slice(8, -1).toLowerCase();
    },
    protocolSafe(list = [], url = '') {
        const location = document.createElement('a');
        location.href = url || '';
        let protocol = location.protocol || '';
        protocol = protocol.substr(0, protocol.length - 1);
        return list.includes(protocol);
    }
};

export default _;

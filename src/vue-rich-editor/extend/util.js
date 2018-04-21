let _ = {
    typeOf(o = '') {
        return o == null
            ? String(o)
            : ({}).toString.call(o).slice(8, -1).toLowerCase();
    }
};

export default _;

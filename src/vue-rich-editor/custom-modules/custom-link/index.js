class CustomLink {
    constructor() {
        let customLinkBtns = document.getElementsByClassName('ql-custom-link');
        if(customLinkBtns) {
            [].slice.call(customLinkBtns).forEach((item) => {
                item.innerHTML = '<span class="ql-custom-link-inner"></span>';
            });
        };
    }
}

export default CustomLink;
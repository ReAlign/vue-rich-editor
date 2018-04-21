class ImageLink {
    constructor() {
        let imageLinkBtns = document.getElementsByClassName('ql-image-link');
        if(imageLinkBtns) {
            [].slice.call(imageLinkBtns).forEach((item) => {
                item.innerHTML = '<span class="ql-image-link-inner"></span>';
            });
        };
    }
}

export default ImageLink;
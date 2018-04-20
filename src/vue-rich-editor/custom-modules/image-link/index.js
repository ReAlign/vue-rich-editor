class ImageLink {
    constructor() {
        let imageLinkBtns = document.getElementsByClassName('ql-image-link');
        if(imageLinkBtns) {
            [].slice.call(imageLinkBtns).forEach((item) => {
                item.innerHTML = `
                    <span
                        style="
                            font-size: 14px;
                            font-weight: bold;
                            line-height: 14px;">
                        图
                    </span>
                `;
            });
        };
    }
}

export default ImageLink;
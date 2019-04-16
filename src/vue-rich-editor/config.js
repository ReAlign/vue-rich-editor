import MyBold from './rewrite/set-style-method/bold';
import MyItalic from './rewrite/set-style-method/italic';
import MyUnderline from './rewrite/set-style-method/underline';
import MySizeStyle from './rewrite/set-style-method/size';

import BlotFormatter from 'n-quill-blot-formatter';
import ImageSpec from 'n-quill-blot-formatter/dist/specs/ImageSpec';
import ResizeAction from 'n-quill-blot-formatter/dist/actions/ResizeAction';
import DeleteAction from 'n-quill-blot-formatter/dist/actions/DeleteAction';

import ImageLink from './custom-modules/image-link/index';
import CustomLink from './custom-modules/custom-link/index';

const config = {};

config.defaultEditorContainer = () => [
    ['link', 'bold', 'italic', 'underline'],
    [{ color: [] }],
    [
        { list: 'bullet' },
        { list: 'ordered' }
    ],
    ['image', 'image-link'],
    [
        {
            size: ['32px', '24px', '18px', '16px', '13px', '12px', false]
        }
    ],
    ['clean']
];

config.defaultClipboardFormats = () => [
    'link', 'bold', 'italic', 'underline',
    'color', 'list', 'image',
    'width', 'height', 'size', 'header'
];

config.defaultQuillRegisterKeys = () => [
    'inline', // b、i、u 内联
    'size', // 自定义字号
    'imageResize', // 图片缩放
    'imageLink', // 根据链接上传图片
    'customLink' // 自定义链接
];

config.ENUM_MAP = {
    inline: [
        {
            key: 'formats/bold',
            value: MyBold
        },
        {
            key: 'formats/italic',
            value: MyItalic
        },
        {
            key: 'formats/underline',
            value: MyUnderline
        }
    ],
    size: [
        {
            key: 'formats/size',
            value: MySizeStyle
        }
    ],
    imageResize: [
        {
            key: 'modules/blotFormatter',
            value: BlotFormatter
        }
    ],
    imageLink: [
        {
            key: 'modules/imageLink',
            value: ImageLink
        }
    ],
    customLink: [
        {
            key: 'modules/customLink',
            value: CustomLink
        }
    ]
};

class MyResizeAction extends ResizeAction {
    onUpdate() {
        //
    }
}

class MyImageSpec extends ImageSpec {
    getActions() {
        return [MyResizeAction, DeleteAction];
    }
}

config.MyImageSpec = MyImageSpec;

config.customLinkMsgMap = {
    0: 'Set custom-link successful.',
    1: 'Selection is empty!'
};

config.toolbarBtns = {
    link: {
        cls: '.ql-link',
        tip: '插入超链接'
    },
    bold: {
        cls: '.ql-bold',
        tip: '粗体'
    },
    italic: {
        cls: '.ql-italic',
        tip: '斜体'
    },
    underline: {
        cls: '.ql-underline',
        tip: '下划线'
    },
    color: {
        cls: '.ql-color-picker',
        tip: '文字颜色'
    },
    bullet: {
        cls: '.ql-list',
        order: 0,
        tip: '无序列表'
    },
    ordered: {
        cls: '.ql-list',
        order: 1,
        tip: '有序列表'
    },
    image: {
        cls: '.ql-image',
        tip: '选择图片上传'
    },
    'image-link': {
        cls: '.ql-image-link',
        tip: '通过链接上传图片'
    },
    size: {
        cls: '.ql-size',
        tip: '文字大小'
    },
    clean: {
        cls: '.ql-clean',
        tip: '清除格式'
    },
    'custom-link': {
        cls: '.ql-custom-link',
        tip: '插入自定义链接'
    }
};

export default config;
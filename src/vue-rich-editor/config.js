import MyBold from './rewrite/set-style-method/bold';
import MyItalic from './rewrite/set-style-method/italic';
import MyUnderline from './rewrite/set-style-method/underline';
import MySizeStyle from './rewrite/set-style-method/size';

import BlotFormatter from 'n-quill-blot-formatter';
import ImageSpec from 'n-quill-blot-formatter/dist/specs/ImageSpec';
import ResizeAction from 'n-quill-blot-formatter/dist/actions/ResizeAction';
import DeleteAction from 'n-quill-blot-formatter/dist/actions/DeleteAction';

import ImageLink from './custom-modules/image-link/index';

const config = {};

config.defaultEditorContainer = [
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

config.defaultClipboardFormats = [
    'link', 'bold', 'italic', 'underline',
    'color', 'list', 'image',
    'width', 'height', 'size', 'header'
];

config.defaultQuillRegisterKeys = [
    'inline',
    'size',
    'imageResize',
    'imageLink'
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

export default config;
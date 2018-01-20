# vue-rich-editor

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/vue-rich-editor.svg
[npm-url]: https://www.npmjs.com/package/vue-rich-editor

![](https://github.com/ReAlign/vue-rich-editor/blob/master/source/github-vue-rich-logo.png)

![demo](http://olz3b8fm9.bkt.clouddn.com/17-12-26/22851530.jpg)
> a vue rich text editor，based on quill

### Introduction

* Based on the quill
* Configurable module
    * [x] inline style
    * [x] reset size
        * [ ] it has problems when multiple instances in one page
    * [x] [image resize](https://github.com/Fandom-OSS/quill-blot-formatter)
    * [ ] image drop
    * [ ] emoji (img source)

### Demo

[deploy demo](http://realign.pw/vue-rich-editor/)

[codesandbox demo](https://codesandbox.io/s/w0m20jjxrl)

### Usage

[example](https://github.com/ReAlign/vue-rich-editor/tree/master/example)

### Props

| key | default | type | note |
| --- | --- | --- | --- |
| value | '' | string | content |
| id | 'quill-container' | string | *, only tag |
| disabled | false | boolean |  |
| editorToolbar | ↓ toolBar | array |  |
| quillRegisterKeys | null | array |  |
| clipboardFormatsList | ↓ CFList | array |  |
| placeholder | '' | string | |
| linkPlaceholder | 'input link' | string |  |

table extra value:

```
toolBar = [
    [ 'link', 'bold' , 'italic', 'underline' ],
    [ { color: [] } ],
    [ { list: 'bullet' }, { list: 'ordered' } ],
    [ 'image' ],
    [ { size: ['32px', '24px', '18px', '16px', '13px', '12px', false] } ],
    [ 'clean' ]
];

CFList = [
  'link',
  'bold',
  'italic',
  'underline',
  'color',
  'list',
  'image',
  'size',
  'header'
]
```

### Methods

[example](https://github.com/ReAlign/vue-rich-editor/tree/master/example)
#### State

```
reFocus(range)
```

```
reHighlighted(text, range)
```

```
reBlur()
```

#### Image

```
reImageAdded(file, Editor, cursorLocation)
```

### TODO

* [x] inline-style
* [ ] image-resize
    * [ ] it has problems when multiple instances in one page
* [x] link and style conflict
* [x] link placeholder

### issues

[clipboard formats about](https://github.com/quilljs/quill/issues/1687)
[matchvisual](https://quilljs.com/docs/modules/clipboard/#matchvisual)
[link placeholder](https://github.com/quilljs/quill/issues/1107)


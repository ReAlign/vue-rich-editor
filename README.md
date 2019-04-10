# vue-rich-editor

## ！！！从 V0.7.x 开始，API 有更新，请注意

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/vue-rich-editor.svg?longCache=true&style=for-the-badge
[npm-url]: https://www.npmjs.com/package/vue-rich-editor

> 定制 vue 富文本编辑器，基于 Quill

![logo](https://dwz.cn/lyPrpas0)

![demo](https://dwz.cn/wrchFtrx)

## 介绍

1. 基于 quill 封装
2. 可配置模块
    * [x] 行内样式（inline style）
    * [x] [图片缩放（image resize）](https://github.com/Fandom-OSS/quill-blot-formatter)
    * [ ] [拖拽上传（image drop）](https://github.com/kensnyder/quill-image-drop-module)
    * [x] 链接上传图片（support via the url to upload pictures）
    * [x] 剪贴板粘贴图片（support the clipboard to paste pictures）

## 示例

[静态示例](https://realign.github.io/vue-rich-editor/)

[codesandbox 示例](https://codesandbox.io/s/w0m20jjxrl)[不定期更新]

## 使用

[实例](https://github.com/ReAlign/vue-rich-editor/tree/master/example)

## 配置

| 属性值 | 默认 | 类型 | 备注 |
|  --- |  --- |  --- |   --- |
| value | '' | string | content |
| id | 'quill-container' | string | *, only tag |
| keepPasteFormat | true | boolean | keep text format, from clipboard |
| disabled | false | boolean |  |
| editorContainer | [] | array |  |
| quillRegisterKeys | null | array |  |
| placeholder | '' | string | |
| linkPlaceholder | '请输入链接' | string |  |
| imageLinkTitle | '请输入图片地址：' | string |  |
| imageLinkPlaceholder | 'https://' | string |  |
| customLinkHref | '' | string | 自定义链接内容；有值：显示按钮，空，表示不显示 |

### customLink 图标样式自定义

* 默认是文字风格，可自由修改，下面的例子是采用图片[按钮内区域大小为：18*18]

```less
.ql-custom-link {
    .ql-custom-link-inner {
        // 图片
        background-image: url(https://dwz.cn/H9EkfLih);
        background-size: 100% 100%;
        // 重置掉文字
        &::before {
            content: '';
        }
    }
}
```

## 方法

[示例](https://github.com/ReAlign/vue-rich-editor/tree/master/example)

## Emit - 主动抛出

### 编辑器状态相关

```javascript
// focus
reFocus(options)
options = {
    Editor,
    source,
    range,
    oldRange,
    cursorLocation
}
```

```javascript
// 内容高亮
reHighlighted(options)
options = {
    Editor,
    source,
    range,
    oldRange,
    cursorLocation,
    text
}
```

```javascript
// blur
reBlur(options)
options = {
    Editor,
    source
}
```

```javascript
// cursor move evt
reCursorMove(options)
options = {
    range,
    oldRange
}
```

### 图片相关

```javascript
// 文件 上传图片
/**
 * 此处注意，更新到 V0.7.0 之后，参数格式变了
 */
reImageAdded(options)
options = {
    file,           // 文件
    Editor,         // 当前编辑器
    range,
    cursorLocation
}
```

```javascript
// 链接上传图片
reImageLink(type, options)
type            // string：'ok':点击确定，'cancel':点击取消
options = {
    url,            // 输入路径
    Editor,         // 当前编辑器
    range,
    cursorLocation
}
```

### 自定义链接

```javascript
// 自定义链接回调
reCustomLink(opts)
opts = {
    code,           // 状态码：0 成功；1 失败
    msg,            // 状态描述
}
```

## RefCall - 被动调用

### 获取移动端可使用富文本

```javascript
// _$getTagFillHtml
_$getTagFillHtml()
return = `${transedHtml}`
```

### 待完善

1. [x] 行内样式（inline-style）
2. [x] 图片缩放（image-resize）
3. [x] link and style conflict
4. [x] link placeholder
5. [x] use the url to upload image
6. [ ] [image drop](https://github.com/kensnyder/quill-image-drop-module)

## issues

* [clipboard formats about](https://github.com/quilljs/quill/issues/1687)
* [matchvisual](https://quilljs.com/docs/modules/clipboard/#matchvisual)
* [link placeholder](https://github.com/quilljs/quill/issues/1107)

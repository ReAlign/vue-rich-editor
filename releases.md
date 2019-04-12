# releases

## 0.6.0

* 版本升级，解决中文输入，首行首字符问题
    * [issue#2009](https://github.com/quilljs/quill/issues/2009)

***

## 0.7.0

### 优化

* 代码结构
    * 配置项
        * toolbar 相关
            * 删除 editorToolbar 整体配置项
            * 添加 editorContainer 配置项，配置更少，更便捷
            * 保护 handler 不可更改
        * 删除 clipboardFormatsList 配置项，文本格式保护，不可配置
        * 添加 imageLinkTitle 配置项
        * 添加 imageLinkPlaceholder 配置项
    * 文件上传图片方法参数格式变化
        * 更新前：

            ```
            reImageAdded(file, Editor, cursorLocation)
            ```

       * 更新后：

            ```
            reImageAdded(options)
            options = {
                file,           // 文件
                Editor,         // 当前编辑器
                range,
                cursorLocation
            }
            ```
### 增加

* 通过链接上传图片功能

    ```
    // 链接上传图片
    reImageLink(type, options)
    type            // string：'ok':点击确定，'cancel':点击取消
    options = {
        url,        // 输入路径
        Editor,     // 当前编辑器
        range,
        cursorLocation
    }
    ```

* 图片缩放功能

## 0.7.3

### API优化

* 参数优化
  * reFocus
  * reHighlighted
  * reBlur

## 0.7.4

### API新增

* reCursorMove：鼠标指针移动事件

## 0.7.5

### 新增选项

* keepPasteFormat: 粘贴是否保持格式

## 0.7.6

### 新增 toolbar-customLink

* 自定义链接按钮
  * 给选中文字设置默认链接
  * props: `customLinkHref: 'http://realign.pw'`

## 0.7.7

### API新增

* reCustomLink：自定义链接回调

### bugfix

* 设置自定义链接不生效问题

## 0.7.8

### API新增

* _$getTagFillHtml: 获取当前富文本 `tag` 填充的形式
  * 供移动使用的，必须使用 `tag` 格式

## 0.7.9

### API新增

* _$getEffectiveValue: 获取当前富文本有效内容
  * 解决填完内容再删除后含有空标签，导致判断错误问题

## 0.7.9-beta.0

### 引用包 bugFix

* [trans-style-tags](https://www.npmjs.com/package/trans-style-tags#003)

## 0.7.9-beta.1

### bugfix

* 单页面多实例下，自定义请求按钮出现多个
* 自定义(不安全)协议被重置成 `about:blank`
  * 增加 `prop`: `customProtocol`

## 0.8.0

### 主题优化

* 降低对比度
* 增强柔和度

### 增强交互 —— 工具条文字提示

如题
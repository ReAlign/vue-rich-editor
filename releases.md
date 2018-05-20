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
<template>
    <div id="app">
        <div class="ve-container">
            <h2>DEMO</h2>
            <vue-rich-editor
                :id="editorId"
                :customLinkHref="customLinkHref"
                :keepPasteFormat="keepPasteFormat"
                useCustomImageHandler
                useCustomImageLinkHandler
                :disabled="editorIsDisabled"
                :linkPlaceholder="linkPlaceholder"
                v-model="editorContent"
                @reCustomLink="editorCustomLink"
                @reCursorMove="editorCursorMove"
                @reBlur="editorBlurEvt"
                @reFocus="editorFocusEvt"
                @reHighlighted="editorHighlightedEvt"
                @reImageAdded="uploadImage"
                @reImageLink="addImageLink"
            />
            <div class="ve-button-area">
                <button
                    class="ve-button"
                    @click="saveContent(editorContent)">
                    console content
                </button>

                <button
                    class="ve-button"
                    @click="setEditor(setEditorDemo)">
                    set editor
                </button>
            </div>
        </div>

        <!-- <div class="ve-container">
            <h3>vue rich editor example2</h3>
            <vue-rich-editor
                :id="editorId1"
                useCustomImageHandler
                useCustomImageLinkHandler
                :disabled="editorIsDisabled1"
                :linkPlaceholder="linkPlaceholder1"
                v-model="editorContent1"
                @reImageAdded="uploadImage1"
                @reImageLink="addImageLink1"
            />
        </div> -->
    </div>
</template>

<script>
import { VueRichEditor } from '../src/index.js';
import axios from 'axios';
import { Config } from './config';
import ClipboardPaste from 'clipboard-paste';

export default {
    components: {
        VueRichEditor
    },
    data() {
        return {
            editorId: 'editor',
            customLinkHref: 'http://realign.pw',
            keepPasteFormat: false,
            editorContent: '<h4><span style="font-weight: bold; font-style: italic; color: rgb(230, 0, 0);">这是一段文字</span></h4><br><br><img src="https://dwz.cn/fBofuN4L" width="150px" height="150px" />',
            setEditorDemo: '<h1>hahahah</h1>',
            editorIsDisabled: false,
            linkPlaceholder: '请输入链接',
            editorFocusCache: null,
            editorHasFocusFlag: false,
            //
            // editorId1: 'editor1',
            // editorContent1: 'demo1<img src="https://public-bucket-realign.nos-eastchina1.126.net/image/normal/2018-12-30/img-1546104722969-415.png" width="536px" height="408px" />',
            // setEditorDemo1: '<h2>hahahah</h2>',
            // editorIsDisabled1: false,
            // linkPlaceholder1: '请输入链接1'
        };
    },
    mounted() {
        //
    },
    methods: {
        setEditor(str = 'demo') {
            this.editorContent = str;
        },

        saveContent(content = '') {
            console.log(content);
        },

        editorFocusEvt(opt) {
            this.editorFocusCache = opt;

            if(!this.editorHasFocusFlag) {
                this.editorHasFocusFlag = true;
                ClipboardPaste.addEvtPaste4Image(`#${this.editorId}`, this.cbPasteEvtImage);
            }
        },
        cbPasteEvtImage(e, blob) {
            if(blob) {
                e.preventDefault();
                const _c = this.editorFocusCache;

                console.log(e, blob);
                console.log(_c);

                const opt = {
                    file: blob.content,
                    Editor: _c.Editor,
                    cursorLocation: _c.cursorLocation
                };
                this.uploadImage(opt);
            }
        },

        editorCustomLink(opts) {
            console.log(opts);
        },
        editorCursorMove(opt) {
            const editorFocusCache = this.editorFocusCache;
            const {
                range,
                oldRange,
            } = opt;
            if(editorFocusCache && !range && oldRange) {
                editorFocusCache.range = oldRange;
                editorFocusCache.cursorLocation = oldRange.index;
            }
        },

        editorBlurEvt() {
            console.log('Cursor not in the editor');
        },
        editorHighlightedEvt(opt) {
            const {
                text, range
            } = opt;
            console.log('User has highlighted: ', text);
            console.log(range);
        },

        uploadImage(options) {
            const self = this;
            const {
                file,
                Editor,
                cursorLocation
            } = options;
            let formData = new FormData();
            formData.append(Config.imageFileName, file);

            this.editorIsDisabled = true;

            axios({
                url: Config.URL.UPLOAD_IMAGE,
                method: 'POST',
                data: formData
            })
                .then(result => {
                    self.editorIsDisabled = false;
                    console.log(result);
                    let url = result.data.data.url;
                    Editor.insertEmbed(cursorLocation, 'image', url);
                })
                .catch(err => {
                    self.editorIsDisabled = false;
                    console.log(err);
                });
        },

        addImageLink(type = 'ok', options) {
            const {
                url,
                Editor,
                cursorLocation
            } = options;
            if(type == 'cancel') {
                return false;
            }
            if(type == 'ok') {
                if(url != '') {
                    alert(url);
                } else {
                    alert('url 必填哈');
                }
            }
        },

        uploadImage1(options) {
            console.log(options);
        },

        addImageLink1(type, options) {
            console.log(type, options);
        }
    }
};
</script>

<style lang='scss'>
$h2-before-height: 10px;
$h2-before-width: 4px;
h2 {
    position: relative;
    margin-bottom: 12px;
    text-indent: $h2-before-width * 2;
    &::before {
        content: "";
        position: absolute;
        top: $h2-before-height / 2;
        left: 0;
        width: $h2-before-width;
        height: calc(100% - #{$h2-before-height});
        background: #333;
    }
}
.ve-container {
    position: relative;
    // width: calc(100% - 40px);
    width: 700px;
    margin: 60px auto 0;
    .ve-button-area {
        margin: 10px 0 0 0;
        .ve-button {
        padding: 4px 10px;
        background: #00a3cf;
        border: 0;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;
        }
    }
}
</style>
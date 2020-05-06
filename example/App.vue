<template>
    <div id="app">
        <div class="ve-container">
            <h2>DEMO</h2>
            <div class="ve-cont-generate">
                <span>Origin rich string: </span>
                <input type="text" v-model="oriStr">
                <button class="ve-button" @click="generateIt">generate</button>
            </div>
            <vue-rich-editor
                :ref="vueEditorRef"
                :id="editorId"
                :placeholder="placeholder"
                :toolbarTips="toolbarTips"
                :customProtocol="customProtocol"
                :customLinkHref="customLinkHref"
                :keepPasteFormat="keepPasteFormat"
                useCustomImageHandler
                useCustomImageLinkHandler
                :disabled="editorIsDisabled"
                :linkPlaceholder="linkPlaceholder"
                :quillRegisterKeys="quillRegisterKeys"
                :atList="atList"
                :atHooks="atHooks"
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
                    title="For H5/PC"
                    @click="saveContent(editorContent)">
                    console content
                </button>

                <button
                    class="ve-button"
                    @click="showEffectiveValue()">
                    console effective content
                </button>

                <!-- <button
                    class="ve-button"
                    @click="setEditor(setEditorDemo)">
                    set editor
                </button> -->

                <button
                    class="ve-button"
                    title="For AOS/IOS"
                    @click="getTrans()">
                    get transed html
                </button>
            </div>
        </div>

        <div class="ve-container">
            <h2>DEMO2</h2>
            <vue-rich-editor
                :ref="vueEditorRef2"
                :id="editorId2"
                :customLinkHref="customLinkHref2"
                v-model="editorContent2"
            />
        </div>
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
            oriStr: '',

            vueEditorRef: 'vueEditorRef',
            editorId: 'editor',
            placeholder: 'Try input `@`',
            toolbarTips: true,
            customProtocol: ['qiyu'],
            quillRegisterKeys: [
                'inline', // b、i、u 内联
                'size', // 自定义字号
                'imageResize', // 图片缩放
                'imageLink', // 根据链接上传图片
                'customLink', // 自定义链接
                'at' // 默认不开启
            ],
            atList: [
                { value: 1, label: '你瞅啥' },
                { value: 2, label: '瞅你咋的' },
                { value: 3, label: '再瞅一个试试' }
            ],
            atHooks: {
                click(opts) {
                    console.log(opts);
                }
            },
            customLinkHref: 'htstp://action.qiyukf.com?command=applyHumanStaff',
            keepPasteFormat: false,
            // editorContent: '<h4><span style="font-weight: bold; font-style: italic; color: rgb(230, 0, 0);">这是一段文字</span></h4><br><br><img src="https://dwz.cn/fBofuN4L" width="150px" height="150px" />',
            editorContent: '',
            setEditorDemo: '<h1>hahahah</h1>',
            editorIsDisabled: false,
            linkPlaceholder: '请输入链接',
            editorFocusCache: null,
            editorHasFocusFlag: false,
            vueEditorRef2: 'vueEditorRef2',
            editorId2: 'editor2',
            customLinkHref2: 'qiyu//:qqq',
            editorContent2: ''
        };
    },
    mounted() {
        //
    },
    methods: {
        generateIt() {
            const vm = this;

            vm.editorContent = vm.oriStr;
        },
        getTrans() {
            const vm = this;
            console.log(vm.$refs[vm.vueEditorRef]._$getTagFillHtml());
        },
        setEditor(str = 'demo') {
            this.editorContent = str;
        },
        saveContent(content = '') {
            console.log(content);
        },
        showEffectiveValue() {
            const vm = this;
            console.log(vm.$refs[vm.vueEditorRef]._$getEffectiveValue());
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
    }
    .ve-button {
        padding: 4px 10px;
        background: #00a3cf;
        border: 0;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;
        outline: none;
    }
    .ve-cont-generate {
        margin-bottom: 4px;
        & > input {
            width: 400px;
            padding: 3px 6px;
            outline: none;
            border: 1px solid #E1E3E6;
            border-radius: 2px;
            &:focus {
                border: 1px solid gray;
            }
        }
    }
}
</style>
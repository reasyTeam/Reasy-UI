<template>
    <div class="uploader-container">
        <form
            ref="iform"
            class="iform"
            method="POST"
            :action="uploadUrl"
            :target="targetFile"
            enctype="multipart/form-data"
        >
            <div class="clearfix">
                <div class="file-btn-group">
                    <a class="btn" :class="css">
                        <span class="file-title">选择文件</span>
                        <input
                            ref="file"
                            :name="name"
                            type="file"
                            class="file"
                            @change="selectFile"
                        />
                    </a>
                </div>
                <div v-if="fileStr && hasTips" class="file-tips">
                    <span class="v-icon-file"></span>
                    <span>{{fileStr}}</span>
                </div>
            </div>
            <slot></slot>
        </form>
        <iframe class="upload" ref="upload" :name="targetFile" width="1px" height="1px"></iframe>
    </div>
</template>
<script>
export default {
    name: "v-upload",
    props: {
        uploadUrl: {
            //上传url
            type: String
        },
        hasTips: {
            type: Boolean,
            default: false
        },
        css: {
            type: String
        },
        afterCallBack: {
            //上传成功后的回调
            type: Function,
            default: function() {}
        },
        changeCallBack: {
            //切换文件后的回调
            type: Function,
            default: function() {}
        },
        name: {
            //文件名
            type: String,
            default: "file"
        }
    },
    data() {
        return {
            domain: "",
            fileStr: "",
            fileList: [],
            uploadList: [],
            file: {},
            targetFile: ""
        };
    },
    created() {
        this.targetFile = "upload" + Math.random();
    },
    methods: {
        parseIframeResponse() {
            const elm = this.$refs.upload.contentWindow.document.body;
            const response = elm.innerText || elm.textContent;
            if (!response) {
                return false;
            }
            try {
                const jsonStr = JSON.parse(response);
                this.afterCallBack(jsonStr);
            } catch (err) {}
        },
        selectFile(e) {
            let fileArr = e.target.value.split("\\");
            this.fileStr = fileArr.slice(-1)[0];

            this.changeCallBack(e.target.value);
        },
        submit() {
            this.$refs.iform.submit();
        }
    },
    mounted() {
        this.$refs.upload.addEventListener("load", () => {
            this.parseIframeResponse();
        });
    }
};
</script>
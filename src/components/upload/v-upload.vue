<template>
  <div class="v-upload" :id="name">
    <form
      ref="iform"
      class="iform"
      method="POST"
      :action="action"
      :target="targetFile"
      enctype="multipart/form-data"
    >
      <input
        type="hidden"
        v-for="(value, name) in data"
        :name="name"
        :key="name"
        :value="value"
      />
      <!-- 图片上传 -->
      <upload-image
        v-if="type == 'picture'"
        ref="image"
        :disabled="disabled"
        :upload-type="uploadType"
        @clickFile="clickFile"
        :data-image="imageBase64"
        :showAddText="showAddText"
      ></upload-image>
      <!-- 文件上传 -->
      <div class="v-upload__row" v-else-if="type == 'file'">
        <label
          class="v-upload__row__file"
          @click="clickFile"
          :id="name | id('file')"
          :class="{
            'has-file': fileName,
            'v-upload__row__file-disabled': disabled
          }"
          >{{ fileName || _("Click Browse to select a file") }}</label
        >
        <v-button
          :disabled="disabled"
          class="v-upload__row__button"
          @click="clickFile"
          no-id
          :name="name | id('upload')"
        >
          <span>{{ _("Browse") }}</span>
        </v-button>
      </div>

      <!-- 其它上传类型 -->
      <div v-else>
        <v-button
          icon="v-icon-upload"
          :disabled="disabled"
          class="v-upload__button"
          no-id
          @click="clickFile"
          :name="name | id('upload')"
        >
          <span>{{ _("Select File") }}</span>
        </v-button>
      </div>
      <!-- 上传文件列表 -->
      <div
        v-if="fileName && showFileList"
        class="v-upload__tips"
        :class="{ 'v-upload__tips--center': type === 'picture' }"
      >
        <span>{{ fileName }}</span>
      </div>
      <!-- 上传文件 -->
      <input
        v-if="!disabled"
        ref="file"
        :name="name"
        type="file"
        class="v-upload__file"
        :accept="acceptType"
        @change="selectFile"
      />
    </form>
    <iframe
      class="v-upload__iframe"
      ref="upload"
      :name="targetFile"
      width="1px"
      height="1px"
    ></iframe>
  </div>
</template>

<script>
import ajax from "./ajax";
import UploadImage from "./upload-image.vue";
import NameMixin from "../name-mixins";
const UPLOAD_TYPE = {
  INIT: 0, //初始状态
  LOADING: 1, //上传中
  UPLOADED: 2 //上传成功
};
let rawFile = null;
export default {
  name: "v-upload",
  mixins: [NameMixin],
  components: {
    UploadImage
  },
  props: {
    //上传的url路径
    action: String,
    //支持上传的文件类型
    accept: String,
    crossDomain: {
      // 是否跨域
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //上传提交的数据
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    //上传类型  文本和图片
    type: {
      type: String,
      default: "text"
    },
    //显示上传的文件
    showFileList: {
      type: Boolean,
      default: false
    },
    noFileText: {
      type: String,
      default: ""
    },
    //上传成功
    onSuccess: {
      type: Function,
      default() {}
    },
    //切换文件
    onChange: {
      type: Function,
      default() {}
    },
    //上传前处理事件，返回false不会上传文件
    beforeUpload: {
      type: Function,
      default: function() {
        return true;
      }
    },
    showAddText: {
      type: Boolean,
      default: true
    },
    autoClear: {
      //是否提交后自动清除文件
      type: Boolean,
      default: true
    },
    // isAjax
    isAjax: {
      type: Boolean,
      default: false
    },
    // Ajax
    onRemove: {
      type: Function,
      default: () => {}
    },
    // Ajax
    onProgress: {
      type: Function,
      default: () => {}
    },
    // Ajax
    onError: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    //图片默认类型
    acceptType() {
      if (this.accept) return this.accept;
      if (this.type === "picture") {
        return "image/*";
      }
      return "";
    },
    fileName() {
      return this.fileStr || this.noFileText;
    }
  },
  data() {
    return {
      fileStr: "",
      imageBase64: "",
      uploadType: UPLOAD_TYPE.INIT
    };
  },

  created() {
    this.targetFile = "upload?" + Math.random();
  },
  mounted() {
    if (!this.crossDomain) {
      this.$refs.upload.addEventListener("load", () => {
        this.parseIframeResponse();
      });
    } else {
      // 跨域解决方案  使用postMessage
      // 后台跳转到 /corss-domain-res.html 并带参数

      window.addEventListener("message", this.parseIframeCrossReponse, false);
    }
  },
  methods: {
    //处理上传返回
    parseIframeResponse() {
      if (!this.$refs.upload.contentWindow) {
        return;
      }
      const elm = this.$refs.upload.contentWindow.document.body;
      const response = elm.innerText || elm.textContent;
      if (!response) {
        return false;
      }

      try {
        const jsonStr = JSON.parse(response);
        this.uploadType = UPLOAD_TYPE.UPLOADED;
        this.onSuccess(jsonStr);
        if (this.autoClear) {
          this.clearFile();
        }
      } catch (err) {
        console.log(err);
        this.uploadType = UPLOAD_TYPE.UPLOADED;
        this.onSuccess(response);
      }
    },

    parseIframeCrossReponse(event) {
      let data = event.data;
      // 跨域解决方案
      this.uploadType = UPLOAD_TYPE.UPLOADED;
      this.onSuccess(data);
    },

    //获取图片的base64位，缩略图使用
    getImageBase64(e) {
      let file = e.target.files[0],
        reader;

      this.imageBase64 = "";
      if (typeof FileReader !== "function") {
        return;
      }
      reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
      }
      reader.onload = () => {
        if (reader.readyState == 2) {
          this.imageBase64 = reader.result;
        }
      };
    },
    clickFile() {
      if (this.disabled) return;
      this.$refs.file.click();
    },
    selectFile(e) {
      let elm = e.target;
      let fileArr = elm.value.split("\\");
      this.fileStr = fileArr.slice(-1)[0];
      let files = elm.files;
      if (!files) return;
      // 获取原始文件
      rawFile = Array.prototype.slice.call(elm.files)[0];
      if (this.type === "picture") {
        this.uploadType = UPLOAD_TYPE.INIT;
        this.getImageBase64(e);
      }
      this.onChange(this.fileStr);
    },
    // ajax post
    post(rawFile) {
      const options = {
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: rawFile,
        data: this.data,
        filename: this.fileName,
        action: this.action,
        // onProgress 表示监听上传文件的进度事件
        onProgress: e => {
          this.onProgress(e, rawFile);
        },
        // onSuccess 表示监听上传文件的成功事件
        onSuccess: res => {
          this.onSuccess(res, rawFile);
        },
        // onSuccess 表示监听上传文件的失败事件
        onError: err => {
          console.error(err);
          this.onError(err, rawFile);
        }
      };
      const req = ajax(options);
      if (req && req.then) {
        req.then(options.onSuccess, options.onError);
      }
    },
    upload(rawFile) {
      this.$refs.file.value = null;
      // beforeUpload 上传文件前的钩子函数
      if (!this.beforeUpload) {
        return this.post(rawFile);
      }

      const before = this.beforeUpload(rawFile);
      if (before && before.then) {
        before.then(
          processedFile => {
            const fileType = Object.prototype.toString.call(processedFile);

            if (fileType === "[object File]" || fileType === "[object Blob]") {
              if (fileType === "[object Blob]") {
                processedFile = new File([processedFile], rawFile.name, {
                  type: rawFile.type
                });
              }
              for (const p in rawFile) {
                if (rawFile.hasOwnProperty(p)) {
                  processedFile[p] = rawFile[p];
                }
              }
              this.post(processedFile);
            } else {
              this.post(rawFile);
            }
          },
          () => {
            this.onRemove(null, rawFile);
          }
        );
      } else if (before !== false) {
        this.post(rawFile);
      } else {
        // 移除文件
        this.onRemove(null, rawFile);
      }
    },
    async submit() {
      let result = await this.beforeUpload(this.fileStr);
      if (!result) return;
      if (this.isAjax) {
        this.upload(rawFile);
      } else {
        this.$refs.iform.submit();
      }
      this.uploadType = UPLOAD_TYPE.LOADING;
      //上传后清空文件
      if (this.autoClear) {
        this.$refs.file.value = "";
      }
    },
    clearFile() {
      this.fileStr = "";
      this.$refs.file.value = "";
    }
  },
  beforeDestroy() {
    window.removeEventListener("message", this.parseIframeCrossReponse, false);
    rawFile = null;
  }
};
</script>

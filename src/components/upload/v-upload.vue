<template>
  <div class="v-upload">
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
        :key="value"
        :value="value"
      />
      <!-- 文件上传 -->
      <div v-if="type !== 'picture'">
        <v-button
          icon="v-icon-upload"
          :disabled="disabled"
          class="v-upload__button"
          @click="clickFile"
        >
          <span>选择文件</span>
        </v-button>
      </div>
      <!-- 图片上传 -->
      <upload-image
        v-else
        ref="image"
        :disabled="disabled"
        :upload-type="uploadType"
        @clickFile="clickFile"
        :data-image="imageBase64"
      ></upload-image>
      <!-- 上传文件列表 -->
      <div
        v-if="fileStr && showFileList"
        class="v-upload__tips"
        :class="{ 'v-upload__tips--center': type === 'picture' }"
      >
        <span>{{ fileStr }}</span>
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
import UploadImage from "./upload-image.vue";
const UPLOAD_TYPE = {
  INIT: 0, //初始状态
  LOADING: 1, //上传中
  UPLOADED: 2 //上传成功
};
export default {
  name: "v-upload",
  components: {
    UploadImage
  },
  props: {
    //上传的url路径
    action: String,
    name: {
      type: String,
      default: "file"
    },
    //支持上传的文件类型
    accept: String,
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
    this.$refs.upload.addEventListener("load", () => {
      this.parseIframeResponse();
    });
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
      } catch (err) {
        console.log(err);
      }
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
      if (this.type === "picture") {
        this.uploadType = UPLOAD_TYPE.INIT;
        this.getImageBase64(e);
      }
      this.onChange(this.fileStr);
    },
    submit() {
      let result = this.beforeUpload(this.fileStr);
      if (!result) return;
      this.$refs.iform.submit();
      this.uploadType = UPLOAD_TYPE.LOADING;
      //上传后清空文件
      this.$refs.file.value = "";
    }
  }
};
</script>

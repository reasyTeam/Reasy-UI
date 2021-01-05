<template>
  <r-page>
    <r-h tag="h1" title="Upload 文件上传" desc="">
      <r-h tag="h2" title="普通上传" desc="">
        <div class="upload-group">
          <v-upload
            action="/cgi-bin/upload"
            :data="uploadData"
            show-file-list
            ref="upload"
            :on-success="uploadCallBack"
            :before-upload="beforeUpload"
            :on-change="changeCallBack"
          ></v-upload>
        </div>
      </r-h>
      <r-h tag="h2" title="图片上传" desc="">
        <div class="upload-group">
          <v-upload
            action="/cgi-bin/upload"
            :data="uploadData"
            type="picture"
            ref="upload1"
            :on-success="uploadImageCallBack"
            show-file-list
            :on-change="changeImageCallBack"
          ></v-upload>
        </div>
      </r-h>
      <r-h tag="h2" title="禁用" desc="">
        <div class="upload-group">
          <v-upload action="/cgi-bin/upload" disabled></v-upload>
        </div>
        <div class="upload-group">
          <v-upload
            action="/cgi-bin/upload"
            :data="uploadData"
            disabled
            type="picture"
          ></v-upload>
        </div>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      uploadData: {
        ssid: "123",
        pwd: "456"
      }
    };
  },
  methods: {
    uploadCallBack(data) {
      if (data.status === "success") {
        console.log("上传成功");
      }
    },
    changeCallBack(file) {
      if (file) {
        this.$refs.upload.submit();
      } else {
        return false;
      }
    },
    beforeUpload() {
      console.log("beforeUpload");
      return true;
    },
    uploadImageCallBack(data) {
      if (data.status === "success") {
        console.log("图片上传成功");
      }
    },
    changeImageCallBack(file) {
      if (file) {
        this.$refs.upload1.submit();
      } else {
        return false;
      }
    }
  }
};
</script>
<style lang="scss">
.upload-group {
  margin-right: 20px;
  margin-bottom: 20px;
  vertical-align: top;
}
</style>

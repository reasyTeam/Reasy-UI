<template>
  <transition name="fade">
    <v-elem class="dialog" v-if="isShowMessageBox">
      <div class="overlay" @click="isShowMessageBox = false;"></div>
      <div class="dialog-container message-content">
        <div class="dialog-content">
          <div class="dialog-title">
            <span>{{title}}</span>
            <span class="dialog-close v-icon-close" @click="isShowMessageBox = false;"></span>
          </div>
          <div class="content">
            <div v-if="parseHtml" v-html="content"></div>
            <div v-else>{{content}}</div>
          </div>
          <div class="btn-group">
            <button v-show="hasCancel" class="btn" @click="cancel()">{{cancelText}}</button> &nbsp;&nbsp;
            <button class="btn btn-primary" @click="confirm()">{{okText}}</button>
          </div>
        </div>
      </div>
    </v-elem>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      isShowMessageBox: false,
      parseHtml: false,
      okText: _("OK"),
      cancelText: _("Cancel"),
      content: "",
      resolve: "",
      reject: "",
      hasCancel: true,
      promise: "" // 保存promise对象
    };
  },
  methods: {
    confirm() {
      this.isShowMessageBox = false;
      this.resolve(true);
    },
    cancel() {
      this.isShowMessageBox = false;
      if (this.hasCancel) {
        //todo: 处理没有reject的情况
        this.reject();
      }
    },
    showMsgBox() {
      this.isShowMessageBox = true;
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      // 返回promise对象
      return this.promise;
    }
  }
};
</script>
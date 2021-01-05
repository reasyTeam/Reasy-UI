<template>
  <r-page>
    <section class="notify-page">
      <r-h title="基础用法" tag="h2">
        <section class="notify-btn-wrapper">
          <v-button class="notify-btn" @click="handleAutoHideClick"
            >自动关闭</v-button
          >
          <v-button
            class="notify-btn"
            type="primary"
            @click="handleKeepShowClick"
            >一直显示</v-button
          >
        </section>
      </r-h>

      <r-h title="自定义弹出位置" tag="h2">
        <section class="notify-btn-wrapper">
          <v-button class="notify-btn" @click="handleTopRightClick"
            >右上角</v-button
          >
          <v-button class="notify-btn" @click="handleBottomRightClick"
            >右下角</v-button
          >
          <v-button class="notify-btn" @click="handleTopLeftClick"
            >左上角</v-button
          >
          <v-button class="notify-btn" @click="handleBottomLeftClick"
            >左下角</v-button
          >
        </section>
      </r-h>

      <r-h title="自定义按钮" tag="h2">
        <section class="notify-btn-wrapper">
          <v-button class="notify-btn" @click="handleShowCloseBtnClick"
            >显示关闭按钮</v-button
          >
          <v-button class="notify-btn" @click="handleshowConfirmBtnClick"
            >显示确定按钮</v-button
          >
          <v-button class="notify-btn" @click="handleshowCloseConfirmBtnClick"
            >显示确定关闭按钮</v-button
          >
          <v-button class="notify-btn" @click="handleHideAllBtnClick"
            >不显示按钮</v-button
          >
          <v-button class="notify-btn" @click="handleCustomConfirmTextBtnClick"
            >自定义确定文本</v-button
          >
        </section>
      </r-h>
    </section>
  </r-page>
</template>
<script>
export default {
  methods: {
    handleAutoHideClick() {
      this.$notify({
        title: "自动隐藏标题",
        content: "this is content this is content this is content",
        showConfirm: true,
        // duration: 0,
        position: "top-right"
      }).then(res => {
        console.log(`auto-hide: `);
        console.log(res);
        console.log(`\n`);
      });
    },
    handleKeepShowClick() {
      this.$notify({
        title: "一直显示标题",
        content: "this is content this is content this is content",
        showConfirm: true,
        duration: 0,
        position: "top-right"
      }).then(res => {
        console.log(`keep-show: `);
        console.log(res);
        console.log(`\n`);
      });
    },

    handleTopRightClick() {
      this.$notify({
        title: "右上角标题",
        content: "this is content this is content this is content",
        showConfirm: true,
        // duration: 0,
        position: "top-right"
      }).then(res => {
        console.log(`top-right: `);
        console.log(res);
        console.log(`\n`);
      });
    },
    handleBottomRightClick() {
      this.$notify({
        title: "右下角标题",
        content: "this is content this is content this is content",
        showConfirm: true,
        // duration: 0,
        position: "bottom-right"
      }).then(res => {
        console.log(`bottom-right: `);
        console.log(res);
        console.log(`\n`);
      });
    },
    handleTopLeftClick() {
      this.$notify({
        title: "左上角标题",
        content: "this is content this is content this is content",
        showConfirm: true,
        // duration: 0,
        position: "top-left"
      }).then(res => {
        console.log(`top-left: `);
        console.log(res);
        console.log(`\n`);
      });
    },
    handleBottomLeftClick() {
      this.$notify({
        title: "左下角标题",
        content: "this is content this is content this is content",
        showConfirm: true,
        // verticalOffset: 200,
        // duration: 0,
        position: "bottom-left"
      }).then(res => {
        console.log(`bottom-left: `);
        console.log(res);
        console.log(`\n`);
      });
    },

    handleShowCloseBtnClick() {
      this.$notify({
        title: "显示关闭按钮标题",
        content: "this is content this is content this is content",
        // showConfirm: true,
        // duration: 0,
        position: "top-right"
      }).then(res => {
        console.log(`show close button: `);
        console.log(res);
        console.log(`\n`);
      });
    },
    handleshowConfirmBtnClick() {
      this.$notify({
        title: "显示确认按钮标题",
        content: "this is content this is content this is content",
        showConfirm: true,
        showClose: false,
        // duration: 0,
        position: "top-right"
      }).then(res => {
        console.log(`show confirm button: `);
        console.log(res);
        console.log(`\n`);
      });
    },
    handleshowCloseConfirmBtnClick() {
      this.$notify({
        title: "显示确认关闭按钮标题",
        content: "this is content this is content this is content",
        showConfirm: true,
        // duration: 0,
        position: "top-right"
      }).then(res => {
        console.log(`show confirm&close button: `);
        console.log(res);
        console.log(`\n`);
      });
    },
    handleHideAllBtnClick() {
      this.$notify({
        title: "不显示按钮标题",
        content: "this is content this is content this is content",
        showConfirm: false,
        showClose: false,
        // duration: 0,
        position: "top-right"
      }).then(res => {
        console.log(`hide all button: `);
        console.log(res);
        console.log(`\n`);
      });
    },
    handleCustomConfirmTextBtnClick() {
      this.$notify({
        title: "自定义确认按钮文本标题",
        content: "this is content this is content this is content",
        showConfirm: true,
        showClose: false,
        confirmText: "康什么，快点我",
        // duration: 0,
        position: "top-right"
      }).then(res => {
        console.log(`custom confirm text button: `);
        console.log(res);
        console.log(`\n`);
      });
    }
  }
};
</script>
<style lang="scss">
.notify-page {
  .notify-btn-wrapper {
    padding: 32px 0;
    text-align: center;
    border: 1px solid $border-color;
    border-radius: 2px;
    .notify-btn {
      margin-right: 20px;
    }
  }
}
</style>

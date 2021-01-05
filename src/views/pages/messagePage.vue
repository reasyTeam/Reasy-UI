<template>
  <r-page>
    <v-button class="msg-btn" @click="handleInfoClick"
      >打开info消息提醒</v-button
    >
    <v-button class="msg-btn" @click="handleSuccessClick"
      >打开success消息提醒</v-button
    >
    <v-button class="msg-btn" @click="handleErrorClick"
      >打开error消息提醒</v-button
    >
    <v-button class="msg-btn" @click="handleWarnClick"
      >打开warn消息提醒</v-button
    >
    <v-button class="msg-btn" @click="handleCustomClick"
      >打开自定义消息提醒</v-button
    >
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleInfoClick() {
      this.$message(`this is an info message`);
    },
    handleSuccessClick() {
      this.$message.success(
        `this is an success message, datetime:  ${new Date()}`
      );
    },
    handleErrorClick() {
      this.$message.error(`this is an error message, datetime:  ${new Date()}`);
    },
    handleWarnClick() {
      this.$message.warn(`this is an warn message, datetime:  ${new Date()}`);
    },
    handleCustomClick() {
      this.$message({
        type: "success",
        // icon: 'v-icon-ok-line msg-custom-icon',
        showIcon: false,
        dangerouslyUseHTMLString: true,
        content: `<div class="custom-message">this is an success message, datetime:  ${new Date()}</div>`
      });
    }
  }
};
</script>
<style lang="scss">
.msg-btn {
  display: block;
  margin-top: 10px;
}
.v-icon-ok-line {
  &.msg-custom-icon {
    color: $success-color;
  }
}
.custom-message {
  line-height: 40px;
  font-size: 20px;
  font-weight: 600;
  color: darkcyan;
}
</style>

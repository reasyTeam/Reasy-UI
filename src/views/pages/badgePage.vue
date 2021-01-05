<template>
  <r-page>
    <r-h
      tag="h1"
      title="Badge 徽标数"
      desc="主要用于通知未读数的角标，提醒用户点击。"
    ></r-h>
    <r-h tag="h2" title="基础" desc="简单的使用。">
      <v-badge text="3" status="error" position="rt" class="margin">
        <div class="gray-box"></div>
      </v-badge>
      <v-badge text="2" status="error"> </v-badge>
    </r-h>
    <r-h tag="h2" title="多位数字" desc="超过一位数字时。">
      <v-badge text="99+" status="error" position="rt" class="margin">
        <div class="gray-box"></div>
      </v-badge>
      <v-badge text="24" status="error" class="margin"> </v-badge>
      <v-badge text="99+" status="error"> </v-badge>
    </r-h>
    <r-h tag="h2" title="小红点" desc="没有具体数字的提示。">
      <v-badge type="dot" status="error" position="rt" class="margin">
        <div>小红点</div>
      </v-badge>
      <v-badge type="dot" status="error" position="rt" class="margin">
        <i class="v-icon-remind-line"></i>
      </v-badge>
    </r-h>
    <r-h tag="h2" title="状态点" desc="表示状态的小圆点。">
      <v-badge type="dot" status="success" class="margin">
        <label class="dot-text">正常</label>
      </v-badge>
      <v-badge type="dot" status="warn" class="margin">
        <label class="dot-text">异常</label>
      </v-badge>
      <v-badge type="dot" status="error" class="margin">
        <label class="dot-text">失败</label>
      </v-badge>
      <v-badge type="dot">
        <label class="dot-text">默认</label>
      </v-badge>
    </r-h>
  </r-page>
</template>

<style lang="scss">
.gray-box {
  width: 40px;
  height: 40px;
  background-color: #ebebeb;
}

.margin {
  margin-right: 40px;
}

.dot-text {
  padding-left: 6px;
  vertical-align: middle;
}
</style>

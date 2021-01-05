<template>
  <r-page>
    <r-h
      tag="h1"
      title="Icon 图标"
      desc="图标是 UI 设计中必不可少的组成部分，既定含义通常为将某个概念转换成清晰易读的图形，从而降低用户的理解成本，提升界面的美观度"
    ></r-h>
    <r-h
      tag="h1"
      title="常用图标"
      desc="以下为组件开发过程中可能会用到的图标。"
    >
      所有的图标加上<b>v-icon-</b>前缀使用。例如：<i class="v-icon-ok-line"></i
      ><b>v-icon-ok-line</b>
    </r-h>
    <ul class="list-icons">
      <li v-for="icon in icons" :key="icon" class="list-item">
        <i :class="'v-icon-' + icon"></i>
        <div class="item-text">{{ icon }}</div>
      </li>
    </ul>
  </r-page>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        "minus-square",
        "add-square",
        "edit",
        "image",
        "help-plane",
        "close-plane",
        "ok-plane",
        "remind-plane",
        "help-line",
        "close-line",
        "ok-line",
        "remind-line",
        "ok",
        "close",
        "delete",
        "up",
        "add",
        "search",
        "right",
        "down",
        "left",
        "double-right",
        "double-left",
        "time",
        "calendar",
        "upload",
        "eye-on",
        "eye-off",
        "disable"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.list-icons {
  display: flex;
  flex-wrap: wrap;
}

.list-item {
  width: 12.5%;
  text-align: center;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 14px;
  color: $info-color;

  i {
    margin-bottom: 6px;
    font-size: 16px;
  }

  &:hover {
    background-color: #fff5e4;
    color: #ff801f;
  }
}

.item-text {
  width: 100%;
  line-height: 20px;
}
</style>

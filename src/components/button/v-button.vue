<template>
  <button
    type="button"
    ref="btn"
    @click="clickBtn"
    class="v-button"
    :class="[
      sizeCss,
      typeCss,
      {
        [typeCss + '--disabled']: disabled !== false,
        'v-button--inner': !$slots.default && type === 'text'
      }
    ]"
  >
    <template v-if="!isLoading">
      <!-- 按钮前缀图标 -->
      <span
        class="v-button__icon v-button__item"
        v-if="icon"
        :class="icon"
      ></span>
      <!-- 按钮内容 -->
      <span class="v-button__item" v-if="$slots.default">
        <slot></slot>
      </span>
      <!-- 按钮后缀图标 -->
      <span
        class="v-button__icon v-button__item"
        v-if="suffixIcon"
        :class="suffixIcon"
      ></span>
    </template>
    <!-- 加载中 -->
    <template v-else>
      <span class="v-button--loading v-button__icon v-icon-loading"></span>
    </template>
  </button>
</template>
<script>
export default {
  name: "v-button",
  props: {
    type: {
      type: String,
      default: "info"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    //是否在加载中
    isLoading: {
      type: Boolean,
      default: false
    },
    //前缀图标
    icon: String,
    //后缀图标
    suffixIcon: String,
    size: {
      type: String,
      default: "M"
    }
  },
  computed: {
    sizeCss() {
      let cssObj = {
        M: "v-button--medium",
        S: "v-button--small",
        L: "v-button--large"
      };
      return cssObj[this.size] || cssObj.M;
    },
    //按钮类型样式
    typeCss() {
      let cssObj = {
        primary: "v-button--primary",
        //secondary: "v-button--secondary",
        info: "v-button--info",
        danger: "v-button--danger",
        text: "v-button--text"
      };
      return cssObj[this.type] || cssObj.info;
    }
  },
  data() {
    return {};
  },
  methods: {
    clickBtn() {
      if (this.isLoading) return;
      if (this.disabled) return;
      this.$emit("click");
      this.$refs.btn.blur();
    }
  }
};
</script>

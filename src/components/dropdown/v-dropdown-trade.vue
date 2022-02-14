<template>
  <div class="v-dropdown">
    <!-- v-button 不满足使用 -->
    <div
      @click="proxyDisabledHandler(disabled, handleLabelClick)"
      @mouseenter="proxyDisabledHandler(disabled, handleLabelMouseenter)"
      @mouseleave="proxyDisabledHandler(disabled, handleLabelMouseleave)"
    >
      <slot name="head"></slot>
    </div>
    <create-to-body
      :show="dropdownShow"
      v-clickoutside="hide"
      :class="[panelClass]"
      width="180px"
    >
      <div
        class="v-dropdown__menu"
        @mouseenter="handleDropdownMouseenter"
        @mouseleave="handleDropdownMouseleave"
      >
        <v-x-scroll
          ref="scroll"
          :count="displayOptionsNumber"
          :is-block="true"
          @mounted="setPosition"
        >
          <slot name="content"></slot>
        </v-x-scroll>
      </div>
    </create-to-body>
  </div>
</template>

<script>
import CreateToBody from "../create-to-body";

export default {
  name: "v-dropdown",
  components: {
    CreateToBody
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: "click"
    },
    displayOptionsNumber: {
      type: Number,
      default: 4
    },
    panelClass: String
  },
  data() {
    return {
      isLabelEnter: false,
      dropdownShow: false,
      isDropdownEnter: false,
      timer: null
    };
  },
  methods: {
    handleLabelClick() {
      if (this.trigger === "click") {
        this.menuVisible(!this.dropdownShow);
      }
    },
    menuVisible(isShow) {
      if (this.dropdownShow !== isShow) {
        this.dropdownShow = isShow;
        this.$emit("visible-change", isShow);
      }
    },
    handleLabelMouseenter() {
      if (this.trigger === "hover") {
        this.isLabelEnter = true;
        this.show();
      }
    },
    handleLabelMouseleave() {
      if (this.trigger === "hover") {
        this.isLabelEnter = false;
        this.hideAfterSeconds();
      }
    },
    handleDropdownMouseenter() {
      if (this.trigger === "hover") {
        this.clearTimer();
        this.isDropdownEnter = true;
      }
    },
    handleDropdownMouseleave() {
      if (this.trigger === "hover") {
        this.isDropdownEnter = false;
        this.hideAfterSeconds();
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    show() {
      this.menuVisible(true);
    },
    hide() {
      this.menuVisible(false);
    },
    hideAfterSeconds() {
      if (this.timer) {
        this.clearTimer();
      }

      this.timer = setTimeout(() => {
        this.clearTimer();

        if (this.trigger === "hover") {
          if (!this.isLabelEnter && !this.isDropdownEnter) {
            this.hide();
          }
        } else {
          this.hide();
        }
      }, 200);
    },
    /**
     * disabled拦截处理函数
     */
    proxyDisabledHandler(disabled, fn = () => {}, ...args) {
      return !disabled && fn(...args);
    },
    setPosition() {
      this.$dispatch("create-to-body", "update:position");
    }
  }
};
</script>

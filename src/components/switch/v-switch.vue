<template>
  <div class="v-switch" :class="[sizeCss, { 'v-switch--disabled': disabled }]">
    <span class="v-switch__item" @click="clickSwitch">
      <span
        :name="name"
        class="v-switch__icon"
        :class="{
          'v-switch__icon--active': value === onValue,
          'v-switch__icon--disabled': disabled
        }"
      ></span>
      <span v-if="onText && offText" class="v-switch__label">
        {{ value === onValue ? onText : offText }}
      </span>
    </span>
  </div>
</template>
<script>
export default {
  name: "v-switch",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: [String, Number, Boolean],
    name: String,
    disabled: {
      type: Boolean,
      default: false
    },
    //启用值
    onValue: {
      type: [String, Number, Boolean],
      default: true
    },
    //关闭值
    offValue: {
      type: [String, Number, Boolean],
      default: false
    },
    //启用文字
    onText: String,
    //关闭时文字
    offText: String,
    //切换前事件，返回false时不会改变开关状态
    beforeChange: {
      type: Function,
      default() {
        return true;
      }
    },
    size: {
      type: String,
      default: "M"
    }
  },
  computed: {
    sizeCss() {
      let cssObj = {
        M: "v-switch--medium",
        S: "v-switch--small",
        L: "v-switch--large"
      };
      return cssObj[this.size] || cssObj.M;
    }
  },
  methods: {
    clickSwitch() {
      if (this.disabled) return;
      let changedValue =
        this.value === this.onValue ? this.offValue : this.onValue;
      let result = this.beforeChange(changedValue);
      if (result === false) {
        return;
      }
      this.$emit("change", changedValue);
    }
  }
};
</script>

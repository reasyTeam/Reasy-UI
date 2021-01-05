<template>
  <div class="v-loading" v-show="visible">
    <div class="v-loading__mask" v-if="hasMask"></div>
    <div class="v-loading__wrapper">
      <div :class="['v-loading__dots', `v-loading__dots--${size}`]">
        <div class="v-loading__dot__item" :style="dotStyle"></div>
        <div class="v-loading__dot__item" :style="dotStyle"></div>
        <div class="v-loading__dot__item" :style="dotStyle"></div>
        <div class="v-loading__dot__item" :style="dotStyle"></div>
      </div>
      <div class="v-loading__text" v-if="text || $slots.default">
        <slot>{{ text }}</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-loading",
  props: {
    target: {
      type: HTMLElement
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    text: String,
    background: {
      type: String,
      default: "#ff8f00"
    },
    size: {
      type: String,
      default: "M",
      validator(val) {
        return ["S", "M", "L"].indexOf(val) > -1;
      }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dotStyle() {
      return {
        backgroundColor: this.background
      };
    }
  },
  mounted() {
    if (this.target && this.target !== this.$el.parentNode) {
      this.target.appendChild(this.$el);
    }
  }
};
</script>

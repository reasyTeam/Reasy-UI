<template>
  <div class="v-popover">
    <v-popups
      v-model="value"
      :custom-style="{ width: _width }"
      :trigger="trigger"
      :show-arrow="showArrow"
      :position="position"
      :transition="transition"
      :enterable="enterable"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :between-space="betweenSpace"
      :auto-adjust-position="autoAdjustPosition"
      @visible-change="visibleChange"
    >
      <div class="v-popover__main">
        <h5 class="v-popover__title">{{ title }}</h5>
        <div class="v-popover__content" :id="name | id('content')">
          <slot></slot>
        </div>
      </div>

      <template #reference>
        <slot name="reference"></slot>
      </template>
    </v-popups>
  </div>
</template>

<script>
import NameMixin from "../name-mixins";

export default {
  mixins: [NameMixin],
  name: "v-popover",
  props: {
    value: Boolean,
    trigger: {
      type: String,
      default: "click"
    },
    width: {
      type: [Number, String],
      default: 150
    },
    title: String,
    position: {
      type: String,
      default: "top-center"
    },
    transition: String,
    showArrow: {
      type: Boolean,
      default: true
    },
    enterable: {
      type: Boolean,
      default: true
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    betweenSpace: Number,
    autoAdjustPosition: Boolean
  },
  computed: {
    _width() {
      return typeof this.width === "number" ? `${this.width}px` : this.width;
    }
  },
  methods: {
    visibleChange(isShow) {
      this.$emit("visible-change", isShow);
    }
  }
};
</script>

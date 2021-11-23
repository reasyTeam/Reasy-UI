<template>
  <div class="v-tooltip">
    <v-popups
      ref="popups"
      v-model="value"
      :effect="effect"
      :custom-style="{
        maxWidth: `${maxWidth}px`,
        whiteSpace,
        wordBreak
      }"
      :trigger="trigger"
      :show-arrow="showArrow"
      :arrow-offset="arrowOffset"
      :position="position"
      :transition="transition"
      :enterable="enterable"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :between-space="betweenSpace"
      :auto-adjust-position="autoAdjustPosition"
    >
      <div class="v-tooltip__main">
        <slot name="content">
          <div class="v-tooltip__content">{{ content }}</div>
        </slot>
      </div>

      <template #reference>
        <slot></slot>
      </template>
    </v-popups>
  </div>
</template>

<script>
export default {
  name: "v-tooltip",
  props: {
    effect: {
      type: String,
      default: "dark"
    },
    value: Boolean,
    trigger: {
      type: String,
      default: "hover"
    },
    maxWidth: Number,
    whiteSpace: {
      type: String,
      default: "normal"
    },
    wordBreak: {
      type: String,
      default: "normal"
    },
    content: String,
    position: {
      type: String,
      default: "top-center"
    },
    transition: String,
    showArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: Number,
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
    autoAdjustPosition: Boolean,
    showOnlyEllipsis: Boolean
  },
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      // 等待parentElm被最终赋值后再执行
      this.handleShowOnlyEllipsis();
    });
  },
  methods: {
    updatePosition() {
      this.$nextTick(() => {
        this.$refs.popups.updatePosition();
        this.handleShowOnlyEllipsis();
      });
    },
    hide() {
      this.$refs.popups.hide();
    },
    handleShowOnlyEllipsis() {
      if (this.showOnlyEllipsis) {
        const popupsVm = this.$refs.popups,
          ctt = popupsVm.parentElm,
          trigger = ctt.scrollWidth > ctt.offsetWidth ? "hover" : "manual";

        this.trigger = trigger;
      }
    }
  },
  watch: {
    content(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.updatePosition();
      }
    }
  }
};
</script>

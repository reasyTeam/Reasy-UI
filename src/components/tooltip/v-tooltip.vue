<template>
  <div ref="tooltip" :class="['v-tooltip', tooltipClass]">
    <v-popups
      ref="popups"
      v-model="value"
      :effect="effect"
      :class="tooltipClass"
      :custom-style="{
        maxWidth: `${maxWidth}px`,
        whiteSpace,
        wordBreak
      }"
      :trigger="popupsTrigger"
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
        <div v-if="!$slots.content" class="v-tooltip__content">
          {{ content }}
        </div>
        <slot name="content"> </slot>
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
    return {
      tooltipClass: "",
      popupsTrigger: this.trigger
    };
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
        const { popups: popupsVm } = this.$refs;
        let ctt; // 当前tooltip所依赖的标签

        if (this.$slots.default) {
          // 组件方式
          this.tooltipClass = "v-tooltip--block";
          ctt = this.$slots.default[0].elm;
        } else {
          // 指令方式
          ctt = popupsVm.parentElm;
        }

        // 使用nextTick兼容两种使用方式
        this.$nextTick(() => {
          this.popupsTrigger =
            ctt.scrollWidth > ctt.offsetWidth ? "hover" : "manual";
        });
      }
    }
  },
  watch: {
    content(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.updatePosition();
      }
    },
    trigger(val) {
      this.popupsTrigger = val;
    }
  }
};
</script>

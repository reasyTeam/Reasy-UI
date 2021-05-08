<template>
  <div class="v-tooltip">
    <v-popups
      ref="popups"
      v-model="value"
      :effect="effect"
      :custom-style="{ maxWidth: `${maxWidth}px` }"
      :trigger="trigger"
      :show-arrow="showArrow"
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
  data() {
    return {};
  },
  methods: {
    updatePosition() {
      this.$nextTick(() => {
        this.$refs.popups.updatePosition();
      });
    },
    hide() {
      this.$refs.popups.hide();
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

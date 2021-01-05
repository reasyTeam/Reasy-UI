<template>
  <div class="v-tooltip">
    <v-popups
      ref="popups"
      :effect="effect"
      :custom-style="{ maxWidth: `${maxWidth}px` }"
      :trigger="trigger"
      :show-arrow="showArrow"
      :position="position"
      :transition="transition"
      :enterable="enterable"
      :open-delay="openDelay"
      :close-delay="closeDelay"
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
    }
  },
  data() {
    return {
      trigger: "hover"
    };
  },
  methods: {
    updatePosition() {
      this.$nextTick(() => {
        this.$refs.popups.updatePosition();
      });
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

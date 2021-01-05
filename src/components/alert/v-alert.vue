<template>
  <transition name="v-alert-fade">
    <div v-show="visible" class="v-alert" :class="[`v-alert--${type}`]">
      <!-- main content -->
      <div
        class="v-alert__main"
        :class="[
          isBigPadding,
          {
            'v-alert__main--center': alignCenter,
            'v-alert__main--hide-icon': !showIcon
          }
        ]"
      >
        <div class="v-alert__main-inner">
          <div v-if="title" class="v-alert__title" :class="[isBoldTitle]">
            {{ title }}
          </div>
          <div class="v-alert__description">
            <slot>{{ description }}</slot>
          </div>
        </div>
      </div>

      <!-- icon -->
      <div v-if="showIcon" class="v-alert__icon">
        <i class="v-alert__icon-inner" :class="[iconClass, isBigIcon]"></i>
      </div>

      <!-- button -->
      <div class="v-alert__button">
        <span
          v-if="showDetailsButton"
          class="v-alert__show-detail"
          @click="$emit('handle-details-click')"
          >查看详情</span
        >
        <span
          v-if="showClose"
          class="v-alert__close v-icon-close"
          @click="close"
        ></span>
      </div>
    </div>
  </transition>
</template>
<script>
// 类型--字体图标映射表
const typeToIcon = {
  success: "v-icon-ok-plane",
  warn: "v-icon-remind-plane",
  info: "v-icon-help-plane",
  error: "v-icon-close-plane"
};

export default {
  name: "v-alert",
  props: {
    type: {
      type: String,
      default: "info"
    },
    icon: String,
    showIcon: {
      type: Boolean,
      default: true
    },
    title: String,
    description: String,
    showClose: {
      type: Boolean,
      default: true
    },
    showDetailsButton: {
      type: Boolean,
      default: false
    },
    alignCenter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    iconClass() {
      return this.icon || typeToIcon[this.type];
    },
    isBigPadding() {
      return this.description || this.$slots.default
        ? "v-alert__main--big-padding"
        : "";
    },
    isBigIcon() {
      return this.description || this.$slots.default
        ? "v-alert__icon--big"
        : "";
    },
    isBoldTitle() {
      return this.description || this.$slots.default
        ? "v-alert__title--bold"
        : "";
    }
  },
  methods: {
    close() {
      this.visible = false;
      this.$emit("close");
    }
  }
};
</script>

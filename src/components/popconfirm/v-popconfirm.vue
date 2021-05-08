<template>
  <div class="v-popconfirm">
    <v-popups
      ref="popups"
      :custom-style="{ maxWidth }"
      :show-arrow="showArrow"
      :position="position"
      trigger="click"
      :transition="transition"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :click-outside-to-hide="clickOutsideToHide"
    >
      <div class="v-popconfirm__box">
        <slot>
          <div class="v-popconfirm__main">
            <div :class="['v-popconfirm__title', { 'has-icon': icon }]">
              {{ title }}
            </div>
            <i :class="['v-popconfirm__icon', icon]"></i>
          </div>
        </slot>
        <div v-if="showConfirm || showCancel" class="v-popconfirm__footer">
          <div class="v-popconfirm__button-group">
            <v-button
              v-if="showCancel"
              class="v-popconfirm__button-item"
              :type="cancelButtonType"
              size="S"
              @click="handleCancel"
              >{{ cancelButtonText }}</v-button
            >
            <v-button
              v-if="showConfirm"
              class="v-popconfirm__button-item"
              :type="confirmButtonType"
              size="S"
              @click="handleConfirm"
              >{{ confirmButtonText }}</v-button
            >
          </div>
        </div>
      </div>

      <template #reference>
        <slot name="reference"></slot>
      </template>
    </v-popups>
  </div>
</template>

<script>
export default {
  name: "v-popconfirm",
  data() {
    return {
      maxWidth: "400px"
    };
  },
  props: {
    title: String,
    icon: String,
    position: {
      type: String,
      default: "top-center"
    },
    transition: String,
    showArrow: {
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
    clickOutsideToHide: {
      type: Boolean,
      default: false
    },
    showConfirm: {
      type: Boolean,
      default: true
    },
    showCancel: {
      type: Boolean,
      default: true
    },
    confirmButtonText: {
      type: String,
      default: "确定"
    },
    cancelButtonText: {
      type: String,
      default: "取消"
    },
    confirmButtonType: {
      type: String,
      default: "primary"
    },
    cancelButtonType: {
      type: String,
      default: "info"
    }
  },
  methods: {
    handleConfirm() {
      this.hide();
      this.$emit("confirm");
    },
    handleCancel() {
      this.hide();
      this.$emit("cancel");
    },
    show() {
      this.$refs.popups.show();
    },
    hide() {
      this.$refs.popups.hide();
    }
  }
};
</script>
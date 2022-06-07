<template>
  <div class="v-popconfirm" :id="name">
    <v-popups
      ref="popups"
      :custom-style="{ minWidth, maxWidth }"
      :show-arrow="showArrow"
      :position="position"
      :popups-offset="popupsOffset"
      :arrow-offset="arrowOffset"
      :between-space="betweenSpace"
      :trigger="trigger"
      :transition="transition"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :click-outside-to-hide="clickOutsideToHide"
    >
      <div class="v-popconfirm__box">
        <div class="v-popconfirm__main" v-if="!$slots.default">
          <div :class="['v-popconfirm__title', { 'has-icon': icon }]">
            {{ title }}
          </div>
          <i :class="['v-popconfirm__icon', icon]"></i>
        </div>
        <slot> </slot>
        <div v-if="showConfirm || showCancel" class="v-popconfirm__footer">
          <div class="v-popconfirm__button-group">
            <v-button
              no-id
              :name="name | id('cancel')"
              v-if="showCancel"
              class="v-popconfirm__button-item"
              :type="cancelButtonType"
              size="S"
              @click="handleCancel"
              >{{ cancelButtonText }}</v-button
            >
            <v-button
              no-id
              :name="name | id('ok')"
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
import NameMixin from "../name-mixins";
export default {
  name: "v-popconfirm",
  mixins: [NameMixin],
  data() {
    return {
      minWidth: "200px"
    };
  },
  props: {
    title: String,
    icon: String,
    popupsOffset: Number,
    arrowOffset: Number,
    betweenSpace: Number,
    trigger: {
      type: String,
      default: "click"
    },
    position: {
      type: String,
      default: "top-center"
    },
    maxWidth: {
      type: String,
      default: "300px"
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
      default: _("OK")
    },
    cancelButtonText: {
      type: String,
      default: _("Cancel")
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

<template>
  <transition
    name="v-dialog-fade"
    @before-enter="() => setBodyOverflow('add')"
    @after-enter="() => setBodyOverflow('add')"
    @after-leave="animationAfterLeave"
  >
    <div ref="dialogBox" v-show="visible" class="v-dialog-box">
      <div class="v-dialog-wrapper" :style="dialogWrapperStyle">
        <transition name="v-dialog-fade">
          <div
            v-show="visible"
            v-if="modal"
            class="v-modal"
            @click="handleClickModal"
          ></div>
        </transition>

        <transition name="v-dialog-inner-fade" @after-enter="updateDialogStyle">
          <div
            ref="dialog"
            class="v-dialog"
            :style="dialogStyle"
            v-if="visible"
          >
            <div class="v-dialog__header" ref="header" v-if="showTitle">
              <slot name="title">
                <div
                  :class="[
                    `v-dialog__title`,
                    { 'v-dialog__close-space': showClose }
                  ]"
                >
                  <h5
                    :class="[
                      'v-dialog__title-inner',
                      { 'v-dialog__center': alignCenter }
                    ]"
                  >
                    {{ title }}
                  </h5>
                </div>
              </slot>
              <i
                v-if="showClose"
                class="v-dialog__close v-icon-close"
                @click="close"
              ></i>
            </div>
            <div class="v-dialog__main" ref="main">
              <slot></slot>
            </div>
            <div ref="footer" :class="['v-dialog__footer', footerClass]">
              <slot name="footer">
                <div
                  :class="[
                    'v-dialog__button-group',
                    { 'v-dialog__center': alignCenter }
                  ]"
                >
                  <v-button
                    v-if="showCancel"
                    class="v-dialog__button-item"
                    :type="cancelButtonType"
                    size="M"
                    @click="handleCancel"
                    >{{ cancelButtonText }}</v-button
                  >
                  <v-button
                    v-if="showConfirm"
                    class="v-dialog__button-item"
                    :type="confirmButtonType"
                    size="M"
                    @click="handleConfirm"
                    >{{ confirmButtonText }}</v-button
                  >
                </div>
              </slot>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "v-dialog",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    title: String,
    width: Number,
    modal: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
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
      default: ""
    },
    alignCenter: {
      type: Boolean,
      default: false
    },
    rendered: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogWrapperStyle: {}
    };
  },
  mounted() {},
  computed: {
    visible() {
      return this.value;
    },
    dialogStyle() {
      const { width } = this,
        styleObj = {};

      styleObj.width = width ? `${width}px` : "auto";

      return styleObj;
    },
    footerClass() {
      return !this.$slots.footer && !this.showConfirm && !this.showCancel
        ? "v-dialog__footer--none"
        : "";
    }
  },
  methods: {
    show() {
      // this.visible = true;
      this.$emit("input", true);
    },
    close() {
      // this.visible = false;
      this.$emit("input", false);
      if (typeof this.onClose === "function") {
        this.onClose();
      }
    },
    handleClickModal() {
      if (this.closeOnClickModal === false) {
        return;
      }
      this.close();
    },
    handleCancel() {
      this.$emit("cancel");
      this.close();
    },
    handleConfirm() {
      this.$emit("confirm");
    },

    updateDialogStyle() {
      const $dialog = this.$refs.dialog,
        { width, height } = $dialog.getBoundingClientRect();

      this.dialogWrapperStyle = {
        minWidth: `${width / 0.9}px`,
        minHeight: `${height / 0.9}px`
      };
    },
    animationAfterLeave() {
      this.setBodyOverflow("remove");
      this.$emit("after-close");
    },
    setBodyOverflow(excutor) {
      document.body.classList[excutor]("body--overflow-hidden");
    },
    insertDialogToBody() {
      const $dialogBox = this.$refs.dialogBox;

      document.body.appendChild($dialogBox);
    }
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.$emit("open");
      }
    }
  }
};
</script>

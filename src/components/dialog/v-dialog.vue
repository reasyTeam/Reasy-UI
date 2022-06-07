<template>
  <transition
    name="v-dialog-fade"
    @before-enter="() => setBodyOverflow('add')"
    @after-enter="() => setBodyOverflow('add')"
    @after-leave="animationAfterLeave"
  >
    <div :id="name" ref="dialogBox" v-show="visible" class="v-dialog-box">
      <transition name="v-dialog-fade">
        <div
          v-show="visible"
          v-if="modal"
          class="v-modal"
          :style="dialogWrapperStyle"
          @click="handleClickModal"
        ></div>
      </transition>
      <transition name="v-dialog-inner-fade" @after-enter="updateDialogStyle">
        <div
          class="v-dialog-wrapper"
          :style="dialogWrapperStyle"
          v-if="visible"
        >
          <div ref="dialog" class="v-dialog" :style="dialogStyle">
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
                :id="name | id('close')"
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
                    no-id
                    :name="name | id('cancel')"
                    v-if="showCancel"
                    class="v-dialog__button-item"
                    :type="cancelButtonType"
                    size="M"
                    @click="handleCancel"
                    >{{ cancelButtonText }}</v-button
                  >
                  <v-button
                    no-id
                    :name="name | id('ok')"
                    v-if="showConfirm"
                    class="v-dialog__button-item"
                    :type="confirmButtonType"
                    :is-loading="isLoading"
                    size="M"
                    @click="handleConfirm"
                    >{{ confirmButtonText }}</v-button
                  >
                </div>
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import NameMixin from "../name-mixins";
export default {
  name: "v-dialog",
  mixins: [NameMixin],
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
    isLoading: {
      type: Boolean,
      default: false
    },
    alignCenter: {
      type: Boolean,
      default: false
    },
    rendered: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    appendToId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dialogWrapperStyle: {}
    };
  },
  mounted() {
    if (this.appendToBody) {
      this.insertDialogToBody();
    }

    if (this.appendToId) {
      this.insertDialogToId();
    }
  },
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
        { width } = $dialog.getBoundingClientRect();
      this.dialogWrapperStyle = {
        minWidth: `${width}px`
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
    },
    insertDialogToId() {
      const $dialogBox = this.$refs.dialogBox;
      const dom = document.getElementById(this.appendToId);
      dom && dom.appendChild($dialogBox);
    }
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.$emit("open");
      }
    }
  },
  beforeDestroy() {
    const $dialogBox = this.$refs.dialogBox;
    if (this.appendToBody) {
      document.body.removeChild($dialogBox);
    }
    if (this.appendToId) {
      const dom = document.getElementById(this.appendToId);
      dom && dom.removeChild($dialogBox);
    }
  }
};
</script>

<template>
  <transition name="pop-fade">
    <div class="pop-wrapper" v-show="visible" @click="popClose">
      <div class="pop-box" :class="[option.css, option.isAlert ? 'alert':'']" :style="styleObject" @click.stop>
        <div class="pop-box-header" v-if="!option.isAlert">
          <div class="pop-box-title" v-if="option.title">
            <span>{{option.title}}</span>
          </div>
        </div>
        <button type="button" @click="hide" :class="['pop-box-headerbtn',$isMobile?'v-mobile':'']">
          <i class="pop-box-close icon-close"></i>
        </button>
        <div class="pop-box-content">
          <slot></slot>
        </div>
        <div class="pop-box-toolbar">
          <v-button v-for="item in buttons" :key="item.text" :class="['pop-btn', item.theme||'']" :callback="proxyHandle(item.callback)" :title="item.text"></v-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from "vue";
import PopupManager from "./util/manager";
let idSeed = 1;

export default {
  name: "v-pop",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      default: function() {
        return {
          css: "", //样式
          title: "",
          isAlert: false,
          buttons: [],
          closeOnClickModal: false,
          modalAppendToBody: true,
          closeDelay: 0,
          openDelay: 0
        };
      }
    }
  },
  model: {
    prop: "visible",
    event: "hide"
  },

  beforeMount() {
    this._popupId = "popup-" + idSeed++;
    PopupManager.register(this._popupId, this);
  },

  beforeDestroy() {
    PopupManager.deregister(this._popupId);
    PopupManager.closeModal(this._popupId);
  },

  data() {
    return {
      opened: false,
      rendered: false
    };
  },
  computed: {
    buttons() {
      return this.option.buttons || [];
    },
    styleObject() {
      if (this.option.isAlert) {
        return {};
      }
      return {
        padding: `${this.option.title ? 0.6 : 0.3}rem 0 ${(this.buttons.length *
          60 +
          30) /
          100}rem`
      };
    }
  },
  watch: {
    visible(val) {
      if (val) {
        if (this._opening) return;
        if (!this.rendered) {
          this.rendered = true;
          Vue.nextTick(() => {
            this.open();
          });
        } else {
          this.open();
        }
      } else {
        this.close();
      }
    }
  },

  methods: {
    open() {
      if (!this.rendered) {
        this.rendered = true;
      }

      const props = this.option;

      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }
      clearTimeout(this._openTimer);

      const openDelay = Number(props.openDelay);
      if (openDelay > 0) {
        this._openTimer = setTimeout(() => {
          this._openTimer = null;
          this.doOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },

    doOpen(props) {
      if (this.opened) return;

      this._opening = true;

      const dom = this.$el;
      const zIndex = props.zIndex;

      if (zIndex) {
        PopupManager.zIndex = zIndex;
      }

      if (this._closing) {
        PopupManager.closeModal(this._popupId);
        this._closing = false;
      }

      PopupManager.openModal(
        this._popupId,
        PopupManager.nextZIndex(),
        this.modalAppendToBody ? undefined : dom
      );

      if (getComputedStyle(dom).position === "static") {
        dom.style.position = "absolute";
      }

      dom.style.zIndex = PopupManager.nextZIndex();
      this.opened = true;

      // this.onOpen && this.onOpen();

      this.doAfterOpen();
    },

    doAfterOpen() {
      this._opening = false;
    },

    close() {
      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }
      clearTimeout(this._closeTimer);

      const closeDelay = Number(this.closeDelay);

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(() => {
          this._closeTimer = null;
          this.doClose();
        }, closeDelay);
      } else {
        this.doClose();
      }
    },

    doClose() {
      this._closing = true;

      this.onClose && this.onClose();

      this.opened = false;

      this.doAfterClose();
    },

    doAfterClose() {
      PopupManager.closeModal(this._popupId);
      this._closing = false;
    },

    proxyHandle(fun) {
      return function() {
        let outData = true;
        if (fun) {
          outData = fun() !== false;
        }
        outData && _this.hide();
      };
    },
    hide() {
      this.$emit("hide", false);
    },
    popClose() {
      if (this.option.closeOnClickModal) {
        this.hide();
      }
    }
  }
};
</script>
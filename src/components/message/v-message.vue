<template>
  <transition name="v-message-fade" @after-leave="handleAfterLeave">
    <div
      :class="['v-message', ...messageClass]"
      :style="positionStyle"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <template v-if="showIcon">
        <template v-if="icon">
          <i :class="['v-message__icon', icon]"></i>
        </template>
        <template v-else-if="type !== 'loading'">
          <i
            :class="['v-message__icon', `v-message__icon--${type}`, typeClass]"
          ></i>
        </template>
        <template v-else>
          <div class="v-message__loading">
            <v-loading size="S" :visible="true" no-id></v-loading>
          </div>
        </template>
      </template>
      <template v-if="!$slots.default">
        <p
          v-if="!dangerouslyUseHTMLString"
          :class="contentClass"
          :id="name | id('message-default')"
        >
          {{ content }}
        </p>
        <p
          v-else
          v-html="content"
          :class="contentClass"
          :id="name | id('message-custom')"
        ></p>
      </template>
      <template v-else>
        <slot></slot>
      </template>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: "v-icon-ok-plane",
  error: "v-icon-close-plane",
  info: "v-icon-help-plane",
  warn: "v-icon-remind-plane",
  loading: ""
};

export default {
  name: "v-message",
  data() {
    return {
      visible: false,
      verticalOffset: 20,
      alignCenter: false,
      type: "info",
      icon: "",
      showIcon: true,
      content: "",
      duration: 2000,
      timer: null,
      dangerouslyUseHTMLString: false,
      onClose: null,
      name: "",
      closeCallback: () => {}
    };
  },
  filters: {
    id(name, suffix) {
      if (name === "") {
        return "";
      }
      return `${name}-${suffix}`;
    }
  },
  computed: {
    messageClass() {
      return [
        this.type && !this.icon ? `el-message--${this.type}` : "",
        this.alignCenter ? `el-message--center` : ""
      ];
    },
    typeClass() {
      return this.type && !this.icon ? typeMap[this.type] : "";
    },
    contentClass() {
      return [
        "v-message__content",
        this.showIcon ? "" : "v-message__content--cover"
      ];
    },
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`
      };
    }
  },
  mounted() {
    this.startTimer();
  },
  beforeDestroy() {
    this.clearTimer();
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
          this.clearTimer();
        }, this.duration);
      }
    },
    show() {
      this.visible = true;
    },
    close() {
      this.visible = false;
      if (typeof this.onClose === "function") {
        this.onClose();
      }
      this.closeCallback();
    }
  }
};
</script>

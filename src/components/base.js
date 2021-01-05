import Message from "./message/message.js";
import Notification from "./notification/notification.js";

const install = function(Vue) {
  //触发组件的祖先事件
  Vue.prototype.$dispatch = function(componentName, name, ...arsg) {
    if (this.$options.name === componentName || this === this.$root) {
      this.$emit(name, ...arsg);
    } else {
      this.$parent.$dispatch(componentName, name, ...arsg);
    }
  };

  Vue.prototype.$message = Message;
  Vue.prototype.$notify = Notification;

  Vue.prototype.$getLabelWidth = function() {
    if (this.$options.name === "v-form" || this === this.$root) {
      return this.labelWidth || "auto";
    }
    return this.$parent.$getLabelWidth();
  };
};

export default {
  install
};

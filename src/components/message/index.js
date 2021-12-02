import Message from "./v-message.vue";
import message from "./message.js";

/* istanbul ignore next */
Message.install = function(Vue) {
  Vue.component(Message.name, Message);
  Vue.prototype.$message = message;
};

export default Message;

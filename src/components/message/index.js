import Message from "./v-message.vue";

/* istanbul ignore next */
Message.install = function(Vue) {
  Vue.component(Message.name, Message);
};

export default Message;

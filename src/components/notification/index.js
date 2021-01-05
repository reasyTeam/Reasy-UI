import Notification from "./v-notification.vue";

/* istanbul ignore next */
Notification.install = function(Vue) {
  Vue.component(Notification.name, Notification);
};

export default Notification;

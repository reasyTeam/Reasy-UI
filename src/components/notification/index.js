import Notification from "./v-notification.vue";
import notification from "./notification.js";

/* istanbul ignore next */
Notification.install = function(Vue) {
  Vue.component(Notification.name, Notification);
  Vue.prototype.$notify = notification;
};

export default Notification;

import Notification from "./v-notification.vue";
import notification, { Notify2 } from "./notification.js";

/* istanbul ignore next */
Notification.install = function(Vue) {
  Vue.component(Notification.name, Notification);
  Vue.prototype.$notify = notification;
  Vue.prototype.$notify2 = Notify2;
};

export default Notification;


import Qrcode from "./v-qrcode.vue";

/* istanbul ignore next */
Qrcode.install = function(Vue) {
  Vue.component(Qrcode.name, Qrcode);
};

export default Qrcode;

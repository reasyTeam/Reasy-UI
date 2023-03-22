import Dialog from "./v-dialog.vue";
import confirmDialog from "./dialog.js";

/* istanbul ignore next */
Dialog.install = function(Vue) {
  Vue.component(Dialog.name, Dialog);
  Vue.prototype.$confirm = confirmDialog;
};

export default Dialog;

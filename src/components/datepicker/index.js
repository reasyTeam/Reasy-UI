import Datepicker from "./v-datepicker.vue";

/* istanbul ignore next */
Datepicker.install = function install(Vue) {
  Vue.component(Datepicker.name, Datepicker);
};

export default Datepicker;

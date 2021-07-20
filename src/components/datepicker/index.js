import Datepicker from "./v-datepicker.vue";
import DatepickerPanel from "./v-datepicker-panel.vue";

/* istanbul ignore next */
Datepicker.install = function install(Vue) {
  Vue.component(Datepicker.name, Datepicker);
  Vue.component(DatepickerPanel.name, DatepickerPanel);
};

export default Datepicker;
export { DatepickerPanel };

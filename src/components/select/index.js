import Select from "./v-select.vue";

/* istanbul ignore next */
Select.install = function(Vue) {
  Vue.component(Select.name, Select);
};

export default Select;

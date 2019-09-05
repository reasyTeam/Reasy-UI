import Switch from "./v-switch.vue";
/* istanbul ignore next */
Switch.install = function(Vue) {
  Vue.component(Switch.name, Switch);
};

export default Switch;
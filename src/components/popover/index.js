import Popover from "./v-popover.vue";

/* istanbul ignore next */
Popover.install = function(Vue) {
  Vue.component(Popover.name, Popover);
};

export default Popover;

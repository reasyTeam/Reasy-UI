import Popups from "./v-popups.vue";

/* istanbul ignore next */
Popups.install = function(Vue) {
  Vue.component(Popups.name, Popups);
};

export default Popups;

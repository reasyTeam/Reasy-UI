import Mac from "./v-mac.vue";
/* istanbul ignore next */
Mac.install = function(Vue) {
  Vue.component(Mac.name, Mac);
};

export default Mac;
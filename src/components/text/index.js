import Text from "./v-text.vue";
/* istanbul ignore next */
Text.install = function(Vue) {
  Vue.component(Text.name, Text);
};

export default Text;
import Bar from "./v-chart-bar.vue";

Bar.install = function install(Vue) {
  Vue.component(Bar.name, Bar);
};

export default Bar;

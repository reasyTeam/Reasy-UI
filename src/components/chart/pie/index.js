import Pie from "./v-chart-pie.vue";

Pie.install = function install(Vue) {
  Vue.component(Pie.name, Pie);
};

export default Pie;

import Percent from "./v-chart-percent.vue";
import Progress from "./v-progress.vue";

Percent.install = function install(Vue) {
  Vue.component(Percent.name, Percent);
};

Progress.install = function install(Vue) {
  Vue.component(Progress.name, Progress);
};

export default Percent;
export { Progress };

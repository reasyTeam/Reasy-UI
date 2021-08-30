import Progress from "./v-progress.vue";

Progress.install = function install(Vue) {
  Vue.component(Progress.name, Progress);
};

export default Progress;

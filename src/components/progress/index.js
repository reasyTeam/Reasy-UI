import Progress from "./v-progress.vue";
/* istanbul ignore next */
Progress.install = function(Vue) {
  Vue.component(Progress.name, Progress);
};

export default Progress;
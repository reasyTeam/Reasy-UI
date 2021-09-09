import Step from "./v-step.vue";
import Steps from "./v-steps.vue";

/* istanbul ignore next */
Steps.install = function(Vue) {
  Vue.component(Step.name, Step);
  Vue.component(Steps.name, Steps);
};

export default Steps;

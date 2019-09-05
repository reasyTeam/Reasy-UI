import Page from "./v-elem.vue";
/* istanbul ignore next */
Page.install = function(Vue) {
  Vue.component(Page.name, Page);
};

export default Page;
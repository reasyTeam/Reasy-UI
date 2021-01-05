import Loading from "./v-loading.vue";

Loading.install = function install(Vue) {
  Vue.component(Loading.name, Loading);
};

export default Loading;

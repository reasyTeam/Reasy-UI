import Upload from "./v-upload.vue";
/* istanbul ignore next */
Upload.install = function(Vue) {
  Vue.component(Upload.name, Upload);
};

export default Upload;
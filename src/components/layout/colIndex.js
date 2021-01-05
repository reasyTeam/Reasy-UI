import Col from "./col";

Col.install = function install(Vue) {
  Vue.component(Col.name, Col);
};

export default Col;

import Header from "./v-header.vue";
/* istanbul ignore next */
Header.install = function(Vue) {
  Vue.component(Header.name, Header);
};

export default Header;
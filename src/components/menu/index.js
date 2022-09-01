import Menu from "./v-menu.vue";
/* istanbul ignore next */
Menu.install = function(Vue) {
  Vue.component(Menu.name, Menu);
};

export default Menu;

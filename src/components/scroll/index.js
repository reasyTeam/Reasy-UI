import Scroll from "./v-scroll.vue";
import XScroll from "./v-x-scroll.vue";

Scroll.install = function install(Vue) {
  Vue.component(Scroll.name, Scroll);
  Vue.component(XScroll.name, XScroll);
};

// XScroll.install = function install(Vue) {
//   Vue.component(XScroll.name, XScroll);
// };

export { XScroll };
export default Scroll;

import Dropdown from "./v-dropdown.vue";
import DropdownTrade from "./v-dropdown-trade.vue";

/* istanbul ignore next */
Dropdown.install = function(Vue) {
  Vue.component(Dropdown.name, Dropdown);
  Vue.component(DropdownTrade.name, DropdownTrade);
};

export default Dropdown;
export { Dropdown };

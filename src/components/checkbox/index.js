import Checkbox from "./v-checkbox.vue";
import CheckboxGroup from "./v-checkbox-group.vue";
import CheckboxGroupTrade from "./v-checkbox-group-trade.vue";


/* istanbul ignore next */
Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(CheckboxGroup.name, CheckboxGroup);
  Vue.component(CheckboxGroupTrade.name, CheckboxGroupTrade);
};

export default Checkbox;
export { Checkbox, CheckboxGroup, CheckboxGroupTrade };

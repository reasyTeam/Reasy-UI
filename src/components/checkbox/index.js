import Checkbox from "./v-checkbox.vue";
import CheckboxGroup from "./v-checkbox-group.vue";

/* istanbul ignore next */
Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(CheckboxGroup.name, CheckboxGroup);
};

export default Checkbox;
export { Checkbox, CheckboxGroup };

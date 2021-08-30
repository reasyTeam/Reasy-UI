import Input from "./v-input.vue";
import InputGroup from "./v-input-group.vue";
import InputNumber from "./v-input-number.vue";

/* istanbul ignore next */
Input.install = function(Vue) {
  Vue.component(Input.name, Input);
  Vue.component(InputGroup.name, InputGroup);
  Vue.component(InputNumber.name, InputNumber);
};

export default Input;
export { Input, InputGroup, InputNumber };

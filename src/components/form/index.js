import Form from "./v-form.vue";
import FormItem from "./v-form-item.vue";
/* istanbul ignore next */
Form.install = function(Vue) {
  Vue.component(Form.name, Form);
  Vue.component(FormItem.name, FormItem);
};

export { Form, FormItem };

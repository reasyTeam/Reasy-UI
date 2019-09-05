import Column from "./v-column.vue";
/* istanbul ignore next */
Column.install = function(Vue) {
  Vue.component(Column.name, Column);
};

export default Column;
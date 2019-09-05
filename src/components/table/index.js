import Table from "./v-table.vue";
/* istanbul ignore next */
Table.install = function(Vue) {
  Vue.component(Table.name, Table);
};

export default Table;
import Table from "./v-table.vue";
import TableCol from "./v-table-col.vue";
/* istanbul ignore next */
Table.install = function(Vue) {
  Vue.component(Table.name, Table);
  Vue.component(TableCol.name, TableCol);
};

export { Table, TableCol };

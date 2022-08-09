import VTable from "./v-table.vue";
import TableCol from "./v-table-col.vue";
import TableTrade from "./v-table-trade.vue";

let Table = process.env.THEME === "trade" ? TableTrade : VTable;
/* istanbul ignore next */
Table.install = function(Vue) {
  Vue.component(Table.name, Table);
  Vue.component(TableCol.name, TableCol);
};

export default Table;
export { Table, TableCol };

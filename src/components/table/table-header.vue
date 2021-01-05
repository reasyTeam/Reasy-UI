<template>
  <table
    class="table table--fixed v-table__header"
    :class="{ 'v-table__border': border }"
  >
    <thead>
      <tr>
        <th
          v-for="(col, index) in columns"
          :width="col.width"
          :key="index + 1"
          :class="{ 'v-table__header--sort': col.isSort }"
          @click="sortTable(col)"
        >
          <v-checkbox
            v-if="col.type === 'selection'"
            v-model="checkboxValue"
            :hasValue="hasValue"
          ></v-checkbox>
          <span>{{ col.label }}</span>
          <span v-if="col.isSort" class="v-table__sort">
            <span
              class="v-table__icon v-table__icon--up"
              :class="{
                active: col.sortType === 'asc' && sortProp === col.prop
              }"
            ></span>
            <span
              class="v-table__icon v-table__icon--down"
              :class="{
                active: col.sortType === 'desc' && sortProp === col.prop
              }"
            ></span>
          </span>
        </th>
      </tr>
    </thead>
  </table>
</template>
<script>
export default {
  props: {
    //全选值
    value: Boolean,
    //表头选项
    columns: Array,
    //是否有边框
    border: Boolean,
    //排序元素
    sortProp: String,
    //是否有选项框被选中
    hasValue: Boolean
  },
  computed: {
    checkboxValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
      }
    }
  },
  methods: {
    sortTable(col) {
      if (!col.isSort) return;
      if (col.sortType === "asc") {
        col.sortType = "desc";
      } else {
        col.sortType = "asc";
      }
      this.$emit("sort", col.prop, col.sortType);
    }
  }
};
</script>

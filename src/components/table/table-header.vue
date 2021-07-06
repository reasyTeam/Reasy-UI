<template>
  <table
    class="table table--fixed v-table__header"
    :class="{ 'v-table__border': border }"
  >
    <thead>
      <tr>
        <th
          v-for="(col, index) in columns"
          :width="getColWidth(col.width)"
          :key="index + 1"
          :align="col.align"
          :class="{ 'v-table__header--sort': col.isSort }"
          @click="sortTable(col)"
        >
          <!-- 选择框 -->
          <v-checkbox
            v-if="col.type === 'selection'"
            class="v-table__header__checkbox"
            :before-change="beforeSelectAll"
            v-model="checkboxValue"
            :hasValue="hasValue"
          ></v-checkbox>
          <!-- 表头文字 -->
          <span class="v-table__header__label">{{ col.label }}</span>
          <!-- 排序 -->
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
import { size } from "../filters";
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
    hasValue: Boolean,
    beforeSelectAll: Function
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
    getColWidth(width) {
      return size(width);
    },
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

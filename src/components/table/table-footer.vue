<template>
  <div class="v-table__footer">
    <v-pagination
      :total="total"
      :current-page="page"
      is-show-total
      :page-size="pageSize"
      :is-change-size="isChangeSize"
      :is-input-page="isInputPage"
      :page-size-options="pageSizeOptions"
      :border="border"
      @change-page="changePage"
      @change-size="changeSize"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  props: {
    total: Number, //总条数
    page: Number, //当前页
    pageSize: Number,
    isChangeSize: Boolean, //是否支持修改每页数
    isInputPage: Boolean, //是否支持手动修改页数
    pageSizeOptions: Array, //每页数下拉框
    border: Boolean // 是否显示边框
  },
  methods: {
    changePage(page) {
      this.$emit("change-page", page);
    },
    changeSize(pageSize) {
      this.$emit("change-size", pageSize);
    }
  }
};
</script>

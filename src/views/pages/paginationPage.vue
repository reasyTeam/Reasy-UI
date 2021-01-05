<template>
  <r-page>
    <r-h tag="h1" title="Pagination 分页" desc="">
      <r-h tag="h2" title="普通分页" desc="">
        <div class="pagination-group">
          <v-pagination :total="100" :current-page="5"></v-pagination>
        </div>
        <div class="pagination-group">
          <v-pagination
            :total="100"
            :border="false"
            :current-page="5"
          ></v-pagination>
        </div>
      </r-h>
      <r-h tag="h2" title="普通分页" desc="">
        <div class="pagination-group">
          <v-pagination
            :total="100"
            is-show-total
            is-show-total-page
            :border="false"
            :current-page="5"
            @change-page="changePage"
          ></v-pagination>
        </div>
        <div class="pagination-group">
          <v-pagination
            :total="100"
            is-show-total
            is-show-total-page
            is-change-size
            is-input-page
            :current-page="5"
            @change-page="changePage"
          ></v-pagination>
        </div>
      </r-h>
      <r-h tag="h2" title="禁用" desc="">
        <div class="pagination-group">
          <v-pagination :total="100" :current-page="5" disabled></v-pagination>
        </div>
        <div class="pagination-group">
          <v-pagination
            :total="100"
            is-show-total
            is-show-total-page
            is-change-size
            is-input-page
            :border="false"
            :current-page="5"
            @change-page="changePage"
            disabled
          ></v-pagination>
        </div>
        <div class="pagination-group">
          <v-pagination
            :total="100"
            is-show-total
            is-show-total-page
            is-change-size
            is-input-page
            :current-page="5"
            @change-page="changePage"
            disabled
          ></v-pagination>
        </div>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  methods: {
    changePage(page) {
      console.log("page=", page);
    }
  }
};
</script>
<style lang="scss">
.pagination-group {
  margin-bottom: 20px;
}
</style>

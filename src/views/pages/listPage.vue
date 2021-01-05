<template>
  <r-page>
    <r-h
      title="List 列表"
      tag="h1"
      desc="最基础的列表展示。可承载文字、列表、图片、段落，常用于后台数据展示页面。"
    >
    </r-h>

    <r-h title="基础列表" tag="h2" desc="基础的列表子展示。">
      <section class="base-list">
        <v-list
          :bordered="true"
          :devided="true"
          :options="options"
          empty-text="no data"
          @click="clickItem"
        >
          <!-- <template #avatar>
            avatar
          </template>
          <template #title>
            title
          </template>
          <template #desc>
            desc
          </template>
          <template #empty-text>
            no data
          </template> -->
        </v-list>
      </section>
    </r-h>
  </r-page>
</template>

<script>
// 生成假数据
const options = (() => {
  const obj = {
    avatar: "/views/img/logo.png",
    title: "列表主要内容",
    desc: "次要信息"
  };

  return Array.from(Array(5)).map(() => obj);
})();

export default {
  data() {
    return {
      options
    };
  },
  methods: {
    clickItem(option) {
      console.log(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.base-list {
  padding: 24px;
  border: 1px solid #f0f0f0;
}
</style>

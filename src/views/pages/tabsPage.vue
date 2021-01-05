<template>
  <r-page>
    <r-h
      title="Tabs 标签页"
      tag="h1"
      desc="Tab 让用户可以在不同的子任务、视图、模式之间切换，它具有全局导航的作用，是全局功能的主要展示和切换区域，一个Tab标记一个核心功能，Tab之间可以快速点击切换。提供平级的区域将大块内容进行收纳盒展现，保持界面整洁。"
    >
    </r-h>

    <section class="tab-section">
      <v-button class="tab-btn" @click="handleButtonClick"
        >hide/show tab1</v-button
      >
      <v-tabs
        type="link"
        size="M"
        v-model="activeName1"
        :before-leave="beforeLeave"
        :tab-click="tabClick"
      >
        <v-tab-pane v-if="showFirst" label="tab1" value="1" :disabled="true"
          >tab1 content</v-tab-pane
        >
        <v-tab-pane label="tab2" value="2">tab2 content</v-tab-pane>
        <v-tab-pane label="tab333" value="3">tab3 content</v-tab-pane>
      </v-tabs>
    </section>

    <section class="tab-section">
      <v-tabs
        type="card"
        size="M"
        v-model="activeName2"
        :before-leave="beforeLeave"
        :tab-click="tabClick"
      >
        <v-tab-pane label="tab1" value="1">tab1 content</v-tab-pane>
        <v-tab-pane label="tab2" value="2">tab2 content</v-tab-pane>
        <v-tab-pane label="tab333" value="3">tab3 content</v-tab-pane>
      </v-tabs>
    </section>

    <section class="tab-section">
      <v-tabs
        type="button"
        size="S"
        v-model="activeName3_S"
        :before-leave="beforeLeave"
        :tab-click="tabClick"
      >
        <v-tab-pane label="tab1" value="1">tab1 content</v-tab-pane>
        <v-tab-pane label="tab2" value="2">tab2 content</v-tab-pane>
        <v-tab-pane label="tab333" value="3">tab3 content</v-tab-pane>
      </v-tabs>
      <v-tabs
        type="button"
        size="M"
        v-model="activeName3_M"
        :before-leave="beforeLeave"
        :tab-click="tabClick"
      >
        <v-tab-pane label="tab1" value="1">tab1 content</v-tab-pane>
        <v-tab-pane label="tab2" value="2">tab2 content</v-tab-pane>
        <v-tab-pane label="tab333" value="3">tab3 content</v-tab-pane>
      </v-tabs>
    </section>
  </r-page>
</template>

<script>
export default {
  data() {
    return {
      activeName1: "",
      activeName2: "",
      activeName3_S: "",
      activeName3_M: "",

      showFirst: true
    };
  },
  methods: {
    handleButtonClick() {
      this.showFirst = !this.showFirst;
    },
    tabClick(tabVNode) {
      console.log(`trigger tab-click, arguments as follows: `);
      console.log(tabVNode);
    },
    beforeLeave(newVal, oldVal) {
      console.log(`trigger before-leave, arguments: ${newVal}, ${oldVal}`);
    }
  }
};
</script>
<style lang="scss">
.tab-section {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  .v-tabs {
    & + .v-tabs {
      margin-top: 40px;
    }
  }
  .tab-btn {
    margin-bottom: 10px;
  }
}
</style>

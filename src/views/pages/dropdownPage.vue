<template>
  <r-page>
    <r-h
      title="Dropdown 下拉菜单"
      tag="h1"
      desc="当页面操作命令过多时，用于收纳操作元素，将动作或菜单折叠到下拉菜单中"
    >
    </r-h>

    <r-h
      title="基本使用"
      tag="h2"
      desc="下拉菜单样式展示，分为默认与带图标的下拉选项。"
    >
      <section class="dropdown-page">
        <v-dropdown
          ref="dropdown"
          class="dropdown-item"
          label="普通样式"
          :options="options"
          @visible-change="visibleChange"
          @click-item="clickItem"
        ></v-dropdown>

        <v-dropdown
          ref="dropdown1"
          class="dropdown-item"
          label="按钮样式"
          type="button"
          :options="options1"
          @visible-change="visibleChange"
          @click-item="clickItem"
        ></v-dropdown>

        <v-dropdown
          ref="dropdown2"
          class="dropdown-item"
          label="带图标"
          :options="options2"
          @visible-change="visibleChange"
          @click-item="clickItem"
        ></v-dropdown>

        <v-dropdown
          ref="dropdown22"
          class="dropdown-item"
          label="hover"
          trigger="hover"
          :options="options2"
          @visible-change="visibleChange"
          @click-item="clickItem"
        ></v-dropdown>

        <v-dropdown
          ref="dropdown3"
          class="dropdown-item"
          label="禁用状态"
          :disabled="true"
          :options="options2"
          @visible-change="visibleChange"
          @click-item="clickItem"
        ></v-dropdown>
        <v-dropdown
          ref="dropdown4"
          class="dropdown-item"
          label="禁用状态"
          type="button"
          :disabled="true"
          :hide-after-selected="true"
          :options="options2"
          @visible-change="visibleChange"
          @click-item="clickItem"
        ></v-dropdown>

        <v-dropdown
          ref="dropdown5"
          class="dropdown-item"
          label="选择后不关闭下拉框"
          :hide-after-selected="false"
          :options="options2"
          @visible-change="visibleChange"
          @click-item="clickItem"
        ></v-dropdown>

        <v-dropdown
          ref="dropdown6"
          class="dropdown-item"
          label="OTHER"
          :options="options3"
          @visible-change="visibleChange"
          @click-item="clickItem"
        ></v-dropdown>
      </section>
    </r-h>
  </r-page>
</template>

<script>
// 生成假数据
const getOptions = (num, disabledIdxs = [], dividedIdxs = [], hasIcon) => {
  return Array.from(Array(num)).map((item, idx) => {
    const obj = {
      text: `这是选项${idx + 1}`,
      value: `value${idx}`
    };

    if (hasIcon) {
      obj.icon = "v-icon-delete";
    }

    if (disabledIdxs.includes(idx)) {
      obj.disabled = true;
    }

    if (dividedIdxs.includes(idx)) {
      obj.devided = true;
    }

    return obj;
  });
};

export default {
  data() {
    return {
      options: getOptions(7),
      options1: getOptions(7),
      options2: getOptions(7, [], [], true),
      options3: getOptions(7, [2, 5], [3, 4], true)
    };
  },
  methods: {
    visibleChange(visible) {
      console.log(`current visible value: ${visible}`);

      // if (visible) {
      //   this.$refs.dropdown.hide();
      // }
      // this.$refs.dropdown.show();
    },
    clickItem(cfg, idx) {
      console.log(`cfg of click-item: `);
      console.log(cfg);
      console.log(`idx of click-item: ${idx}`);
    }
  }
};
</script>
<style lang="scss">
.dropdown-page {
  .dropdown-item {
    margin: 20px 40px 0 0;
  }
}
</style>

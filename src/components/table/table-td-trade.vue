<template>
  <td
    :class="[
      { 'v-table__expand': column.type === 'expand' },
      `is_${column.align}`
    ]"
    :key="index + 1"
  >
    <template v-if="column.type === 'index'">
      {{ rowIndex + 1 }}
    </template>
    <v-checkbox
      no-id
      v-if="column.type === 'selection'"
      class="v-table__header__checkbox"
      v-model="rowData[checkboxField]"
      :disabled="disabled"
      :before-change="beforeChange"
      @change="clickCheckbox"
    ></v-checkbox>
    <!-- expand处理 -->
    <span
      v-if="column.type === 'expand'"
      class="pointer v-table__expand__icon"
      :class="
        rowData[expandField] ? 'v-icon-minus-square' : 'v-icon-add-square'
      "
      @click="expandTable(rowData, rowIndex)"
    ></span>
    <!-- td值处理 -->
    <div
      :class="{
        fixed: !column.isNoFixed,
        'v-table__expand__wrapper': column.type === 'expand'
      }"
    >
      <!-- 处理table-column中的default slot -->
      <v-td
        :rowData="rowData"
        v-if="column.fn"
        :fn="column.fn"
        :index="rowIndex"
      >
      </v-td>
      <!-- tooltip处理 -->
      <div
        v-else-if="column.isTooltip"
        class="fixed"
        v-tooltip="getTooltipOption()"
      >
        {{ tdValue }}
      </div>
      <!-- 换行 -->
      <div
        v-else-if="column.wordWrap"
        v-for="(col, index) in tdValue"
        :key="index + 1"
      >
        {{ col == "" ? emptyValue : col }}
      </div>
      <!-- search值处理 -->
      <!-- <span v-else-if="column.isSearch" v-html="filterSearch(tdValue)"></span> -->
      <!-- 正常值处理 -->
      <span v-else>{{ tdValue }}</span>
    </div>
  </td>
</template>

<script>
import VTd from "./table-tb-fn.vue";
export default {
  props: {
    emptyValue: String,
    checkboxField: String,
    expandField: String,
    column: Object,
    rowData: Object,
    index: Number,
    rowIndex: Number,
    beforeChange: Function,
    filterSearch: Function,
    clickCheckbox: Function,
    expandTable: Function
  },
  components: {
    VTd
  },
  computed: {
    disabled() {
      return this.column.getDisabled(this.rowData);
    },
    tdValue() {
      return this.column.format(this.column.prop, this.rowData) == ""
        ? this.emptyValue
        : this.column.format(this.column.prop, this.rowData);
    }
    // tdColor() {
    //   let data = this.rowData[this.column.prop];
    //   let colorObj = this.column.colorObj[data];
    //   return colorObj;
    // }
    //换行颜色
    // tdColorWrap() {
    //   let data = this.rowData[this.column.prop];
    //   let colorArr = [];
    //   data.length > 0 &&
    //     data.forEach((element) => {
    //       let item = this.column.colorObj[element];
    //       colorArr.push((this.column.textColor && item) || "inherit");
    //     });
    //   return colorArr;
    // }
  },
  methods: {
    // 生成配置信息
    getTooltipOption() {
      return Object.assign(
        {
          enterable: false,
          showOnlyEllipsis: true,
          content: this.tdValue
        },
        this.column.tooltipOption
      );
    }
  }
};
</script>

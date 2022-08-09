<template>
  <td
    :class="[
      { 'v-table__expand': column.type === 'expand' },
      `is_${column.align}`,
      'fixed'
    ]"
    :key="index + 1"
    :style="{ maxWidth: column.maxWidth }"
  >
    <template v-if="column.type === 'index'">
      {{ rowIndex + 1 }}
    </template>
    <v-checkbox
      no-id
      v-else-if="column.type === 'selection'"
      class="v-table__header__checkbox"
      v-model="rowData[checkboxField]"
      :disabled="disabled"
      :before-change="beforeChange"
      @change="clickCheckbox"
    ></v-checkbox>
    <!-- expand处理 -->
    <span
      v-else-if="column.type === 'expand'"
      class="pointer v-table__expand__icon"
      :class="
        rowData[expandField] ? 'v-icon-minus-square' : 'v-icon-add-square'
      "
      @click="expandTable(rowData, rowIndex)"
    ></span>

    <template v-else-if="column.width || column.maxWidth">
      <!-- 处理table-column中的default slot -->
      <v-td
        :rowData="rowData"
        v-if="column.fn"
        :fn="column.fn"
        :index="rowIndex"
      >
      </v-td>
      <!-- 换行 -->
      <div
        v-else-if="column.wordWrap"
        v-for="(col, index) in tdValue"
        :key="index + 1"
        class="fixed"
        v-tooltip="getTooltipOption(col)"
      >
        {{ col == "" ? emptyValue : col }}
      </div>
      <!-- search值处理 -->
      <div
        v-else-if="column.isSearch"
        class="fixed"
        v-tooltip="getTooltipOption()"
        v-html="filterSearch(tdValue)"
      ></div>
      <!-- tooltip处理 -->
      <div v-else class="fixed" v-tooltip="getTooltipOption()">
        {{ tdValue }}
      </div>
    </template>

    <!-- td值处理 -->
    <template v-else>
      <!-- 处理table-column中的default slot -->
      <v-td
        :rowData="rowData"
        v-if="column.fn"
        :fn="column.fn"
        :index="rowIndex"
      >
      </v-td>
      <!-- 换行 -->
      <div
        v-else-if="column.wordWrap"
        v-for="(col, index) in tdValue"
        :key="index + 1"
      >
        {{ col == "" ? emptyValue : col }}
      </div>
      <!-- search值处理 -->
      <div v-else-if="column.isSearch" v-html="filterSearch(tdValue)"></div>
      <!-- tooltip处理 -->
      <template v-else>
        {{ tdValue }}
      </template>
    </template>
  </td>
</template>

<script>
import VTd from "./table-tb-fn.vue";
import { DISABLED_FIELD } from "./v-table-trade.vue";
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
  },
  methods: {
    // 生成配置信息
    getTooltipOption(col) {
      return Object.assign(
        {
          enterable: false,
          showOnlyEllipsis: true,
          content: col ? col : this.tdValue
        },
        this.column.tooltipOption
      );
    }
  },
  watch: {
    disabled: {
      immediate: true,
      handler(val) {
        this.rowData[DISABLED_FIELD] = val;
      }
    }
  }
};
</script>

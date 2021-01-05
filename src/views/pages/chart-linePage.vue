<template>
  <r-page>
    <r-h tag="h1" title="折线图" desc="表征分类型变量 vs 数值型变量的关系。">
      <v-row :gutter="4">
        <v-col :span="12">
          <v-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES"
            :height="300"
            :showPoint="true"
            :type="1"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></v-chart-line>
        </v-col>
        <v-col :span="12">
          <v-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :height="300"
            :isOffset="false"
            :type="2"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></v-chart-line>
        </v-col>
      </v-row>
    </r-h>

    <r-h
      tag="h2"
      title="使用isOffset: true"
      desc="使用图形的长度、宽度、位置、面积和颜色来比较数值的大小，通常用于展示不同分类间的数值对比。"
    >
      <v-row :gutter="4">
        <v-col :span="24">
          <v-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :showPoint="true"
            :height="400"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></v-chart-line>
        </v-col>
      </v-row>
      <v-row :gutter="4">
        <v-col :span="9">
          <v-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :height="300"
            :categories="CHART_DATA_CATEGORIES"
          ></v-chart-line>
        </v-col>
        <v-col :span="15">
          <v-chart-line
            class="border"
            :type="1"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :showPoint="true"
            :series="CHART_DATA_SERIES1"
            :height="300"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></v-chart-line>
        </v-col>
      </v-row>
    </r-h>

    <r-h
      tag="h2"
      title="使用isOffset: false"
      desc="使用图形的长度、宽度、位置、面积和颜色来比较数值的大小，通常用于展示不同分类间的数值对比。"
    >
      <v-row :gutter="4">
        <v-col :span="11">
          <v-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES"
            :height="300"
            :isOffset="false"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></v-chart-line>
        </v-col>
        <v-col :span="8">
          <v-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES"
            :height="300"
            :type="1"
            :isOffset="false"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></v-chart-line>
        </v-col>
        <v-col :span="5">
          <v-chart-line
            class="border"
            title="图表标题"
            comment="注：数据为后台监测数据"
            :series="CHART_DATA_SERIES1"
            :showPoint="true"
            :height="300"
            :isOffset="false"
            :categories="CHART_DATA_CATEGORIES_LONG"
          ></v-chart-line>
        </v-col>
      </v-row>
    </r-h>
  </r-page>
</template>

<script>
import {
  CHART_DATA_SERIES,
  CHART_DATA_CATEGORIES,
  CHART_DATA_CATEGORIES_LONG,
  CHART_DATA_SERIES1,
  CHART_DATA_SERIES21,
  CHART_DATA_CATEGORIES11
} from "./chart-data";
export default {
  data() {
    return {
      CHART_DATA_SERIES,
      CHART_DATA_SERIES1,
      CHART_DATA_CATEGORIES,
      CHART_DATA_CATEGORIES_LONG,
      CHART_DATA_SERIES21,
      CHART_DATA_CATEGORIES11
    };
  }
};
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid $border-color;
  border-radius: 4px;
}

.v-row {
  margin: 4px 0;
}
</style>

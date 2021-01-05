<template>
  <r-page>
    <r-h
      tag="h1"
      title="栅格布局"
      desc="合理的栅格系统可以通过调整布局网格以满足产品和各种设备尺寸的需求。在 8 点网格法中提供多种数量栅格来适配不同宽度屏幕的分辨率，越大的屏幕尺寸适合更大的间距，越多的内容适合更多数量的栅格。"
    >
    </r-h>
    <r-h
      tag="h2"
      title="栅格列的说明"
      desc="基于8点网格法Tenda在 PC上采用24栅格体系。将区域分成 24 块栅格，页面中的列会随着页面尺寸的变化而变化。"
    >
      响应式设计可以响应的前两点：1、页面布局具有规律性、2、元素宽高可用百分比代替固定数值，而这两点正是栅格系统本身就具有的典型特点，所以利用栅格系统进行响应式的设计是顺理成章的，也比较高效快捷，所以响应式与栅格化天生一对好搭档。栅格系统页面具有规律性、元素宽高可用百分比表示。
      <v-row class="demo-row" gutter="2">
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
        <v-col :span="1">
          <div class="demo-col demo-col-1">1</div>
        </v-col>
      </v-row>
      <v-row class="demo-row">
        <v-col>
          <div class="demo-col">24</div>
        </v-col>
      </v-row>
      <v-row class="demo-row" :gutter="4">
        <v-col :span="12">
          <div class="demo-col">12</div>
        </v-col>
        <v-col :span="12">
          <div class="demo-col">12</div>
        </v-col>
      </v-row>
      <v-row class="demo-row" :gutter="4">
        <v-col :span="8">
          <div class="demo-col">8</div>
        </v-col>
        <v-col :span="8">
          <div class="demo-col">8</div>
        </v-col>
        <v-col :span="8">
          <div class="demo-col">8</div>
        </v-col>
      </v-row>
      <v-row class="demo-row" :gutter="4">
        <v-col :span="6">
          <div class="demo-col">6</div>
        </v-col>
        <v-col :span="6">
          <div class="demo-col">6</div>
        </v-col>
        <v-col :span="6">
          <div class="demo-col">6</div>
        </v-col>
        <v-col :span="6">
          <div class="demo-col">6</div>
        </v-col>
      </v-row>
      <v-row class="demo-row" :gutter="4">
        <v-col :span="4">
          <div class="demo-col">4</div>
        </v-col>
        <v-col :span="4">
          <div class="demo-col">4</div>
        </v-col>
        <v-col :span="4">
          <div class="demo-col">4</div>
        </v-col>
        <v-col :span="4">
          <div class="demo-col">4</div>
        </v-col>
        <v-col :span="4">
          <div class="demo-col">4</div>
        </v-col>
        <v-col :span="4">
          <div class="demo-col">4</div>
        </v-col>
      </v-row>
      <v-row class="demo-row" :gutter="4">
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
        <v-col :span="2">
          <div class="demo-col">2</div>
        </v-col>
      </v-row>
    </r-h>
    <r-h tag="h2" title="v-col属性配置" desc="各属性配置">
      <v-row class="demo-row" :gutter="4">
        <v-col :span="6" class="border">
          <div class="demo-col">6</div>
        </v-col>
        <v-col :span="6" :offset="4" class="border">
          <div class="demo-col">span=6 offset=4</div>
        </v-col>
        <v-col :span="6" :offset="2" :padding="14" class="border">
          <div class="demo-col">offset=2 padding=14</div>
        </v-col>
      </v-row>
    </r-h>
    <r-h tag="h2" title="v-col属性配置" desc="各属性配置">
      <v-row class="demo-row" :gutter="4">
        <v-col :span="6">
          <div class="demo-col">6</div>
        </v-col>
        <v-col :span="4" :offset="2">
          <div class="demo-col">span=4 offset=2</div>
        </v-col>
        <v-col :span="6" :padding="14">
          <div class="demo-col">padding=14</div>
        </v-col>
        <v-col :span="6" tag="span">
          <div class="demo-col">tag="span"</div>
        </v-col>
      </v-row>
    </r-h>
  </r-page>
</template>

<style lang="scss">
.border {
  border: 1px solid #99a9bf;
}

.demo-row {
  border-radius: 4px;
  margin: 20px 0;
}

.demo-col {
  background-color: #99a9bf;
  border-radius: 4px;
  height: 34px;
  line-height: 34px;
  color: #fff;
  text-align: center;
}

.demo-col-1 {
  height: 400px;
}
</style>

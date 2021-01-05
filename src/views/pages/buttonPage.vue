<template>
  <r-page>
    <r-h
      tag="h1"
      title="Button 按钮"
      desc="按钮是传达它将要发起动作的载体，用于触发操作，点击后执行操作命令。"
    >
      <r-h tag="h2" title="按钮基础分类" desc="基础的按钮分类及状态。">
        <section class="button-content">
          <div class="button-group">
            <v-button type="primary">主按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="secondary">次按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="info">常用按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="danger">高危按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="danger" disabled>禁用按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="text">文本按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="text" icon="v-icon-delete"></v-button>
          </div>
          <div class="button-group">
            <v-button type="text" icon="v-icon-upload">图标按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="text" suffix-icon="v-icon-down">后缀按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="primary" :is-loading="true">加载中</v-button>
          </div>
        </section>
      </r-h>
      <r-h tag="h2" title="按钮规格" desc="支持 S、M、L三种尺寸，默认使用M。">
        <section class="button-content">
          <div class="button-group">
            <v-button type="primary" size="S">按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="primary" size="M">按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="primary" size="L">按钮</v-button>
          </div>
        </section>
      </r-h>
      <r-h
        tag="h2"
        title="带图标按钮"
        desc="用于对按钮含义补充解释，提高按钮识别效率。"
      >
        <section class="button-content">
          <div class="button-group">
            <v-button type="primary" icon="v-icon-upload">主按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="secondary" icon="v-icon-upload">次按钮</v-button>
          </div>
          <div class="button-group">
            <v-button icon="v-icon-upload">默认按钮</v-button>
          </div>
          <div class="button-group">
            <v-button type="danger" icon="v-icon-upload">危险</v-button>
          </div>
          <div class="button-group">
            <v-button disabled icon="v-icon-upload">禁用</v-button>
          </div>
        </section>
      </r-h>
      <r-h tag="h2" title="事件" desc="按钮click事件">
        <section class="button-content">
          <div class="button-group">
            <v-button type="primary" @click="hide = !hide">Click</v-button>
            <div v-if="hide">这是一串无意义的文字</div>
          </div>
        </section>
      </r-h>
    </r-h>
  </r-page>
</template>
<script>
export default {
  data() {
    return {
      hide: false
    };
  }
};
</script>
<style lang="scss">
.button-content {
  border: 1px solid #f0f0f0;
  text-align: center;
  padding: 20px 0;
  .button-group {
    display: inline-block;
    margin: 8px 30px;
  }
}
</style>

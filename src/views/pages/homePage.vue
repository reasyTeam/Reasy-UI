<template>
  <div>
    <r-h tag="h1" title="一级标题" desc="描述信息">主体内容部分</r-h>
    <r-h tag="h2" title="二级标题" desc="描述信息">主体内容部分</r-h>
    <r-h tag="h2" title="样例页面" desc="这是个样例页面">
      所有的分块内容都按照样例去写喔，便于生成对应的页面导航菜单。
    </r-h>
    <r-h tag="h2" title="动画函数" desc="各动画对应的效果如下所示。">
      <iframe
        style="width: 1000px;height: 1030px;overflow: hidden;"
        src="https://easings.net/cn#"
      ></iframe>
    </r-h>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 0
    };
  },
  created() {}
};
</script>

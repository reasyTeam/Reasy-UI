<template>
  <r-page>
    <r-h
      tag="h1"
      title="Collapse 折叠面板"
      desc="可以折叠/展开的内容区域。"
    ></r-h>
    <r-h tag="h2" title="基础" desc="简单的使用。">
      <div style="width: 70%; margin: 0 auto;">
        <v-collapse
          v-for="item in data"
          :key="item.title"
          :title="item.title"
          >{{ item.text }}</v-collapse
        >
        <v-collapse
          title="text测试"
          text="这里是展开后的内容这里是展开后的内容"
        ></v-collapse>
      </div>
    </r-h>
  </r-page>
</template>

<script>
export default {
  data() {
    return {
      actived: true,
      data: [
        {
          title: "内容标题1",
          text:
            "这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容。"
        },
        {
          title: "内容标题2",
          text:
            "这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容。"
        },
        {
          title: "内容标题3",
          text:
            "这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容，这里是展开后的内容这里是展开后的内容。"
        }
      ]
    };
  }
};
</script>

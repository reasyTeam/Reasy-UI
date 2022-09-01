<template>
  <div style="position:absolute; top: -9999px; opacity:0; z-index: -9999">
    <!-- 添加隐藏元素 避免自动填充问题 -->
    <input :name="'__name__' + id" :id="'__name__' + id" />
    <input
      type="password"
      :name="'__password__' + id"
      :id="'__password__' + id"
    />

    <!-- 多加2个 避免360 两个时不生效 -->
    <input :name="'__user__' + id" :id="'__user__' + id" />
    <input
      type="password"
      :name="'__user__pass__' + id"
      :id="'__user__pass__' + id"
    />
  </div>
</template>

<script>
import { IGuid } from "../libs";

export default {
  data() {
    return {
      // 添加随机id避免重复
      id: IGuid()
    };
  }
};
</script>

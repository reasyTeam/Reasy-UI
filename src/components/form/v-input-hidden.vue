<template>
  <div style="position:absolute; top: -9999px; opacity:0; z-index: -9999">
    <!-- 添加隐藏元素 避免自动填充问题 -->
    <input name="__name__x123" id="__name__x123" />
    <input type="password" name="__password__x123" id="__password__x123" />

    <!-- 多加2个 避免360 两个时不生效 -->
    <input name="__user__x123" id="__user__x123" />
    <input type="password" name="__user__pass__x123" id="__user__pass__x123" />
  </div>
</template>

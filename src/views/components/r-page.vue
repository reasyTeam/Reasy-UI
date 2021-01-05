<template>
  <div class="page">
    <div class="page-body">
      <slot></slot>
    </div>
    <!-- <aside class="page-nav">导航生成栏，待开发</aside> -->
  </div>
</template>

<style lang="scss">
.page {
  display: flex;
  justify-content: space-between;
}

.page-body {
  width: 920px;
}

.page-nav {
  border-left: 2px solid #eee;
  padding: 10px;
}
</style>

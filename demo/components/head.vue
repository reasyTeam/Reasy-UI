<template>
  <header class="header">
    <img src="../../src/views/img/logo.png" />
    <div class="header-text">组件开发使用文档</div>
  </header>
</template>

<style lang="scss">
$header-height: 80px;

.header {
  height: $header-height;
  padding: 0 58px 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 17px 0px #f5f5f5;
  z-index: 1;
  background-color: #fff;

  img {
    height: auto;
    margin-bottom: 4px;
    width: 140px;
  }

  .header-text {
    color: rgba($color: #000000, $alpha: 0.65);
  }
}
</style>

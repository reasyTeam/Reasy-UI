<template>
  <div class="page page-container">
    <nav class="page-nav">
      <v-scroll>
        <side-nav
          class="nav-scroll"
          :data="navsData"
          :base="`/component/`"
        ></side-nav>
      </v-scroll>
    </nav>
    <section class="page-content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import navsData from "../nav.config";

export default {
  data() {
    return {
      navsData
    };
  }
};
</script>

<style lang="scss">
$header-height: 80px;
$nav-width: 256px;

.page {
  padding-left: $nav-width;
  width: 100%;
  box-sizing: border-box;

  .page-nav {
    width: $nav-width;
    position: fixed;
    bottom: 0;
    top: $header-height;
    left: 0;
    z-index: 1;
  }

  .page-content {
    padding-left: 64px;
    padding-right: 24px;
    max-width: 1000px;
  }

  .nav-scroll {
    padding-top: 24px;
  }
}

.page-content {
  padding-top: 50px;
}
.page-content .content > h3 {
  margin: 55px 0 20px;
}
.page-content .content > table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;
}
.page-content .content > table strong {
  font-weight: normal;
}
.page-content .content > table td,
.page-content .content > table th {
  border-bottom: 1px solid #dcdfe6;
  padding: 15px;
  max-width: 250px;
}
.page-content .content > table th {
  text-align: left;
  white-space: nowrap;
  color: #909399;
  font-weight: normal;
}
.page-content .content > table td {
  color: #606266;
}
.page-content .content > table th:first-child,
.page-content .content > table td:first-child {
  padding-left: 10px;
}
.page-content .content > ul:not(.timeline) {
  margin: 10px 0;
  padding: 0 0 0 20px;
  font-size: 14px;
  color: #5e6d82;
  line-height: 2em;
}
</style>

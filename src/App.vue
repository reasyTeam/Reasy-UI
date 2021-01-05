<template>
  <div id="app">
    <header class="header">
      <img src="./views/img/logo.png" />
      <div class="header-text">组件开发使用文档</div>
    </header>
    <main class="main">
      <nav class="main-nav">
        <v-scroll>
          <ul style="width: 256px;">
            <!-- <template v-if="route.title"> -->
            <li v-for="route in routes" :key="route.name">
              <router-link
                :exact="true"
                class="nav-item"
                v-if="route.title"
                :to="route.path"
                >{{ route.title }}</router-link
              >
            </li>
            <!-- </template> -->
          </ul>
        </v-scroll>
      </nav>
      <section class="main-body">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script>
import { routes } from "./router";

export default {
  data() {
    return {
      routes: routes
    };
  }
};
</script>

<style lang="scss">
$header-height: 80px;
$nav-width: 256px;

#app {
  padding-top: 100px;
  height: 100%;
}

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
    height: 36px;
    margin-bottom: 4px;
    width: auto;
  }

  .header-text {
    color: rgba($color: #000000, $alpha: 0.65);
  }
}

.main {
  padding-left: $nav-width;
  overflow: hidden;

  .main-nav {
    width: $nav-width;
    height: 100%;
    position: fixed;
    bottom: 0;
    top: $header-height;
    left: 0;
    z-index: 1;
  }

  .main-body {
    padding-left: 64px;
    padding-right: 24px;
  }
}

.nav-item {
  height: 48px;
  line-height: 48px;
  padding: 0 26px;
  display: block;
  color: #595959;
  text-decoration: none;
  border-right: 1px solid #e9e9e9;

  cursor: pointer;

  &.router-link-active {
    background-color: #fff5e4;
    color: #ff801f;
    border-right: 2px solid #ff801f;
  }
}
</style>

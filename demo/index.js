import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import hljs from "highlight.js";
import routes from "./route.config";
import ReasyUI from "@/components/index";
import demoBlock from "./components/demo-block";
import SideNav from "./components/side-nav";
import FooterNav from "./components/footer-nav";
import SideLink from "./components/side-link";

import "@/scss/index.scss";
import "./demo-styles/index.scss";

ReasyUI.install(Vue);
Vue.use(VueRouter);
Vue.component("demo-block", demoBlock);
Vue.component("side-nav", SideNav);
Vue.component("footer-nav", FooterNav);
Vue.component("side-link", SideLink);

const router = new VueRouter({
  mode: "hash",
  base: __dirname,
  routes
});

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code:not(.hljs)");
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

new Vue({
  // eslint-disable-line
  render: h => h(App),
  router
}).$mount("#app");

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/pages/homePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    title: "文档格式参考Demo",
    component: Home
  },
  {
    path: "/layout",
    name: "layout",
    title: "栅格布局",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "layout" */ "../views/pages/layoutPage.vue")
  },
  {
    path: "/container",
    name: "container",
    title: "布局容器",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "container" */ "../views/pages/containerPage.vue"
      )
  },
  {
    path: "/icon",
    name: "icon",
    title: "图标",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "icon" */ "../views/pages/iconPage.vue")
  },
  {
    path: "/scroll",
    name: "scroll",
    title: "滚动条",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "scroll" */ "../views/pages/scrollPage.vue")
  },
  {
    path: "/chart-line",
    name: "chart-line",
    title: "折线图",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "chart-line" */ "../views/pages/chart-linePage.vue"
      )
  },
  {
    path: "/chart-bar",
    name: "chart-bar",
    title: "柱图",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "chart-bar" */ "../views/pages/chart-barPage.vue"
      )
  },
  {
    path: "/chart-pie",
    name: "chart-pie",
    title: "饼图",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "chart-pie" */ "../views/pages/chart-piePage.vue"
      )
  },
  {
    path: "/chart-percent",
    name: "chart-percent",
    title: "百分比图",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "chart-percent" */ "../views/pages/chart-percentPage.vue"
      )
  },
  {
    path: "/collapse",
    name: "collapse",
    title: "折叠面板",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "collapse" */ "../views/pages/collapsePage.vue"
      )
  },
  {
    path: "/loading",
    name: "loading",
    title: "加载中",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "loading" */ "../views/pages/loadingPage.vue")
  },
  {
    path: "/badge",
    name: "badge",
    title: "徽标数",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "badge" */ "../views/pages/badgePage.vue")
  },
  {
    path: "/button",
    name: "button",
    title: "按钮",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "button" */ "../views/pages/buttonPage.vue")
  },
  {
    path: "/slider",
    name: "slider",
    title: "滑动条",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "slider" */ "../views/pages/sliderPage.vue")
  },
  {
    path: "/input",
    name: "input",
    title: "输入框",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "input" */ "../views/pages/inputPage.vue")
  },
  {
    path: "/select",
    name: "select",
    title: "选择器",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "select" */ "../views/pages/selectPage.vue")
  },
  {
    path: "/timepicker",
    name: "timepicker",
    title: "时间选择器",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "timepicker" */ "../views/pages/timepickerPage.vue"
      )
  },
  {
    path: "/datepicker",
    name: "datepicker",
    title: "日期选择器",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "datepicker" */ "../views/pages/datepickerPage.vue"
      )
  },
  {
    path: "/radio",
    name: "radio",
    title: "单选框",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "radio" */ "../views/pages/radioPage.vue")
  },
  {
    path: "/checkbox",
    name: "checkbox",
    title: "多选框",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "checkbox" */ "../views/pages/checkboxPage.vue"
      )
  },
  {
    path: "/switch",
    name: "switch",
    title: "开关",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "switch" */ "../views/pages/switchPage.vue")
  },
  {
    path: "/upload",
    name: "upload",
    title: "上传",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "upload" */ "../views/pages/uploadPage.vue")
  },
  {
    path: "/table",
    name: "table",
    title: "表格",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "table" */ "../views/pages/tablePage.vue")
  },
  {
    path: "/pagination",
    name: "pagination",
    title: "分页",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "pagination" */ "../views/pages/paginationPage.vue"
      )
  },
  {
    path: "/form",
    name: "form",
    title: "表单",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "form" */ "../views/pages/formPage.vue")
  },
  {
    path: "/list",
    name: "list",
    title: "数据展示列表",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "list" */ "../views/pages/listPage.vue")
  },
  {
    path: "/dropdown",
    name: "dropdown",
    title: "下拉菜单",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "dropdown" */ "../views/pages/dropdownPage.vue"
      )
  },
  {
    path: "/tabs",
    name: "tabs",
    title: "标签页",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "tabs" */ "../views/pages/tabsPage.vue")
  },
  {
    path: "/step",
    name: "step",
    title: "步骤条",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "step" */ "../views/pages/stepPage.vue")
  },
  {
    path: "/tip",
    name: "tip",
    title: "文字提示",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "tip" */ "../views/pages/tipPage.vue")
  },
  {
    path: "/popover",
    name: "popover",
    title: "气泡卡片",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "popover" */ "../views/pages/popoverPage.vue")
  },
  {
    path: "/dialog",
    name: "dialog",
    title: "对话框",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "dialog" */ "../views/pages/dialogPage.vue")
  },
  {
    path: "/notice",
    name: "notice",
    title: "通知提醒框",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "notice" */ "../views/pages/noticePage.vue")
  },
  {
    path: "/popconfirm",
    name: "popconfirm",
    title: "气泡确认框",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "popconfirm" */ "../views/pages/popconfirmPage.vue"
      )
  },
  {
    path: "/alert",
    name: "alert",
    title: "警告提示",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "alert" */ "../views/pages/alertPage.vue")
  },
  {
    path: "/message",
    name: "message",
    title: "消息提醒",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(/* webpackChunkName: "message" */ "../views/pages/messagePage.vue")
  },
  {
    path: "/skeleton",
    name: "skeleton",
    title: "骨架屏",
    // eslint-disable-next-line prettier/prettier
    component: () =>
      import(
        /* webpackChunkName: "skeleton" */ "../views/pages/skeletonPage.vue"
      )
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
export { routes };

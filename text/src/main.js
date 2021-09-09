import Vue from "vue";
import App from "./App.vue";

import ReasyUi from "@reasy-team/reasy-ui";
import "@reasy-team/reasy-ui/dist/style.css";
// import ReasyUi from "@reasy-team/reasy-ui/dist/reasy-ui-full";
// import "@reasy-team/reasy-ui/dist/styleFull.css";
Vue.use(ReasyUi);

// require("@reasy-team/reasy-ui/dist/lib/base");
// import "@reasy-team/reasy-ui/dist/lib/base/style.css";
// var Button = require("@reasy-team/reasy-ui/dist/lib/button");
// require("@reasy-team/reasy-ui/dist/lib/button/style.css");
// var Input = require("@reasy-team/reasy-ui/dist/lib/input");
// require("@reasy-team/reasy-ui/dist/lib/input/style.css");

// import {
//   Base,
//   Button,
//   Alert,
//   Badge,
//   Checkbox,
//   Collapse,
//   Datepicker,
//   Dialog,
//   Dropdown,
//   Form,
//   Input,
//   Layout,
//   Line,
//   List,
//   Loading,
//   Message,
//   Notification,
//   Pagination,
//   Percent,
//   Pie,
//   Popconfirm,
//   Popover,
//   Popups,
//   Radio,
//   Scroll,
//   Select,
//   Slider,
//   Steps,
//   Switch,
//   Table,
//   Tabs,
//   Timepicker,
//   Tooltip,
//   Upload
// } from "@reasy-team/reasy-ui";
// // Base.install = () => {};
// Vue.use(Base);
// Vue.use(Button);
// Vue.use(Alert);
// Vue.use(Badge);
// Vue.use(Checkbox);
// Vue.use(Collapse);
// Vue.use(Datepicker);
// Vue.use(Dialog);
// Vue.use(Dropdown);
// Vue.use(Input);
// Vue.use(Form);
// Vue.use(Layout);
// Vue.use(Line);
// Vue.use(List);
// Vue.use(Loading);
// Vue.use(Message);
// Vue.use(Notification);
// Vue.use(Pagination);
// Vue.use(Percent);
// Vue.use(Pie);
// Vue.use(Popconfirm);
// Vue.use(Popover);
// Vue.use(Popups);
// Vue.use(Radio);
// Vue.use(Scroll);
// Vue.use(Select);
// Vue.use(Slider);
// Vue.use(Steps);
// Vue.use(Switch);
// Vue.use(Table);
// Vue.use(Tabs);
// Vue.use(Timepicker);
// Vue.use(Tooltip);
// Vue.use(Upload);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

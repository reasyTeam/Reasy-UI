import "../scss/indexFull.scss";

//全局方法，挂载到prototype上的方法
import Base from "./base.js";

/*全局组件*/
import Collapse from "./collapse";
import Row from "./layout";
import Col from "./layout/colIndex";
import Container from "./container";
import Scroll, { XScroll } from "./scroll";
import Badge from "./badge";
import Loading from "./loading";
import Bar from "./chart/bar";
import Line from "./chart/line";
import Pie from "./chart/pie";
import Percent from "./chart/percent";
import Progress from "./chart/percent/progress";

import Edit from "./edit";
import Qrcode from "./qrcode";
import Button from "./button";
import { Input, InputGroup, InputNumber } from "./input";
import Slider from "./slider";
import Select from "./select";
import Radio from "./radio";
import { Checkbox, CheckboxGroup, CheckboxGroupTrade } from "./checkbox";
import Switch from "./switch";
import TimePicker from "./timepicker";
import DatePicker, { DatepickerPanel } from "./datepicker";
import Upload from "./upload";
import { Table, TableCol } from "./table";
import Pagination from "./pagination";
import { Form, FormItem } from "./form";

import List from "./list";
import Alert from "./alert";
import Message from "./message";
import Notification from "./notification";
import Popups from "./popups";
import Popover from "./popover";
import Popconfirm from "./popconfirm";
import Tooltip from "./tooltip";
import Dialog from "./dialog";
import Dropdown from "./dropdown";
import DropdownCustom from './dropdown';
import Tabs from "./tabs";
import TabPane from "./tab-pane";
import Steps from "./steps";
import Step from "./step";
import CollapseTransition from "./collapse/collapse-transition.js";
import Colorpicker from "./colorpicker";
import Menu from "./menu";

const components = [
  Collapse,
  CollapseTransition,
  Row,
  Col,
  Container,
  Scroll,
  Button,
  Input,
  InputGroup,
  InputNumber,
  Edit,
  Qrcode,
  Slider,
  Radio,
  Checkbox,
  CheckboxGroup,
  CheckboxGroupTrade,
  Select,
  Switch,
  TimePicker,
  DatePicker,
  DatepickerPanel,
  Upload,
  Table,
  TableCol,
  Pagination,
  Form,
  FormItem,
  Badge,
  List,
  Loading,
  XScroll,
  Bar,
  Line,
  Pie,
  Alert,
  // Message,
  // Notification,
  Popups,
  Popover,
  Popconfirm,
  // Tooltip,
  Dialog,
  Dropdown,
  DropdownCustom,
  Tabs,
  TabPane,
  Steps,
  Step,
  Percent,
  Progress,
  Colorpicker,
  Menu
];

const install = function(Vue) {
  window.Vue = Vue;
  Vue.use(Base);
  Vue.use(Message);
  Vue.use(Notification);
  Vue.use(Tooltip);
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  Collapse
};

import '../css/index.scss';
/*全局组件*/

import Group from './group/index.js';
import Dialog from './dialog/index.js';
import Alert from './alert/index.js';
import Header from './header/index.js';
import Page from './elem/index.js';
import Table from './table/index.js';
import Input from './input/index.js';
import Radio from './radio/index.js';
import Select from './select/index.js';
import Checkbox from './checkbox/index.js';
import Button from './button/index.js';
import Progress from './progress/index.js';
import Switch from './switch/index.js';
import Slider from './slider/index.js';

import Pop from './pop/index.js';
import Text from './text/index.js';
import Collapse from './collapse/index.js';
import Picker from './picker/index.js';
import Column from './column/index.js';
import Ip from './ip/index.js';
import Mac from './mac/index.js';
import Upload from './upload/index.js';
import Base from './base.js';
let components = [
    Group,
    Dialog,
    Alert,
    Header,
    Page,
    Table,
    Input,
    Radio,
    Select,
    Checkbox,
    Button,
    Progress,
    Switch,
    Slider,
    Pop,
    Text,
    Collapse,
    Picker,
    Column,
    Ip,
    Mac,
    Upload
];

const install = function (Vue) {
    Vue.use(Base);
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install,
    Group,
    Dialog,
    Alert,
    Header,
    Page,
    Table,
    Input,
    Radio,
    Select,
    Checkbox,
    Button,
    Progress,
    Switch,
    Slider,
    Pop,
    Text,
    Picker,
    Collapse,
    Upload,
    Base
};
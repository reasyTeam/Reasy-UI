
import '../css/index.scss';
import {setOptions, formMessage, checkData, checkSubmit} from './libs';
import msgboxVue from './MessageBox';

/*全局组件*/

import vGroup from './v-group';
import vDialog from './v-dialog';
import vAlert from './v-alert';
//import vMenu from '@/components/v-menu';
import vHeader from './v-header';
import vPage from './v-elem';
import vTable from './v-table';

import vInput from './v-input';
import vRadio from './v-radio';
import vSelect from './v-select';
import vCheckbox from './v-checkbox';
import vButton from './v-button';
import vProgress from './v-progress';
import vSwitch from './v-switch';
import vSlider from './v-slider';
import vPort from './v-port';
import vTableCheckbox from './table-checkbox';
import vColumn from './v-column';
import vIp from './v-ip';
import vMac from './v-mac';

let components = [
    vGroup,
    vDialog,
    vAlert,
    vHeader,
    vPage,
    vTable,
    vInput,
    vRadio,
    vSelect,
    vCheckbox,
    vButton,
    vProgress,
    vSwitch,
    vSlider,
    vPort,
    vTableCheckbox,
    vColumn,
    vIp,
    vMac
];

import derectives from '../directives';

const install = function(Vue) {
    Vue.prototype.setOptions = setOptions;
    Vue.use(derectives);
    components.forEach(component => {
        Vue.component(component.name, component);
    });

    //定义数据验证
    Vue.prototype.$checkData = checkData;
    Vue.prototype.$checkAll = checkSubmit;

    /**
     * 显示弹出层
     *
     * @param {object | string} msgOptions
     * @returns
     */
    let msgBox;
    const MessageBoxInstance = Vue.extend(msgboxVue);
    function showDialog(msgOptions, hasCancel) {

        let currentMsg,
            msgBoxEl;
        if(!msgBox) {
            currentMsg = new MessageBoxInstance();
            msgBoxEl = currentMsg.$mount().$el;
            document.body.appendChild(msgBoxEl);
            //msgBox = currentMsg;
        } else {
            currentMsg = msgBox;
           // Vue.extend(currentMsg, defaults);
        }

        if (typeof msgOptions === 'string') {
            currentMsg.content = msgOptions;
        } else if (typeof msgOptions === 'object') {

            if(typeof msgOptions.content == "object" && msgOptions.content.nodeType === 1) {
                msgOptions.content = msgOptions.content.outerHTML;
                msgOptions.parseHtml = true;
            }

            Object.assign(currentMsg, msgOptions);
        }

        currentMsg.hasCancel = !!hasCancel;

        return currentMsg.showMsgBox()
            .then(val => {
                currentMsg = null;
                return Promise.resolve(val);
            })
            .catch(err => {
                currentMsg = null;
                return Promise.reject(err);
            });
    }

    //提示信息
    Vue.prototype.$message = function(msg, time) {
        //let formMessage = new FormMessage();
        formMessage.setMsg(msg, time);
    };

    // 在Vue的原型上添加实例方法，以全局调用
    Vue.prototype.$confirm = function(msgOptions) {

        return showDialog(msgOptions, true);
    };

    Vue.prototype.$alert = function(msgOptions) {
    	return showDialog(msgOptions);

    };
    
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
	install,
    vGroup,
    vDialog,
    vAlert,
    vHeader,
    vPage,
    vTable,
    vInput,
    vRadio,
    vSelect,
    vCheckbox,
    vButton,
    vProgress,
    vSwitch,
    vSlider,
    vPort,
    vTableCheckbox
};


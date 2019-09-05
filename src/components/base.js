
import { setOptions, formMessage, checkData, checkSubmit, debounce } from './libs';
import msgboxVue from './MessageBox';


import derectives from '../directives';

const install = function(Vue) {
    Vue.prototype.setOptions = setOptions;
    Vue.use(derectives);

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
        if (!msgBox) {
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

            if (typeof msgOptions.content == "object" && msgOptions.content.nodeType === 1) {
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

    /* add by xc 添加是否是移动端标识 */
    Vue.prototype.$isMobile = /Android|webOS|iPhone|iPod|iPad|BlackBerry/ig.test(navigator.userAgent) && document.documentElement.clientWidth <= 768;
};
let Base = {};

Base.install = install;
export default Base;

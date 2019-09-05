import Tooltip from '../components/v-tooltip';

let startClick;
let seed = 0;
let nodeList = [];
const ctx = '@@clickoutsideContext';

document.addEventListener('mousedown', e => (startClick = e));

document.addEventListener('mouseup', e => {
    nodeList.forEach(node => {
        if (!node.contains(e.target)) { //当点击元素不是当前node的子元素时
            node[ctx].documentHandler(e, startClick);
        }
    });
});

function createDocumentHandler(el, binding, vnode) {
    return function () {
        if (!vnode ||
            !vnode.context)
            return;

        if (binding.expression &&
            el[ctx].methodName &&
            vnode.context[el[ctx].methodName]) {
            vnode.context[el[ctx].methodName]();
        } else {
            el[ctx].bindingFn && el[ctx].bindingFn();
        }
    };
}

const install = function (Vue) {
    const TooltipBox = Vue.extend(Tooltip);
    let tooltipBox = new TooltipBox(),
        msgBoxEl = tooltipBox.$mount().$el;

    document.body.appendChild(msgBoxEl);
    let directiveConfig = {
        // 注册一个局部的自定义指令 v-focus
        focus: {
            // 指令的定义
            inserted: function (el) {
                // 聚焦元素
                el.focus();
            }
        },
        tooltip: {
            bind(el, binding, vnode) {

            },
            inserted(el, binding, vnode) {
                el.addEventListener("mouseenter", function (event) {

                    tooltipBox.parseHtml = !!this.getAttribute("parse-html");
                    if (binding.value) {
                        tooltipBox.content = binding.value;
                    } else {
                         if (this.querySelector("[v-tooltip]")) { //自定义生成
                            tooltipBox.content = this.querySelector("[v-tooltip]").getAttribute("v-tooltip");
                        } else {
                            tooltipBox.content = binding.value || "";
                        }
                    }

                    tooltipBox.left = event.pageX;
                    tooltipBox.top = event.pageY; //当前位置 - 目标高度
                    tooltipBox.relativeWidth = event.target.offsetWidth;
                    tooltipBox.relativeHeight = event.target.offsetHeight;
                    tooltipBox.show = true;
                    tooltipBox.updatePosition();
                    //console.log("event.relatedTarget", vnode.context);
                    //vnode.context[binding.expression](event);

                });
                el.addEventListener("mouseleave", function (event) {
                    tooltipBox.show = false;
                });
            }
        },
        clickoutside: {
            bind(el, binding, vnode) {
                nodeList.push(el);
                const id = seed++;
                el[ctx] = {
                    id,
                    documentHandler: createDocumentHandler(el, binding, vnode),
                    methodName: binding.expression,
                    bindingFn: binding.value
                };
            },
            update(el, binding, vnode) {
                el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
                el[ctx].methodName = binding.expression;
                el[ctx].bindingFn = binding.value;
            },

            unbind(el) {
                let len = nodeList.length;

                for (let i = 0; i < len; i++) {
                    if (nodeList[i][ctx].id === el[ctx].id) {
                        nodeList.splice(i, 1);
                        break;
                    }
                }
                delete el[ctx];
            }
        },
        manualevent: {
            inserted(el, binding) {
                let evtNameArr = el.getAttribute("evt-name").split(";"),
                    bindFn = binding.value;
                for(let i = 0; i < evtNameArr.length; i++) {
                    el.addEventListener(evtNameArr[i], bindFn[i]);
                }
            },
            unbind(el, binding) {
                let evtNameArr = el.getAttribute("evt-name").split(";"),
                bindFn = binding.value;
                for(let i = 0; i < evtNameArr.length; i++) {
                    el.removeEventListener(evtNameArr[i], bindFn[i]);
                }
            }
        }
    };

    for (let Vname in directiveConfig) {
        Vue.directive(Vname, directiveConfig[Vname]);
    }


    //过滤器
    Vue.filter('upperCase', function (value) {
        if (!value) return '';
        return value.toUpperCase();
    });
};

export default {
    install
};
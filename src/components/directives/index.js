let startClick;
let seed = 0;
let nodeList = [];
const ctx = "@@clickoutsideContext";

document.addEventListener("mousedown", e => (startClick = e));
document.addEventListener("mouseup", e => {
  nodeList.forEach(node => {
    if (!node.contains(e.target)) {
      //当点击元素不是当前node的子元素时
      node[ctx].documentHandler(e, startClick);
    }
  });
});

function createDocumentHandler(el, binding, vnode) {
  return function(mouseup = {}, mousedown = {}) {
    if (
      !vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.parentElm &&
        (vnode.context.parentElm.contains(mouseup.target) ||
          vnode.context.parentElm.contains(mousedown.target)))
    )
      return;

    if (
      binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]
    ) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

const install = function(Vue) {
  let directiveConfig = {
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
        if (!el[ctx]) {
          return;
        }
        for (let i = 0; i < len; i++) {
          if (nodeList[i][ctx].id === el[ctx].id) {
            nodeList.splice(i, 1);
            break;
          }
        }
        delete el[ctx];
      }
    }
  };

  for (let Vname in directiveConfig) {
    Vue.directive(Vname, directiveConfig[Vname]);
  }
  //过滤器
  Vue.filter("upperCase", function(value) {
    if (!value) return "";
    return value.toUpperCase();
  });
};

export default {
  install
};

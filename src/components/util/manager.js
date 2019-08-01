import { addClass, removeClass } from '../libs';

let hasModal = false;
let zIndex = 200;

const getModal = function() {
    let modalDom = PopupManager.modalDom;
    if (modalDom) {
        hasModal = true;
    } else {
        hasModal = false;
        modalDom = document.createElement('div');
        PopupManager.modalDom = modalDom;

        modalDom.addEventListener('touchmove', function(event) {
            event.preventDefault();
            event.stopPropagation();
        });

        modalDom.addEventListener('click', function() {
            PopupManager.doOnModalClick && PopupManager.doOnModalClick();
        });
    }

    return modalDom;
};

const instances = {};

const PopupManager = {
    modalFade: true,

    getInstance: function(id) {
        return instances[id];
    },

    register: function(id, instance) {
        if (id && instance) {
            instances[id] = instance;
        }
    },

    deregister: function(id) {
        if (id) {
            instances[id] = null;
            delete instances[id];
        }
    },

    nextZIndex: function() {
        return PopupManager.zIndex++;
    },

    modalStack: [],

    doOnModalClick: function() {
        const topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
        if (!topItem) return;

        const instance = PopupManager.getInstance(topItem.id);
        if (instance && instance.closeOnClickModal) {
            instance.hide();
        }
    },

    openModal: function(id, zIndex, dom) {
        if (!id || zIndex === undefined) return;

        const modalStack = this.modalStack;

        for (let i = 0, j = modalStack.length; i < j; i++) {
            const item = modalStack[i];
            if (item.id === id) {
                return;
            }
        }

        const modalDom = getModal();

        addClass(modalDom, 'v-pop');
        if (!hasModal) {
            addClass(modalDom, 'v-pop-enter');
        }

        setTimeout(() => {
            removeClass(modalDom, 'v-pop-enter');
        }, 200);

        if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
            dom.parentNode.appendChild(modalDom);
        } else {
            document.body.appendChild(modalDom);
        }

        if (zIndex) {
            modalDom.style.zIndex = zIndex;
        }

        modalDom.style.display = '';

        this.modalStack.push({ id: id, zIndex: zIndex });
    },

    closeModal: function(id) {
        const modalStack = this.modalStack;
        const modalDom = getModal();

        if (modalStack.length > 0) {
            const topItem = modalStack[modalStack.length - 1];
            if (topItem.id === id) {
                modalStack.pop();
                if (modalStack.length > 0) {
                    modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
                }
            } else {
                for (let i = modalStack.length - 1; i >= 0; i--) {
                    if (modalStack[i].id === id) {
                        modalStack.splice(i, 1);
                        break;
                    }
                }
            }
        }

        if (modalStack.length === 0) {
            if (this.modalFade) {
                addClass(modalDom, 'v-pop-leave');
            }
            setTimeout(() => {
                if (modalStack.length === 0) {
                    if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
                    modalDom.style.display = 'none';
                    PopupManager.modalDom = undefined;
                }
                removeClass(modalDom, 'v-pop-leave');
            }, 200);
        }
    }
};

Object.defineProperty(PopupManager, 'zIndex', {
    configurable: true,
    get() {
        return zIndex;
    },
    set(value) {
        zIndex = value;
    }
});

export default PopupManager;
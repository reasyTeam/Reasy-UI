function copyDeepData(item) {
    let newItem;
    if(Array.isArray(item)) {
        newItem = [];
        item.map(function(arr) {
            newItem.push(copyDeepData(arr));
        });
    } else if (typeof item === "function") {
        newItem = item;
    } else if (item instanceof Object) {
        newItem = {};
        for (let prop in item) {
            newItem[prop] =  copyDeepData(item[prop]);
        }
    } else {
        newItem = item;
    }

    return newItem;
}

/**
 * 数组排序
 *
 * @param {object} item1       数组元素对象
 * @param {object} item2       数组元素对象
 * @param {string|array} fields      排序属性
 * @param {object} sortTypeObj  排序属性的排序方式对象
 *
 * @return {numbber} 排序结果
 */
function sortByKey(item1, item2, fields, sortTypeObj) {
    var cps = [],
        i = 0,
        j = 0,
        prop,
        value1,
        value2,
        asc; //是否升序

    // asc: 升序
    // desc: 降序 默认
    if (typeof fields === "string") {
        fields = [fields];
    }

    if (fields && fields.length > 0) {
        for (i = 0; i < fields.length; i++) {
            asc = sortTypeObj[fields[i]] == "asc"; //升序
            prop = fields[i];
            if (typeof item1[prop] == "number" || typeof item2[prop] == "number") {
                value1 = item1[prop];
                value2 = item2[prop];
            } else {
                value1 = item1[prop].toString().toUpperCase();
                value2 = item2[prop].toString().toUpperCase();
            }
            if (value1 > value2) {
                cps.push(asc ? 1 : -1);
                break; // 大于时跳出循环。
            } else if (value1 === value2) {
                cps.push(0);
            } else {
                cps.push(asc ? -1 : 1);
                break; // 小于时跳出循环。
            }
        }
    }

    for (j = 0; j < cps.length; j++) {
        if (cps[j] === 1 || cps[j] === -1) {
            return cps[j];
        }
    }
    return 0;
}

let setOptions = function(data, defaluts, noFreeze) {

    //浅复制
    let defOpts = copyDeepData(defaluts);
    for (var prop in defOpts) {
        if (typeof data[prop] == "undefined") {
            if(typeof this.$set == "function") {
                this.$set(data, prop, defOpts[prop]);
            } else {
                data[prop] = defOpts[prop];
            }
        }
    }
    //不允许data增加新属性
    if(!noFreeze) {
        Object.preventExtensions(data);
    }
    return data;
};

function isDefined(val) {
    return val !== undefined && val !== null;
}


function checkSubmit(dataObj) {
    var errorMsg = "",
        checkFail = false,
        _this = this;
    for (var prop in dataObj) {
        if (typeof dataObj[prop] != "object" || !isDefined(dataObj[prop].val)) {
            continue;
        }
        errorMsg = checkData.call(_this, dataObj[prop]);
        if (!errorMsg) {
            checkFail = true;
        }
    }

    if (checkFail) {
        return false;
    }
    return true;
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * 检查元素的数据合法性
 * @param {object} dataKey 元素对象
 * @param {string} [value] 元素的值
 */
function checkData(dataKey, value) {
    var val = value || (isDefined(dataKey.val) ? dataKey.val : ""),
        errMsg = "",
        handleValid,
        _this = this;

    if (dataKey.show === false
        || dataKey.ignore === true
        || dataKey.disabled === true) { //忽略验证时
        return true;
    }

    if (dataKey.required) {
        if (val === "" || val.length === 0) {
            dataKey.error = _("This field is required");
            return false;
        }
    } else { //非必填时 为空则不验证
        if (val === "") {
            dataKey.error = '';
            return true;
        }
    }
    if(Array.isArray(dataKey.sortArray)) {
        let sortArr = dataKey.sortArray.filter(item => item.value == val);
        if(sortArr.length > 0) {
            dataKey.error = '';
            return true;
        }
    }
    

    if (!Array.isArray(dataKey.valid)) {
        if (dataKey.valid) {
            dataKey.valid = [dataKey.valid];
        } else { //不存在数据验证时，直接返回
            isDefined(dataKey.error) && (dataKey.error = '');
            return true;
        }
    }

    dataKey.valid && dataKey.valid.forEach(function(item){
        handleValid = (_this.$valid||{})[item.type];
        if(handleValid) {
            if(typeof handleValid == "function") {
                errMsg = handleValid(val, ...item.args);
            } else if(typeof handleValid.all === "function") {
                errMsg = handleValid.all(val, ...item.args);
            }

            if(errMsg) {
                return false;
            }
        }
    });

    //数据验证
    if (errMsg) {
        dataKey.error = errMsg;
        return false;
    }

    dataKey.error = '';
    return true;
}

/**
 * 错误提示信息
 *
 * @class FormMessage
 */
class FormMessage {
    /**
     *Creates an instance of FormMessage.
     * @param {*} msg
     * @param {*} showTime
     * @memberof FormMessage
     */
    constructor() {
        this.msg = "";
        this.time = 2000;
        this.elemPool = [];
    }
    createElem() {
        let elem = document.createElement("div");
        elem.className = "form-message";
        return elem;
    }

    getMsgContent() {
        if(this.elemPool.length > 0) {
            return this.elemPool[0].cloneNode(true);
        }

        return this.createElem();
    }

    getContainer() {
        let elem = document.getElementsByClassName("message-container")[0];

        if(!elem) {
            elem = document.createElement("div");
            elem.className = "message-container";
            document.body.appendChild(elem);
        }

        return elem;
    }

    setMsg(msg, showTime) {
        let elem = this.getMsgContent(),
            containerElem = this.getContainer(),
            _this = this;
        if(typeof msg == "object" && msg.nodeType === 1) {
            msg = msg.outerHTML;
        }
        this.msg = msg;
        this.time = showTime || (2000 + msg.length * 30);

        elem.innerHTML = this.msg;
        containerElem.appendChild(elem);

        setTimeout(function() {
            _this.elemPool.push(elem);
            containerElem.removeChild(elem);
        }, this.time);
    }
}

let formMessage = new FormMessage();

export {
    setOptions,
    sortByKey,
    copyDeepData,
    formMessage,
    checkData,
    checkSubmit,
    isDefined,
    isObject
};
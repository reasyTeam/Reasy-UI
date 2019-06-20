<template>
    <div class="form-port-content form-group">
        <div class="form-port-list">
            <div class="port-legend" v-if="legend">
                <div class="form-port-group" v-if="hasGroupLegend">
                    <div class="port-content">
                        <div class="form-port v-icon-port"></div>
                        <div class="port-group-text">1</div>
                    </div>
                    <div class="port-text">汇聚端口</div>
                </div>
                <div class="form-port-group">
                    <div class="port-content">
                        <div class="form-port v-icon-port active"></div>
                    </div>
                    <div class="port-text">Selected</div>
                </div>
                <div class="form-port-group">
                    <div class="port-content">
                        <div class="form-port v-icon-port"></div>
                    </div>
                    <div class="port-text">Not selected</div>
                </div>
                <div class="form-port-group" v-if="dataPort.disabled.length > 0">
                    <div class="port-content">
                        <div class="form-port v-icon-port disabled"></div>
                    </div>
                    <div class="port-text">Disabled</div>
                </div>

                <label v-show="dataPort.hasSelectAll" class="form-checkbox" @click="selectAllPort()">
                    <span
                        class="checkbox-item"
                        :class="selectedAll ? 'v-icon-checkbox-checked' : 'v-icon-checkbox-unchecked'"
                    ></span>
                    <span class="checkbox-text">全选</span>
                </label>
            </div>
            <div
                class="form-port-group"
                v-for="item in portList"
                :key="item.index[0]"
                :name="dataPort.name"
            >
                <span>{{item.index[0]}}</span>
                <div class="port-content" @click="clickPort(item.index[0])">
                    <div
                        class="form-port v-icon-port"
                        :class="{'active': getChecked(item.index[0]), 'disabled': getDisabled(item.index[0])}"
                    ></div>
                    <div class="port-group-text">{{groupConfig[item.index[0]]}}</div>
                </div>

                <div class="port-content" @click="clickPort(item.index[1])">
                    <div
                        class="form-port v-icon-port"
                        :class="{'active': getChecked(item.index[1]), 'disabled': getDisabled(item.index[1])}"
                    ></div>
                    <div class="port-group-text">{{groupConfig[item.index[1]]}}</div>
                </div>
                <span>{{item.index[1]}}</span>
            </div>
            <div class="form-console-group">
                <div
                    class="form-port-group"
                    v-for="item in consoleList"
                    :key="item.index"
                    :name="dataPort.name"
                >
                    <div class="port-content" @click="clickPort(item.index)">
                        <div
                            class="form-port v-icon-port"
                            :class="{'active': getChecked(item.index), 'disabled': getDisabled(item.index)}"
                        ></div>
                        <div class="port-group-text">{{groupConfig[item.index]}}</div>
                    </div>
                    <span>{{item.index}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { copyDeepData } from "./libs.js";

let defaults = {
    show: true,
    singleVal: false,
    portNum: 28,
    consolePort: 4,
    isClick: true,
    val: [],
    name: "",
    disabled: [],
    legend: false,
    hasSelectAll: true
};
export default {
    name: "v-port",
    props: ["dataPort", "relativePort"],
    computed: {
        activePortList() {
            let valArr = [],
                newValue = this.dataPort.val || [];

            newValue.forEach(item => {
                //选中的端口
                if (this.relativePort && this.relativePort[item]) {
                    valArr = valArr.concat(valArr, this.relativePort[item]);
                } else {
                    valArr.push(item);
                }
            });
            //删除禁用的
            valArr = minusArr(valArr, this.dataPort.disabled);
            return valArr;
        }
    },
    created() {
        this.dataPort = this.setOptions(this.dataPort, defaults);

        let portIndex = (this.dataPort.portNum - this.dataPort.consolePort) / 2;
        for (let i = 0; i < portIndex; i++) {
            this.portList.push({
                index: [String((i + 1) * 2 - 1), String((i + 1) * 2)]
            });
        }

        for (let i = 0; i < this.dataPort.consolePort; i++) {
            this.consoleList.push({
                index: String(
                    this.dataPort.portNum - this.dataPort.consolePort + i + 1
                )
            });
        }

        if (this.dataPort.singleVal) {
            //单选时，去掉全选按钮
            this.dataPort.hasSelectAll = false;
        }

        //获取组名
        for (let prop in this.relativePort) {
            this.hasGroupLegend = true;
            this.relativePort[prop].forEach(item => {
                //组数字
                this.groupConfig[item] = prop.match(/[\d]+$/g)[0];
                //关联组
                this.relativeGroup[item] = this.relativePort[prop].filter(
                    item1 => item1 != item
                );
            });
        }
    },
    data() {
        return {
            legend: this.dataPort.legend,
            portList: [],
            groupConfig: {}, //端口与组的关联关系
            relativeGroup: {}, //端口与端口的关联关系
            consoleList: [],
            hasGroupLegend: false,
            selectedAll: false
        };
    },
    methods: {
        getChecked(portIndex) {
            portIndex = String(portIndex);
            return this.activePortList.indexOf(portIndex) != -1;
        },
        getDisabled(portIndex) {
            return this.dataPort.disabled.indexOf(portIndex) != -1;
        },
        clickPort(portIndex) {
            //不允许点击
            if (!this.dataPort.isClick) {
                return;
            }

            //禁用
            if (this.getDisabled(portIndex)) {
                return;
            }

            //查找组或者当前端口
            let relativePortval = findRelativePort(
                this.relativePort,
                portIndex
            );
            let index = this.dataPort.val.indexOf(relativePortval);

            if (!this.singleVal) {
                if (index == -1) {
                    //合并
                    this.dataPort.val.push(relativePortval);
                } else {
                    //删除
                    this.dataPort.val.splice(index, 1);
                    this.selectedAll = false;
                }
            } else {
                if (index == -1) {
                    //不存在
                    this.dataPort.val = [portIndex];
                } else {
                    this.dataPort.val = [];
                }
            }
        },

        getAllPort() {
            let maxPort = this.dataPort.portNum,
                portArr = [];
            //关联组 组名
            for (let prop in this.relativePort) {
                portArr.push(prop);
            }
            for (let i = 1; i <= maxPort; i++) {
                if (this.getDisabled(i)) {
                    continue;
                }
                //没有关联组
                if (!this.relativeGroup[i]) {
                    portArr.push(String(i));
                }
            }
            return portArr;
        },
        selectAllPort() {
            this.selectedAll = !this.selectedAll;
            if (this.selectedAll) {
                this.dataPort.val = this.getAllPort();
            } else {
                this.dataPort.val = [];
            }
        }
    }
};

function findRelativePort(relativePort, port) {
    for (let prop in relativePort) {
        if (relativePort[prop].indexOf(port) != -1) {
            return prop;
        }
    }
    return port;
}

//差集
function minusArr(a, b) {
    return a.filter(function(v) {
        return b.indexOf(v) == -1;
    });
}

//并集
function unionArr(a, b) {
    return a.concat(
        b.filter(function(v) {
            return !(a.indexOf(v) > -1);
        })
    );
}
</script>
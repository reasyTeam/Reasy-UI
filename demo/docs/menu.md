## 菜单栏

通过给组件传路由对象数组生成菜单栏，分为普通模式和 vue-router 模式。<br>
普通模式：只提供菜单样式效果和点击事件，不跳转页面<br>
vue-router 模式：需安装 vue-router，结合`<router-view>`使用，配置同 vue-router 官方文档

### 按需引用

```js
import { Base, Menu } from "@reasy-team/reasy-ui";

Vue.use(Base);
Vue.use(Menu);
```

### 基础示例

普通模式，通过 name 标识每个路由，默认选中第一个一级菜单的第一个子路由
:::demo

```html
<template>
  <div class="page-demo">
    <v-menu :routes="routes"  no-id/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routes: [
          {
            name: "menu1",
            meta: {
              title: "一级菜单1"
            },
            children: [
              {
                name: "menu1.1", //系统概览
                meta: {
                  title: "二级菜单1.1"
                }
              },
              {
                name: "menu1.2", //用户管理
                meta: {
                  title: "二级菜单1.2"
                }
              }
            ]
          },
          {
            name: "menu2",
            meta: {
              title: "一级菜单2"
            },
            children: [
              {
                name: "menu2.1",
                meta: {
                  title: "二级菜单2.1"
                }
              },
              {
                name: "menu2.2",
                meta: {
                  title: "二级菜单2.2"
                }
              }
            ]
          },
          {
            name: "menu3",
            meta: {
              title: "一级菜单3"
            }
          }
        ]
      };
    }
  };
</script>
```

:::

vue-router 模式（由于此组件库中已存在 vue-router 路由，故此处无法显示效果）<br>
`is-router` 配置是否启用 vue-router 路由模式，通过 path 进行导航<br>
`<router-view></router-view>` 显示二级菜单页面内容，注意还需配置一个 router-view 组件作为一级路由出口

:::demo

```html
<template>
  <div class="page-demo">
    <v-menu :routes="routes" is-router name="route"/></v-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      //一级路由出口组件
      this.Menu = {
        render(h) {
          return h("router-view");
        }
      };
      return {
        routes: [
                  {
                    path: "/",
                    alias: "/menu1",
                    name: "menu1",
                    redirect: "/menu1/menu1.1",
                    component: this.Menu,
                    meta: {
                      title: "一级菜单1"
                    },
                    children: [
                      {
                        path: "menu1.1",
                        name: "menu1.1",
                        component: "1.1页面组件",
                        meta: {
                          title: "二级菜单1.1"
                        }
                      },
                      {
                        path: "menu1.2",
                        name: "menu1.2",
                        component: "1.2页面组件",
                        meta: {
                          title: "二级菜单1.2"
                        }
                      }
                    ]
                  },
                  {
                    path: "/menu2",
                    name: "menu2",
                    redirect: "/menu2/menu2.1",
                    component: this.Menu,
                    meta: {
                      title: "一级菜单2"
                    },
                    children: [
                      {
                        path: "menu2.1",
                        name: "menu2.1",
                        component: "2.1页面组件",
                        meta: {
                          title: "二级菜单2.1"
                        }
                      },
                      {
                        path: "menu2.2",
                        name: "menu2.2",
                        component: "2.2页面组件",
                        meta: {
                          title: "二级菜单2.2"
                        }
                      }
                    ]
                  },
                  {
                    path: "/menu3",
                    name: "menu3",
                    component: this.Menu,
                    meta: {
                      title: "一级菜单3"
                    }
                  }
                ]
      };
    }
  };
</script>
```

:::

### 菜单图标

通过配置 routes 中 meta 对象的 icon 属性（只支持一级菜单）
:::demo

```html
<template>
  <div class="page-demo">
    <v-menu :routes="routes" no-id/></v-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routes: [
                  {
                    name: "menu1",
                    meta: {
                      title: "一级菜单1",
                      icon:"v-icon-calendar"
                    },
                    children: [
                      {
                        name: "menu1.1", //系统概览
                        meta: {
                          title: "二级菜单1.1"
                        }
                      },
                      {
                        name: "menu1.2", //用户管理
                        meta: {
                          title: "二级菜单1.2"
                        }
                      }
                    ]
                  },
                  {
                    name: "menu2",
                    meta: {
                      title: "一级菜单2",
                      icon:"v-icon-time"
                    },
                    children: [
                      {
                        name: "menu2.1",
                        meta: {
                          title: "二级菜单2.1"
                        }
                      },
                      {
                        name: "menu2.2",
                        meta: {
                          title: "二级菜单2.2"
                        }
                      }
                    ]
                  },
                  {
                    name: "menu3",
                    meta: {
                      title: "一级菜单3",
                      icon:"v-icon-image"
                    }
                  }
                ]
      };
    }
  };
</script>
```

:::

### 禁用

通过配置 routes 中 meta 对象的 disabled=true
:::demo

```html
<template>
  <div class="page-demo">
    <v-menu :routes="routes" no-id/></v-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routes: [
                  {
                    name: "menu1",
                    meta: {
                      title: "一级菜单1",
                      icon:"v-icon-calendar"
                    },
                    children: [
                      {
                        name: "menu1.1", //系统概览
                        meta: {
                          title: "二级菜单1.1"
                        }
                      },
                      {
                        name: "menu1.2", //用户管理
                        meta: {
                          title: "二级菜单1.2"
                        }
                      }
                    ]
                  },
                  {
                    name: "menu2",
                    meta: {
                      title: "一级菜单2",
                      icon:"v-icon-time",
                      disabled: true
                    },
                    children: [
                      {
                        name: "menu2.1",
                        meta: {
                          title: "二级菜单2.1"
                        }
                      },
                      {
                        name: "menu2.2",
                        meta: {
                          title: "二级菜单2.2"
                        }
                      }
                    ]
                  },
                  {
                    name: "menu3",
                    meta: {
                      title: "一级菜单3",
                      icon:"v-icon-image"
                    }
                  }
                ]
      };
    }
  };
</script>
```

:::

### IP-COM 风格

`is-ipcom`配置菜单是否 IPCOM 风格
:::demo

```html
<template>
  <div class="page-demo">
    <v-menu :routes="routes" is-ipcom no-id/></v-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routes: [
                  {
                    name: "menu1",
                    meta: {
                      title: "一级菜单1",
                      icon:"v-icon-calendar"
                    },
                    children: [
                      {
                        name: "menu1.1", //系统概览
                        meta: {
                          title: "二级菜单1.1"
                        }
                      },
                      {
                        name: "menu1.2", //用户管理
                        meta: {
                          title: "二级菜单1.2"
                        }
                      }
                    ]
                  },
                  {
                    name: "menu2",
                    meta: {
                      title: "一级菜单2",
                      icon:"v-icon-time"
                    },
                    children: [
                      {
                        name: "menu2.1",
                        meta: {
                          title: "二级菜单2.1"
                        }
                      },
                      {
                        name: "menu2.2",
                        meta: {
                          title: "二级菜单2.2",
                          disabled:true
                        }
                      }
                    ]
                  },
                  {
                    name: "menu3",
                    meta: {
                      title: "一级菜单3",
                      icon:"v-icon-image"
                    }
                  }
                ]
      };
    }
  };
</script>
```

:::

### 属性 Attributes

#### v-menu 属性

| 参数      | 说明                     | 类型    | 可选值 | 默认值 |
| --------- | ------------------------ | ------- | ------ | ------ |
| routes    | 路由配置数据             | array   | -      | -      |
| is-router | 是否采用 vue-router 模式 | boolean | -      | false  |
| is-ipcom  | 是否采用 ip-com 风格     | boolean | -      | false  |

#### routes 对象属性

| 参数     | 说明                                                                            | 类型   | 可选值 | 默认值 |
| -------- | ------------------------------------------------------------------------------- | ------ | ------ | ------ |
| name     | 菜单名称，在普通模式下是菜单唯一标识                                            | string | -      | -      |
| children | 子菜单数组，子菜单对象格式同此配置(只支持二级菜单)                              | array  | -      | -      |
| meta     | 菜单自定义配置，默认支持 title（菜单标题），disabled（禁用），icon（菜单 logo） | object | -      | -      |
| 其他     | vue-router 模式下的 routes 对象按 vue-router 官网配置                           |        |

#### Events

| 事件名称   | 说明               | 参数                |
| ---------- | ------------------ | ------------------- |
| clickFirst | 点击一级菜单时触发 | 点击的一级菜单对象  |
| clickSec   | 点击二级菜单时触发 | 点击的二级菜单对象  |
| open       | 一级菜单展开时触发 | 展开的一级菜单 name |
| close      | 一级菜单关闭时触发 | 关闭的一级菜单 name |

#### Slot

| name       | 说明                     | 参数                       |
| ---------- | ------------------------ | -------------------------- |
| header     | 在菜单栏上方需展示的内容 |                            |
| menuFirst  | 自定义一级菜单内容       | 当前一级菜单的路由数据对象 |
| menuSecond | 自定义二级菜单内容       | 当前二级菜单的路由数据对象 |
| menuFoot   | 在菜单栏底部需展示的内容 |                            |

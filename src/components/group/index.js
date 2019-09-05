import Group from "./v-group.vue";
/* istanbul ignore next */
Group.install = function(Vue) {
  Vue.component(Group.name, Group);
};

export default Group;
import Vue from "vue";
import SimpleTip from "../components/SimpleTip";

function create(Component, props) {
  const vm = new Vue({
    render: h => h(Component, { props })
  }).$mount();
  document.body.appendChild(vm.$el);
  const comp = vm.$children[0];
  comp.remove = function () {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };
  return comp;
}

export default {
  install(Vue) {
    Vue.prototype.$tip = function (options) {
      return create(SimpleTip, options);
    };
  },
};

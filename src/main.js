import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vant from "vant";
import "vant/lib/index.css";
import "./utils/rem";
import tip from "./utils/SimpleTip";
// import "./mock/index";

Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(tip);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

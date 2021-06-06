import axios from "axios";
import Vue from "vue";

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    if (response) {
      switch (response.data.code) {
        case 10001: {
          const t = Vue.prototype.$tip({
            type: 1,
            msg: response.data.message,
            confirm: () => {
              t.toHide();
            },
          });
          t.toShow();
          break;
        }
        case 10002: {
          const t = Vue.prototype.$tip({
            type: 1,
            msg: response.data.message,
            confirm: () => {
              t.toHide();
            },
          });
          t.toShow();
          break;
        }
        case 50000: {
          const t = Vue.prototype.$tip({
            type: 1,
            msg: response.data.message,
            confirm: () => {
              t.toHide();
            },
          });
          t.toShow();
          break;
        }
      }
    }
    return response;
  },
  (error) => {
    return error;
  }
);

export default axios;

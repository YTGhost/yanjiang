import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/index" },
  { path: "/index", component: () => import("../views/Index.vue") },
  { path: "/home", component: () => import("../views/Home.vue") },
  { path: "/score", component: () => import("../views/Score.vue") },
  { path: "/success", component: () => import("../views/Success.vue") },
  { path: "/admin", component: () => import("../views/admin.vue") },
  { path: "/result", component: () => import("../views/Result.vue") },
  {
    path: "/resultDetail",
    component: () => import("../views/ResultDetail.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

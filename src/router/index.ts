import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/index.vue'),

  },
  // 登录
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

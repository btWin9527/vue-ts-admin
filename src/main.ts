/* 入口文件*/
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入全局配置
import './global'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

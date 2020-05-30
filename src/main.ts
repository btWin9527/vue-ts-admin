import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import '@/styles/index.scss';
import '@/styles/element-variables.scss';
import ElementUI from 'element-ui';
import '@/styles/element-variables.scss'; // 导入主题配置

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

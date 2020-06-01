/* 全局配置 */
import Vue from "vue";
// 样式初始化
import 'normalize.css';
import '@/styles/index.scss';
import '@/styles/element-variables.scss';
// 配置element-ui
import ElementUI from 'element-ui';
import '@/styles/element-variables.scss';

Vue.use(ElementUI);
// 配置请求优化处理
import promiseHandle from "@/utils/promise";// 导入promise方法嵌套handle
Vue.prototype.$$promise = promiseHandle;

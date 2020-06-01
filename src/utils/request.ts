/*
* 接口请求配置
* */
import axios from 'axios';
import {Message, MessageBox} from "element-ui";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  // withCredentials: true // send cookies when cross-domain requests
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 请求头添加token
    let token = '123'; // todo: 测试token添加
    config.headers['Authorization'] = token;
    return config;
  },
  error => {
    Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    return Promise.resolve(response)
  },
  error => {
    if (error.response.status === 401 || error.response.status === 403) {
      // 重置token
      location.reload();
    }
    /* eslint-disable */
    if (error.response.data.code == '2000009') {
      return Promise.reject(error)
    }
    var message =
      (error.response && error.response.data.message) ||
      (error.message.indexOf('timeout') > -1 ? '请求超时' : error.message)
    // 匹配设备是否满足下列要求
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      Message({message: message, type: 'error'})
    } else {
      console.log(error)
      MessageBox.alert(message, '错误提示', {type: 'error'});
    }
    return Promise.reject(error)
  }
)

export default service

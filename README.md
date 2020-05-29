# vue-ts-admin

## 1. 目录结构

```text
.
├─ public/             # 模板文件
├─ dist/               # build 生成的生产环境下的项目
├─ src/                # 源码目录（开发都在这里进行）
│   ├─ api/            # 服务（SERVICE，统一Api管理）
│   ├─ assets/         # 静态资源文件
│   ├─ components/     # 组件
│   ├─ filters/        # 全局过滤器
│   ├─ icons/          # svg转ts格式的icon
│   ├─ lang/           # 国际化语言
│   ├─ layout/         # 架构布局
│   ├─ router/         # 路由（ROUTE）
│   ├─ store/          # 模块化状态管理vuex
│   ├─ styles/         # 公共样式
│   ├─ utils/          # 工具库
│   ├─ views/          # 视图页（pages）
│   ├─ App.vue         # 启动文件
│   ├─ main.ts         # 主入口页
│   ├─ permission.ts   # 路由鉴权
│   ├─ shims-tsx.d.ts   # 相关 tsx 模块注入
│   ├─ shims-vue.d.ts   # Vue 模块注入
│   ├─ .env.development  # 开发环境默认API属性配置
│   ├─ .env.production   # 线上环境默认API属性配置
│   ├─ babel.config.js   # babel配置

```

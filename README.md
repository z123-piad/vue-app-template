# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).


cd vue-app-template
yarn
yarn dev

## 目录结构
src/
├── api/                  # 接口请求层（统一管理接口配置、类型、请求逻辑）
│   ├── endpoints/        # 接口端点配置（URL、请求方法，需符合IApi类型）
│   │   ├── index.ts      # 接口端点聚合导出
│   │   └── user.ts       # 用户相关接口端点（示例）
│   ├── dto/              # 接口DTO类型（入参/出参类型定义，遵循固定规范）
│   │   └── user.ts       # 用户相关接口DTO（示例）
│   ├── request.ts        # Axios实例封装（拦截器、超时、路径参数替换）
│   └── index.ts          # API相关能力统一导出（实例、类型、端点）
├── assets/               # 静态资源（需通过import引用，会被Vite处理）
│   ├── images/           # 图片资源（如logo、业务图片）
│   └── styles/           # 全局样式（重置样式、变量、混合器）
│       └── index.css     # 样式入口（导入全局样式，在main.ts中引入）
├── components/           # 公共组件（可复用、非页面级，按用途拆分）
│   ├── common/           # 通用基础组件（按钮、弹窗、输入框等，跨业务复用）
│   └── business/         # 业务公共组件（如表单卡片、数据列表，业务内复用）
├── composables/          # Vue3组合式函数（复用业务逻辑，替代mixins）
│   ├── useApi.ts         # API请求Hooks（类型安全调用接口，集中处理loading/错误）
│   └── index.ts          # 组合函数统一导出（简化组件导入）
├── i18n/                 # 国际化配置（多语言支持，便于后续扩展）
│   ├── locales/          # 多语言文件（按语言拆分）
│   │   └── zh-CN.ts      # 中文语言包（示例）
│   └── index.ts          # i18n实例初始化（配置默认语言、注入全局）
├── router/               # 路由配置（页面跳转、权限控制）
│   ├── routes.ts         # 路由规则（定义路径、组件、元信息）
│   └── index.ts          # 路由实例（创建router、全局守卫）
├── store/                # 状态管理（Pinia，轻量、类型友好，替代Vuex）
│   ├── modules/          # 模块化状态（按业务拆分，避免单文件过大）
│   ├── userInfo.ts       # 用户信息状态（示例：登录状态、token）
│   └── index.ts          # Pinia实例初始化（启用持久化、导出模块）
├── utils/                # 工具函数（通用能力，无业务依赖）
│   ├── index.ts          # 工具函数统一导出（简化组件导入）
│   └── format.ts         # 格式化工具（如时间、金额格式化，示例）
├── views/                # 页面级组件（对应路由，一个路由对应一个页面）
│   └── login/            # 登录页面（示例）
│       └── index.vue     # 登录组件（页面逻辑、模板）
├── App.vue               # 根组件（路由出口、全局布局容器）
└── main.ts               # 应用入口（初始化Vue、挂载插件）


https://juejin.cn/post/7567889397494988836?searchId=20251225145329193072B49D47E44A8F74#heading-1
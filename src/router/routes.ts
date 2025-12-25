import {type RouteRecordRaw} from 'vue-router';

// 路由规则数组（每个对象对应一个页面）
export const routes: RouteRecordRaw[] = [
    {
        // 根路径（访问http://localhost:5173/时触发）
        path: '/',
        // 重定向到登录页（避免根路径空白）
        redirect: {name: 'LoginView'},
    },
    {
        // 登录页路径（访问http://localhost:5173/login）
        path: '/login',
        name: 'LoginView', // 路由名称（跳转时使用，需唯一）
        // 懒加载组件（打包时拆分代码，减少初始加载体积）
        component: () => import('@/views/login/index.vue'),
        // 路由元信息（与types/vue-router.d.ts扩展的RouteMeta对应）
        meta: {title: '登录'}
    },
];

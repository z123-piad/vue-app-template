import {createRouter, createWebHistory} from 'vue-router';
import {routes} from './routes';

// 创建路由实例
const router = createRouter({
    // 历史模式：HTML5 History（无#号，需后端配置 fallback）
    history: createWebHistory(import.meta.env.VITE_APP_BASE_PATH),
    routes: routes // 导入路由规则
});

// 全局前置守卫：每次路由跳转前执行（此处用于统一设置页面标题）
router.beforeEach((to, _from, next) => {
    // 优先使用路由meta.title，无则使用环境变量的默认标题
    document.title = to.meta.title ?? import.meta.env.VITE_APP_TITLE;
    // 继续执行路由跳转（必须调用next()，否则路由会阻塞）
    next();
});

export default router;

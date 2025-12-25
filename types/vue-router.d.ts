// （扩展路由元信息类型）

import 'vue-router';

// 扩展路由的meta字段（支持自定义属性，如页面标题）
declare module 'vue-router' {
    interface RouteMeta {
        title?: string; // 页面标题（用于router.beforeEach设置文档标题）
    }
}

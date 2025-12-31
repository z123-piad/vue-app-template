import {defineStore} from 'pinia';

// 定义用户信息Store（id必须唯一，建议与文件名对应，便于识别）
export const useUserInfoStore = defineStore('userInfo', {
    // 状态：类似组件的data，返回初始状态对象（支持TypeScript类型推导）
    state: () => ({
        username: 'learnDoing', // 用户名（示例值）
        isLoggedIn: false, // 是否登录（初始未登录）
        token: '' // 登录凭证（后续接口请求需携带，初始为空）
    }),

    // 持久化配置（开启后，状态会自动存储到localStorage，刷新不丢失）
    persisted: true
});

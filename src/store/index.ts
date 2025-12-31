import {createPinia} from 'pinia';
import {persistedPlugin} from 'pinia-persisted-plugin';

// 导出业务状态模块（组件中可直接导入useUserInfoStore使用）
export {useUserInfoStore} from './userInfo.ts';

// 创建Pinia实例
const pinia = createPinia();

// 使用持久化插件（默认存储到localStorage，支持配置存储方式）
pinia.use(persistedPlugin);

export default pinia;

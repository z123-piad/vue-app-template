import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path';

function resolveFromDirname(path: string): string {
  return resolve(__dirname, path);
}

// https://vite.dev/config/
export default defineConfig(configEnv => {
  // 加载当前环境的.env文件（mode：dev/prod，cwd：项目根目录）
  const env = loadEnv(configEnv.mode, process.cwd(), "");

  // 配置代理跨域
  const proxy = {
    // 匹配以/api开头的请求，转发到后端服务
    "/api": {
      target: env.VITE_APP_API_URL, // 代理目标地址（从环境变量读取）
      changeOrigin: true, // 开启跨域（模拟请求头的Origin）
      rewrite: (path: string) => path.replace(/^\/api/, "") // 去掉请求中的/api前缀
    }
  };

  // 开发服务器配置（解决跨域）
  const server = {
    proxy
  };

  // 路径解析配置（@别名指向src）
  const alias = { "@": resolveFromDirname('./src') }

  const resolve = {
    alias
  };

  const plugins = [
    vue()
  ];

  return {
    // 项目基础路径（部署子路径时生效，从环境变量读取）
    base: env.VITE_APP_BASE_PATH,
    resolve,
    // 插件配置（Vue插件必装，支持单文件组件）
    plugins,
    server
  };
});

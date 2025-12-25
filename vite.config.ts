import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'node:path';

function resolveFromDirname(path: string): string {
  return resolve(__dirname, path);
}

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  // 1. 定义 env 文件的自定义目录（绝对路径，避免路径解析问题）
  const envDir = path.resolve(__dirname, './env');
  // 加载当前环境的.env文件（mode：dev/prod，cwd：项目根目录）
  const env = loadEnv(mode, envDir);

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
    port: 13000, // 服务端口
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
    // 配置 Vite 读取 env 文件的目录
    envDir,
    // 项目基础路径（部署子路径时生效，从环境变量读取）
    base: env.VITE_APP_BASE_PATH,
    resolve,
    // 插件配置（Vue插件必装，支持单文件组件）
    plugins,
    server,
    // 可选：暴露非 VITE_ 开头的变量（默认仅 VITE_ 开头的变量暴露到客户端）
    define: {
      'import.meta.env.CUSTOM_VAR': JSON.stringify(env.CUSTOM_VAR),
    },
  };
});

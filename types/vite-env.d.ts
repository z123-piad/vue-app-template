// （定义 VITE 环境变量类型）

/// <reference types="vite/client" />

// 定义环境变量的类型（与.env文件中的VITE_变量一一对应）
declare namespace Env {
    interface ImportMetaEnv {
        readonly VITE_APP_API_URL: string;
        readonly VITE_APP_BASE_PATH: string;
        readonly VITE_APP_TITLE: string;
    }
}

// 让import.meta.env自动继承上述类型，获得类型提示
interface ImportMetaEnv extends Env.ImportMetaEnv {
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App);
app.use(router).use(createPinia()).mount('#app')

console.log('环境变量：', import.meta.env.VITE_APP_TITLE); // 应输出自定义标题
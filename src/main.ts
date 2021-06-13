import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import router from './router'
import "./styles/global.less"

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

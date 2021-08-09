import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import router from './router'
import "./styles/global.less"
import vantUiMakerList from './packages/vant-ui'
import { makerList as coreUiMakerList, editorList as coreUiEditorList } from "./packages/core-ui"
import { useComponentMakerList } from './components/ComponentMaker/hooks'
import { useEditorList } from './components/Editor/hooks';
useComponentMakerList().set(...coreUiMakerList)
useComponentMakerList().set(...vantUiMakerList)
useEditorList().set(...coreUiEditorList)
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

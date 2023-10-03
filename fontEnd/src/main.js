import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
// 导入全局路由
import gloalComponents from "./components/globalComponents.js"
// ElementPlus 国际化
import zhCn from "element-plus/dist/locale/zh-cn.mjs"

const app = createApp(App)
app.use(router)
app.use(ElementPlus, {
	locale: zhCn
})
app.use(gloalComponents)
app.mount("#app")

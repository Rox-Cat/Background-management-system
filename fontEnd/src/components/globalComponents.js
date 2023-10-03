/* 引入需要全局注册的组件 */
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
export default {
	install(app) {
		// 注册element图标库
		for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
			app.component(key, component)
		}
	},
}

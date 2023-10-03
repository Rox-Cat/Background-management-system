import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path  from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	// 这个是配置scss
	pluginOptions: {
		"style-resources-loader": {
			preProcessor: "scss",
			patterns: []
		}
	},
	resolve: {
		alias: {
			"@": path.resolve("./src"),
		}
	},
	server: {
		port: 5173,
		open: true,
		// cors: true
	}
})

/* 引入包 */
const express = require("express")
const cors = require("cors") // cors
const bodyParser = require("body-parser")
const jwtConfig = require("./jwtConfig/index.js")
const { expressjwt } = require("express-jwt")
const middleware = require("./middleware/index.js")
/* 定义实例 */
const app = express()

/* 使用中间件 */
app.use(cors())

// 解析请求体中的url编码格式
// extended为true时，值可以是任意类型
// extended为false时，值为数组或者字符串
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
)

// 用于处理请求体中的json格式数据
app.use(bodyParser.json())

// 使用中间件为res添加一个处理error的函数
app.use(middleware.errors)

// 验证token信息
app.use(
	expressjwt({
		secret: jwtConfig.jwtSecretKey,
		algorithms: ["HS256"],
	}).unless({
		path: [/^\/api\//],
	})
)

/* 导入路由等自定义内容 */
const loginRouter = require("./router/login.js")
app.use("/api", loginRouter)

app.use(middleware.errorsJoi)
/* 绑定和监听端口 */
app.listen(3000, () => {
	console.log("server start")
})

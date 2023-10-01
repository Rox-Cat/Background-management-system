/* 引入包 */
const express = require('express')
const cors = require('cors')  // cors
const bodyParser = require('body-parser')

/* 定义实例 */
const app = express()


/* 使用中间件 */
app.use(cors())

// extended为true时，值可以是任意类型
// extended为false时，值为数组或者字符串
app.use(bodyParser.urlencoded({
	extended: false
}))

// 用于处理json格式数据
app.use(bodyParser.json())

/* 绑定和监听端口 */
app.listen(3000, () => {
    console.log('server start')
})

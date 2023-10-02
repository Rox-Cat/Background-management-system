// 登陆注册路由
const express = require("express")
// 使用express路由
const router = express.Router()
// 导入路由处理模块
const loginHandler = require("../routerHandler/login.js")
// 导入express-joi
const expressJoi = require("@escook/express-joi")
const { login_limit } = require("../limit/login.js")


router.post("/register", expressJoi(login_limit), loginHandler.register)
router.post("/login",  expressJoi(login_limit), loginHandler.login)
module.exports = router

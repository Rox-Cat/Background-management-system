const joi = require("joi")

// string
// 账号验证
const account = joi.string().alphanum().min(6).max(12).required()
// 密码验证
const password = joi.string().alphanum().min(6).max(12).required()

exports.login_limit = {
    // 需要对req.body中的数据进行验证
    body: {
        account,
        password
    }
}
const Joi = require("joi")

exports.errors = function (req, res, next) {
	res.errorFunc = function (err, status = 1) {
		res.send({
			status,
			message: err instanceof Error ? err.message : err,
		})
	}
	next()
}

// 对不符合joi规则的情况进行报错

exports.errorsJoi = function (err, req, res, next) {
	// 4.1 Joi 参数校验失败
	if (err instanceof Joi.ValidationError) {
		return res.send({
			status: 1,
			message: err.message,
		})
	}
	// 4.2 未知错误
	res.send({
		status: 1,
		message: err.message,
	})
}

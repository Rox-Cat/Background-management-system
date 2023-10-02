const db = require("../db/index.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken") // 用于加密和解密
const jwtConfig = require("../jwtConfig/index.js")

exports.register = (req, res) => {
	const regInfo = req.body

	// 1. 判断前端数据是否存在
	if (!regInfo.account || !regInfo.password) {
		return res.send({
			status: 1,
			message: "账号或者密码不能为空",
		})
	}

	// 2. 判断前端账号是否已经存在
	// 第一个参数是执行语句，第二个参数是前端数据，第三个参数是处理返回的结果
	const sql = "select * from users where account = ?"
	db.query(sql, regInfo.account, (err, results) => {
		if (results.length !== 0) {
			// 2.1 账号存在
			return res.send({
				status: 1,
				message: "账号已经存在",
			})
		} else {
			// 2.2 使用加密中间件，加密密码
			regInfo.password = bcrypt.hashSync(regInfo.password, 10)

			// 2.3 把账号插入到mysql的user表中
			const sqlInsert = "insert into users set ?"
			const identity = "用户"

			const create_time = new Date() // 创建时间
			db.query(
				sqlInsert,
				{
					account: regInfo.account,
					password: regInfo.password,
					identity,
					create_time,
					status: 0, // 初始未冻结，状态为0
				},
				(err, results) => {
					// affectRows 影响的行数，如果插入失败表示行数不为1
                    console.log(err)
                    console.log(results)
					if (results.affectedRows !== 1) {
						return res.send({
							status: 1,
							message: "注册账号失败",
						})
					}
					return res.send({
						status: 1,
						message: "注册成功",
					})
				}
			)
		}
	})
}

exports.login = (req, res) => {
	const loginInfo = req.body

	// 1. 查看数据表中有没有前端传递的账号
	db.query(
		"select * from users where account = ?",
		loginInfo.account,
		(err, results) => {
			if (err) {
				return res.errorFunc(err)
			}
			if (results.length !== 1) {
				return res.errorFunc("登录失败")
			}
			// 2. 解密前端密码
            console.log(loginInfo.password)

            console.log(bcrypt.hash(loginInfo.password, 10))
            console.log(results[0].password)
			const compareResult = bcrypt.compareSync(
				loginInfo.password,
				results[0].password
			)

			if (!compareResult) {
				return res.errorFunc("密码错误")
			}
			// 3. 判断账号是否被冻结
			if (results[0].status === 1) {
				return res.errorFunc("账号被冻结")
			}

			// 4. 生成返回给前端的token信息
			// 剔除部分信息，利用剩余信息生成加密token
			const user = {
				...results[0],
				password: "",
				imageUrl: "",
				create_time: "",
				update_time: "",
			}

			// 生成token
			const token = jwt.sign(user, jwtConfig.jwtSecretKey, {
				expiresIn: "1h",
			})

			res.send({
				results: user,
				status: 0,
				message: "登录成功",
				token: "Bearer " + token,
			})
		}
	)
}

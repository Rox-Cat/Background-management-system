// 导入数据库
const mysql = require('mysql')


// 创建与数据的连接
const db = mysql.createPool({
    host: 'localhost',
    user: 'Rox7',
    password: '1362707648',
    database: 'back_system'
})


// 对外暴露数据库
module.exports = db
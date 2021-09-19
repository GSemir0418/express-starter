var express = require('express')
var app = express()

// 用于对GET /xxx 请求做出响应
app.get('/', function (req, res) {
    res.send('HelloooWorld!')
})

// 开启端口监听
app.listen(8080, function () {
    console.log('Example app listening on port 8080')
})
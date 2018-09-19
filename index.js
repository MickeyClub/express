/**

1. express简介

2. express的使用

    2.1 下载
        npm install express

 */


// 1. 加载express模块  是一个函数,也是一个对象
const express = require("express");

// 2. 创建app对象 类似于原生的server
// 调用express  返回app对象
const app = express()

// 4. 处理来自浏览器的请求
// 当浏览器请求服务器是index的时候 并且请求方式为get 这个请求会用回调函数处理
// 4.1 不用if else判断路由
// 4.2 服务器没有处理的url, 会自动404
app.get("/index", (req, res) => {
    // end方法: buffer  字符串
    // res.end("Hello Node")
    // res.end("Hello Node你好")  //乱码

    // express为res新增一个send方法
    // send方法: 参数几乎可以是任何类型
    // send自动在底层帮我们设置Content-Type 和编码
    res.send("Hello Node你好")  
    // res.send({"jake":12})  
    // res.status(404).send("Not Found")
})

// 3. 端口监听
app.listen(80, () => {
    console.log("服务启动成功");
})
const express = require("express")

const app = express();


/**
1. 注册路由
    app.get();      post请求 完全匹配
    app.post();     post请求 完全匹配
    app.use();      不限请求 制定匹配   /itemaaa不能匹配 
    app.all();      不限请求 完全匹配

 */

//  请求方式为get  请求url必须完全匹配
app.get("/index", (req, res) => {
    res.send("hello")
})

// get 请求
// url以  /public 开头  (用正则表示)
app.get(/^\/public(\/.+)*$/, (req, res) => {
    res.send("public ok")
})

//  请求方式为post  请求url必须完全匹配
app.post("/add", (req, res) => {
    res.send("ok")
})

/*
// 不限定请求方式
// 以制定url开头就可以
    注意 匹配url
    /item      可以匹配
    /item/aaa  可以匹配
    /itemaaa   不可以匹配
*/
app.use("/item", (req, res) => {
    res.send("item ok")
})

/*
1. 不限定请求方式
2. url必须完全匹配
*/
app.all("/submit", (req, res) => {
    res.send("submit ok")
})

app.listen(80, () => console.log("服务启动成功"))
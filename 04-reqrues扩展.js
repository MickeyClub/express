/*
1. 将一个目录设置为静态资源露露

*/
const express = require("express");
const path = require("path");


const app = express();

/**

对req的扩展
    1. req.query
        属性,是一个对象,存储get提交过来的数据
        /item?id190&xx=yy

    2. req.params
        路由参数
        app.get("item/:id")
        req.params.id

 */

// app.get("/item", (req, res) => {
//     console.log(req.query); //  item?name=jack&age=18 => { name: 'jack', age: '18' }
//     res.send("item ok")
// })

// /item/5
// /item/2018/09/19

app.get("/item/:year/:month/:day", (req, res) => {
    const str = req.params.year + req.params.month + req.params.day
    res.send(str)
})


app.listen(80, () => {
    console.log("服务启动成功");
})
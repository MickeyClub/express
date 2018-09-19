/*
1. 将一个目录设置为静态资源露露

*/
const express = require("express");
const path = require("path");


const app = express();

/**

一 对req的扩展
    1. req.query
        属性,是一个对象,存储get提交过来的数据
        /item?id190&xx=yy

    2. req.params
        取到路由参数
        app.get("item/:id")
        req.params.id

    

二 对res的扩展

    1. res.send()
       基于res.end()
       参数的类型可以更多
       自动设置Content-Type和编码./
    
    2. res.status().send();

    3. res.sendFile() 给1个文件的路径，会将这个文件读取出来直接响应给浏览器.


    4. res.json();

    5. redirect 重定向
 */

app.get("/item", (req, res) => {
    console.log(req.query); //  item?name=jack&age=18 => { name: 'jack', age: '18' }
    res.send("item ok")
})

// /item/5
// /item/2018/09/19

// app.get("/item/:year/:month/:day", (req, res) => {
//     const str = req.params.year + req.params.month + req.params.day
//     res.send(str)
// })


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"views","index.html"))
})


app.get("/login", (req, res) => {
    res.redirect("/")
})

app.get("/news", (req, res) => {
    res.json({id:1, title:"这是一段新闻",date:"2017/10/10"});
});



app.use("public",express.static(path.join(__dirname,"public")))


app.listen(80, () => {
    console.log("服务启动成功");
})
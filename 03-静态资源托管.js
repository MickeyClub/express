/*
1. 将一个目录设置为静态资源露露

*/
const express = require("express");
const path = require("path");


const app = express();

// 不限请求  只要以/public开头
app.use("/public", express.static(path.join(__dirname, "public")))


app.listen(80, () => {
    console.log("服务启动成功");
})
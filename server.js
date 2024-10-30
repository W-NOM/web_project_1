import express from "express"; //引入express模块
import path from "path"; // 引入path模块
import { fileURLToPath } from "url"; // 引入fileURLToPath
import fs from "fs"; // 引入文件系统模块
import util from "util"; // 引入util模块
const app = express(); //创建express实例

const __filename = fileURLToPath(import.meta.url); // 获取当前文件的路径
const __dirname = path.dirname(__filename); // 获取当前文件所在目录的路径

app.use(express.json()); // 用于解析JSON格式的请求体

app.use("/public", express.static("public")); //设置静态资源目录_/public
app.use("/src", express.static("src")); //设置静态资源目录_/src

app.get("/", function (req, res) {
  //主页
  res.sendFile(__dirname + "/public/home.html"); // 发送registration.html文件
});

app.get("/registration", function (req, res) {
  //注册页
  res.sendFile(__dirname + "/public/registration.html"); // 发送registration.html文件
});

app.get("/login", function (req, res) {
  //登录页

  res.send("还没做哈");
});

app.get("/download", function (req, res) {
  //下载页

  res.send("还没做哈");
});

app.get("/document", function (req, res) {
  //文档页

  res.send("还没做哈");
});

app.get("/news", function (req, res) {
  //新闻页

  res.send("还没做哈");
});

app.get("/error_404", function (req, res) {
  //错误页_404

  res.send("还没做哈");
});

app.get("/error_500", function (req, res) {
  //错误页_500

  res.send("还没做哈");
});

const server = app.listen(8081, function () {
  //监听端口并启动应用

  console.log("应用实例，访问地址为 http://127.0.0.1:8081/"); //输出应用实例的访问地址
});

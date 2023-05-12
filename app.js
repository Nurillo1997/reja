console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

// MongoDB call
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    }
    else {
        user = JSON.parse(data)//parse qilganda user.jsondagi stringlarni dataga aylantiradi
    }
});

//1: kirish codelari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2:Session code

//3:View code
app.set("views", "views");
app.set("view engine", "ejs");

//4:Router code
// app.get("/hello", function (reg, res) {
//     res.end(`<h1 style="background: red ">hello world by Nurillo</h1>`);
// });

// app.get("/gift", function (reg, res) {
//     res.end(`<h1>Siz sovg'alar bo'limidasiz</h1>`);
// });
// formni actioni ga taluqli
app.post("/create-item", (req, res) => {
    // console.log(req.body);
    // res.json({ test: "success" });
});

app.get("/", function (req, res) {
    res.render(`reja`);
});
app.get("/author", (req, res) => {
    res.render(`author`, { user: user });
});

module.exports = app;

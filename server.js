console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");//4dagi httpga tegishli
const fs = require("fs");

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
//public folderni ko'ra oladi, kelajakda styling filelar public folder ichiga joylashtiriladi
app.use(express.static("public"));
// bu yerda express json formatid kitib kelayotgan datani
// objectga o'zgartirib beradi chunki
// client va web serverlar orasidagi data json formatda bo'ladi
app.use(express.json());
// html formdan post qilingan malumotlarni express qabulqilib oladi
// aks holda qabul qilmaydi
app.use(express.urlencoded({ extended: true }));

//2:Session code

//3:View code
//views folderini ichidan o'qiydi
app.set("views", "views");
app.set("view engine", "ejs");//ejs orqali backentda frontend yasaladi
//4:Router code
//router hosil qilindi
app.get("/hello", function (reg, res) {
    res.end(`<h1 style="background: red ">hello world by Nurillo</h1>`);
});

app.get("/gift", function (reg, res) {
    res.end(`<h1>Siz sovg'alar bo'limidasiz</h1>`);
});
//formni actioni ga taluqli
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
});

app.get("/", function (req, res) {
    res.render(`harid`);
});
app.get("/author", (req, res) => {
    res.render(`author`, { user: user });
});

//server hosil qilindi
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfuly on port ${PORT}`);
});

// hammasidan keyin git init qilinadi
// va .gitignore file ochib unga node_modules
// fileni ignore qilish aytiladi
// git status deb tekshiramiz
// git add . (add qilamiz gitga)
// git status (qayta tekshiramiz)
// git reset (hamma add qilinga filelarin orqaga qaytaradi)
// git commit -m "BRR: BUILD build express web server" (commit qilish)
// git log --oneline(commitni tekshirish)
// git yana git satausni tekshirvolamiz
// git branch (qaysi branchligini  korsatadi)
// git commit --amend(agar remot qilingan bo'lsa amend qilinmaydi ohirgi yozgan codeni birlashtirish)
// :wq (write and quit) keyin git graphga train.js ni yozadi
// keyin gitga borib new repository ochamiz
// git remot (remoteni tekshirish)
// remotega ulash uchun pasdagi 3 commentdan foydalanamiz

//1)git remote add origin https://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@github.com/Nurillo1997/reja.git
//pastdagi link bilan token bog'landi
//git remote add origin https://github.com/Nurillo1997/reja.git
//2)git branch -M master
//3)git push -u origin master
// git log --oneline(tekshiramiz) bu yerda remot qizilda chiqadi
// git pull origin master(pull qilamiz masterni va eng ohirgi sourceni olamiz)
//BSSR MODULE bu backend da frontend qurish

//git reset --hard (o'zgartirishni orqaga qaytarish)
//git clean -df()

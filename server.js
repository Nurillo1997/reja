console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");//4dagi httpga tegishli
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
//server hosil qilindi
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfuly on port ${PORT}`);
}); 
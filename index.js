

// Module package EXTERNAL

// const moment = require("moment");

// setInterval(() => {
//     // const time = moment().format('YYYY-MM-DD');
//     const time = moment().format();
//     console.log(`hozirgi vaqt: ${time}`);
// }, 5000);

// package.jsondan js ni mjs ga o'zgartirib file nominiyam o'zgartirdim keyin
//inquirerni import qildim shunda ishladi/

//-------------------------input oladi qaytaradi----------------------

// const inquirer = require("inquirer");
// inquirer
//     //.prompt is aSync bashed function
//     .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting? " }])
//     .then((answer) => {
//         //raqam degan key orqali objectni value sini olamiz
//         console.log("man kiritgan raqam qiymati: ", answer.raqam);
//     })
//     .catch((err) => console.log(err));

//------------------------check validation----------------------------

// valid eamilmi, yoqmi check qiladi
// before using validator insatall it:=>npm install validator
//intmi yoqmi tekshiradi
// const test = validator.isEmail("foo@bar.com");

//intmi yoqmi tekshiradi
//const test = validator.isInt("100");

//valid IP mi yoqmi tekshiradi
// const test = validator.isIP("220.122.42.246"); // vali
// console.log("test:", test);

//------------------------------------------------------------------
// bu bizga random string beradi
// const { v4: uuidv4 } = require('uuid');
// const randomString = uuidv4();
// console.log("random String: ", randomString);

//------ randomni boshida ko'k Hello va ohirida qizil ! chiqarib beradi-------
//chalkni uninstall qilib npm i chalk@4.1.2 versiyasini o'rnatish kerak
// const chalk = require("chalk");
// const log = console.log;
//log(chalk.blue("Hello") + randomString + chalk.red("!"));
// log(chalk.blue(`uuid create: ${randomString}`));

// const calculate = require("./hissob.js");
// const result = calculate.kopaytirish(80, 10);
// console.log("natija:1 ", result);
// console.log("------------------------------");

// const result2 = calculate.bolish(80, 10);
// console.log("natija:2 ", result2);
// console.log("------------------------------");

// const result3 = calculate.qoshish(80, 10);
// console.log("natija:3 ", result3);
// console.log("------------------------------");

// const result4 = calculate.ayrish(80, 10);
// console.log("natija:4 ", result4);

//nodeJs ning tog'ridan tog'ri asosiy elementlarini printqiladi
// console.log(require("module").wrapper);

//agar require(moment) qilsak node moduledan izlaydi
//agar require(./hissob.js) qilsak desktoptad izlaydi
// console.log(arguments);

//npm install mometn qilsak local yani package.jasonga install bo'ladi
//npm install mometn --global qilsak global install qiladi

//Module package FILE

// const Account = require("./account");
// Account.tellMeAboutClass();
// Account.tellMeTime();
// const myAccount = new Account("Jhon", 200000, 2938483274897);
// myAccount.tellMeBalance();
// myAccount.withdrawMoney(100);
// myAccount.makeDeposite(200);
// myAccount.giveMeDetails();
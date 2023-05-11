console.log("Jack Ma maslahatlari");

const list = [
    "Yaxshi talaba bo'ling", //0-20
    "To'g'ri boshliq tanlang va ko'proq hato qiling", //20-30
    "O'zingizni ishlaringizni boshlang", //30-40
    "Siz kuchli bo'lgan narsalarni qiling", //40-50
    "Yoshlarga investitsya qiling", //50-60
    "Endi dam oling, foydasi yo'q endi" //60
]

// async function with ERROR throw and promise 
async function maslahatBering(a) {
    if (typeof a !== "number") throw new Error("Insert a number");
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
        });
    }
}

// asnc / wait
async function run() {
    let javob = await maslahatBering(65);
    console.log(javob);
    javob = await maslahatBering(31);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
}
run();


// async function

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("Insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return list[5];
//     }
// }


// call via then / catch
// console.log("Passed here 0");
// maslahatBering(20)
//     .then((data) => {
//         maslahatBering(30)
//             .then((data) => {
//                 maslahatBering(40)
//                     .then((data) => {
//                         console.log("javob", data);
//                     })
//                     .catch((err) => {
//                         console.log("Error:", err);
//                     });
//                 console.log("Passed here 1");
//                 console.log("javob", data);
//             })

//             .catch((err) => {
//                 console.log("Error:", err);
//             });
//         console.log("Passed here 1");
//         console.log("javob", data);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     });

// then / catch
// console.log("Passed here 0");
// maslahatBering(25)
//     .then((data) => {
//         console.log("javob", data);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     });
// console.log("Passed here 1");


// // callback function
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("Insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);
//         // return list[5];
//         // callback(null, list[5]);
//         // setTimeout(function () {
//         //     callback(null, list[5]);
//         // }, 5000);
//     }
// }
// console.log("Passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log('ERROR', err);
//     console.log("Javob", data);

// });
// console.log("Passed here 1");
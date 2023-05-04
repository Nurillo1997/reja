const moment = require("moment");
class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    tellMeBalance() {
        console.log(`balansingizda mavjud mablag' miqdori ${this.#amount}$`);
        return this.#amount;
    }
    withdrawMoney(amount) {
        if (this.#amount > amount) {
            this.#amount -= amount;
            console.log(`hissobingizdan ${amount} $ yechildi va qoldiq${this.#amount}`);
        }
        else {
            console.log(`yetarli mablag' mavjud emas qoldiq${this.#amount}`);
        }
    }
    makeDeposite(amount) {
        this.#amount += amount;
        console.log(`hissobingiz ${amount}$ ga to'ldirildi qoldiq ${this.#amount}`);

    }
    giveMeDetails() {
        console.log(`Salom janob ${this.name} sizning balansingiz ${this.#amount}$ ni tashkil qiladi`);
        console.log(`Hissob raqamingiz: ${this.#account_id}`);
    }
    static tellMeAboutClass() {
        console.log("Bu blass accountlarni yasash uchun hizmat qiladi");
    }
    static tellMeTime() {
        console.log(`Hozirgi vaqt: ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
    }

}
//bu classni boshqa joyda ishlatish uchun
module.exports = Account;
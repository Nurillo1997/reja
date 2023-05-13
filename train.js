

class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
        this.products = { non, lagmon, cola };
    }

    getTime() {
        const date = new Date();
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    log(message) {
        console.log(`${message}`);
    }

    qoldiq() {
        const message = `hozir ${this.getTime()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`;
        this.log(message);
        return message;
    }

    sotish(product, quantity) {
        if (this.products[product] >= quantity) {
            this.products[product] -= quantity;
            this[product] -= quantity;
            this.log(`${quantity}ta ${product} sotildi, qoldiq: ${this.products[product]}`);
        } else {
            this.log(`Kechirasiz, ${product} yetarli miqdorda mavjud emas!`);
        }
    }

    qabul(product, quantity) {
        this.products[product] += quantity;
        this[product] += quantity;
        this.log(`${quantity}ta ${product} qabul qilindi, hozirgi qoldiq: ${this.products[product]}`);
    }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq();
shop.sotish('non', 2);
shop.qabul('cola', 4);
shop.qoldiq();
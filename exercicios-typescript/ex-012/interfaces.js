"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point = { x: 12, y: 4 };
const thomas = {
    first: "Thomas",
    last: "Thurbano",
    nickname: "totu",
    id: 123123,
    sayHi() {
        return "asd";
    },
};
thomas.first = "Ana";
const shoes = {
    name: "Blue Balanceaga Shoes",
    price: 100,
    applyDiscount(amount) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(shoes.applyDiscount(0.25));
const marcel = {
    name: "Marcel",
    age: 12,
    breed: "husky",
    bark() {
        return true;
    },
};
const chewy = {
    name: "Chewy",
    age: 5,
    breed: "Shepherd",
    bark() {
        return false;
    },
    job: "guide dog",
};
const pierre = {
    first: "Pierre",
    last: "Vasconcelo",
    id: 123123,
    email: "asdasd@gmail.com",
    level: "jr",
    lang: "eng",
    nickname: "Pi"
};

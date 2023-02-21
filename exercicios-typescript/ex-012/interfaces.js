var point = { x: 12, y: 4 };
var thomas = {
    first: "Thomas",
    last: "Thurbano",
    nickname: "totu",
    id: 123123,
    sayHi: function () {
        return "asd";
    }
};
thomas.first = "Ana";
var shoes = {
    name: "Blue Balanceaga Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.25));
var marcel = {
    name: "Marcel",
    age: 12,
    breed: "husky",
    bark: function () {
        return true;
    }
};
var chewy = {
    name: "Chewy",
    age: 5,
    breed: "Shepherd",
    bark: function () {
        return false;
    },
    job: "guide dog"
};
var pierre = {
    first: "Pierre",
    last: "Vasconcelo",
    id: 123123,
    email: "asdasd@gmail.com",
    level: "jr",
    lang: "eng",
    nickname: "Pi"
};

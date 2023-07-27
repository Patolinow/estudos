"use strict";
function square(num) {
    return num * num;
}
function greet(person = "strange") {
    return console.log(`Hi there, ${person}`);
}
const doSomething = (person, age, isFunny) => {
    return console.log(`Hi ${person}! even though you're ${age}, you're really ${isFunny ? "funny" : "unfunny"}!`);
};
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
const add = (x, y) => {
    return x + y;
};
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
    return color.toLocaleUpperCase;
});
function printTwice(msg) {
    console.log(msg);
    console.log(msg);
}
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("Running...");
    }
}
console.log(square(9));
greet();
greet("fabio");
doSomething("ChickenFace", 76, false);
rando(2);
add(1, 5);
console.log(printTwice("Hello"));
//# sourceMappingURL=functions.js.map
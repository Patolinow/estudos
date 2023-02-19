function square(num) {
    return num * num;
}
function greet(person) {
    if (person === void 0) { person = "strange"; }
    return console.log("Hi there, ".concat(person));
}
var doSomething = function (person, age, isFunny) {
    return console.log("Hi ".concat(person, "! even though you're ").concat(age, ", you're really ").concat(isFunny ? "funny" : "unfunny", "!"));
};
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
var add = function (x, y) {
    return x + y;
};
var colors = ["red", "orange", "yellow"];
colors.map(function (color) {
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

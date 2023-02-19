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
console.log(square(9));
greet();
greet("fabio");
doSomething("ChickenFace", 76, false);

var age = 21;
age = 25;
age = "1";
age = false;
var coordinates = { x: 1, y: 35 };
coordinates = { lat: 234.232, long: 2342.344 };
var printAge = function (age) {
    console.log("You are ".concat(age, " years old"));
};
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = price.replace("$", "");
        return Number(price) * tax;
    }
    return price * tax;
}
printAge(24);
printAge("23");
console.log(calculateTax(12, 0.2));
console.log(calculateTax("$35.25", 0.5));
var stuffs = [2, "23", 24];
var otherStuffs = [2, 24];
var cords = [];
cords.push({ lat: 25, long: 64 });
cords.push({ x: 5, y: 23 });
var zero = 0;
zero = 0;
var mood = "sad";
mood = "happy";
var today = "Monday";

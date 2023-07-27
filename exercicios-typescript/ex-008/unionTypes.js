"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 21;
age = 25;
age = "1";
age = false;
let coordinates = { x: 1, y: 35 };
coordinates = { lat: 234.232, long: 2342.344 };
const printAge = (age) => {
    console.log(`You are ${age} years old`);
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
const stuffs = [2, "23", 24];
const otherStuffs = [2, 24];
const cords = [];
cords.push({ lat: 25, long: 64 });
cords.push({ x: 5, y: 23 });
let zero = 0;
zero = 0;
let mood = "sad";
mood = "happy";
let today = "Monday";
//# sourceMappingURL=unionTypes.js.map
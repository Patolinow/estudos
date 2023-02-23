"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore;
highScore = true;
highScore = 25;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuff;
stuff = [2, 5, 24, 8];
stuff = ["sim", "não", "talvez"];
// Create an array called colors that can hold a mixture of RGB and HSL color types
let colors = [];
colors.push({ h: 25, s: 32, l: 23 });
colors.push({ r: 244, g: 0, b: 25 });
console.log(colors);
const greet = (names) => {
    if (typeof names === "string") {
        return console.log(`Hello, ${names}!`);
    }
    let [headName, ...tailNames] = names;
    console.log(`Hello, ${headName}!`);
    if (!tailNames.length) {
        return;
    }
    return greet(tailNames);
};
greet("Fabio");
greet(["João", "Lucas", "Gustavo"]);

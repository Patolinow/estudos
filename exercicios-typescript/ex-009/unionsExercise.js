// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
highScore = true;
highScore = 25;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff;
stuff = [2, 5, 24, 8];
stuff = ["sim", "não", "talvez"];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [];
colors.push({ h: 25, s: 32, l: 23 });
colors.push({ r: 244, g: 0, b: 25 });
console.log(colors);
var greet = function (names) {
    if (typeof names === "string") {
        return console.log("Hello, ".concat(names, "!"));
    }
    var headName = names[0], tailNames = names.slice(1);
    console.log("Hello, ".concat(headName, "!"));
    if (!tailNames.length) {
        return;
    }
    return greet(tailNames);
};
greet("Fabio");
greet(["João", "Lucas", "Gustavo"]);

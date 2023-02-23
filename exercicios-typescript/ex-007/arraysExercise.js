"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(product) {
    let pricesSum = product.reduce((total, actual) => total + actual.price, 0);
    return pricesSum;
}
let myShopping = [
    { name: "coffee", price: 12.99 },
    { name: "milk", price: 5.99 },
    { name: "sugar", price: 4, quantity: 3 },
];
console.log(getTotal(myShopping));

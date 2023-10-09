"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const pigIt = (a) => {
    const pigSplited = a.split(" ");
    const allWordsOrNumbers = /\w/;
    let pigRemaked = [];
    pigSplited.forEach((pigSplit) => {
        if (pigSplit.match(allWordsOrNumbers)) {
            const firstPigLetter = pigSplit.slice(0, 1);
            const othersPigLetters = pigSplit.slice(1, pigSplit.length);
            pigRemaked.push(othersPigLetters + firstPigLetter + "ay");
        }
        else {
            pigRemaked.push(pigSplit);
        }
    });
    return pigRemaked.join(" ");
};
// Tests
chai_1.assert.strictEqual(pigIt("Pig latin is cool !"), "igPay atinlay siay oolcay !");
chai_1.assert.strictEqual(pigIt("This is my string"), "hisTay siay ymay tringsay");
//# sourceMappingURL=pigLatin.js.map
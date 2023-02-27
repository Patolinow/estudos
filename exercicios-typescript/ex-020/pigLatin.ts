import { assert } from "chai";

const pigIt = (a: string): string => {
  const pigSplited = a.split(" ");
  const allWordsOrNumbers = /\w/;
  let pigRemaked: string[] = [];

  pigSplited.forEach((pigSplit) => {
    if (pigSplit.match(allWordsOrNumbers)) {
      const firstPigLetter = pigSplit.slice(0,1)
      const othersPigLetters = pigSplit.slice(1,pigSplit.length)

      pigRemaked.push(othersPigLetters + firstPigLetter + "ay");
    }
    
     else {
      pigRemaked.push(pigSplit)
    }
  });

  return pigRemaked.join(" ")
};

// Tests
assert.strictEqual(pigIt("Pig latin is cool !"), "igPay atinlay siay oolcay !")
assert.strictEqual(pigIt("This is my string"), "hisTay siay ymay tringsay")
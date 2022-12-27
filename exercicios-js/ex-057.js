function findOdd(a) {
let aOdd = 0

a.forEach(aNumber => {
  let aCounter = 0

  a.forEach(aSearch => {
    if (aNumber == aSearch) {
      aCounter++
    }
  });

  if (aCounter % 2 !== 0) {
    aOdd = aNumber
  }
});

return aOdd
}

function doTest(x, y) {
  if (x !== y) {
    return console.log(`expected ${x} equal to ${y}`)
  }
}


doTest(findOdd([7]), 7)
doTest(findOdd([0]), 0);
doTest(findOdd([1, 1, 2]), 2);
doTest(findOdd([0, 1, 0, 1, 0]), 0);
doTest(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]), 4);
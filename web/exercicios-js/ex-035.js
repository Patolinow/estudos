function squareDigits(num) {
  let numConverted = num.toString().split("")
  let numSquared = []
  numConverted.forEach(element => {
    numSquared.push(Number(element) * Number(element))
  });
  return Number(numSquared.join(""));
}

console.log(squareDigits(3212))
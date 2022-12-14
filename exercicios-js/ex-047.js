function sumDigPow(a, b) {
  let splited = ''
  let isEqualToPowSum = []

  while (a <= b) {
    let powSum = 0

    splited = a.toString().split("")
    splited.forEach((element, index) => {
      powSum += Number(element) ** (index + 1)
    });

    if (powSum == a) {
      isEqualToPowSum.push(a)
    }

    powSum = 0
    a++
  }

  return isEqualToPowSum
}

console.log(sumDigPow(90, 100))
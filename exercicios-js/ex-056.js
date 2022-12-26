  function arrayDiff(a, b) {
    const diff = a.filter(numberA => !b.includes(numberA))
    return diff
  }

console.log(arrayDiff([1,2,2], [1,3]))
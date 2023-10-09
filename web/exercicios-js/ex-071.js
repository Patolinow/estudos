const multiplyAll = baseNums => multi => {
  if (!baseNums.length) {
    return baseNums
  }

  let [head, ...tail] = baseNums
  
  return [head * multi, ...multiplyAll(tail)(multi)]
}

console.log(multiplyAll([1, 2, 3])(2))
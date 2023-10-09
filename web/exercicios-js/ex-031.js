function findNextPower(val, pow_) {
  let i = 1
  while (Math.pow(i, pow_) < val + 1) {
    i++
  }
  return Math.pow(i, pow_)
}

console.log(findNextPower(8, 3))
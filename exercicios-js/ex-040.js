function getSum(a, b) {
  let together = [a, b]
  let sum = 0

  together.sort((c, d) => c > d ? 1 : -1)

  let i = together[0]
  while (i <= together[1]) {
    sum += i
    i++
  }

  return sum
}

console.log(getSum(1, 5))
function maxIntChain(n) {
  let c = 2
  let d = n - c
  let theBiggestOne = 0

  if (n < 5) {
    theBiggestOne = -1
  }

  else if (n % 2 != 0) {
    while (d !== c + 1) {
      d--
      c++
    }

    theBiggestOne = c * d
  }

  else {
    while (d - 1 !== c + 1) {
      d--
      c++
    }

    theBiggestOne = c * d
  }

  return theBiggestOne
}

console.log(maxIntChain(18))
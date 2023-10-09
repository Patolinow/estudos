function collatz(n) {
  let collatzSequence = [n, 1]
  
  
  while (n > 2) {
      n % 2 == 0 ? (n /= 2) : (n = n * 3 + 1)
    collatzSequence.push(n)
  
  }

  return collatzSequence.length
}

console.log(collatz(15))
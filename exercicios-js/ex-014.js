function amigos(a, b) {
  let divisoresA = 0
  let divisoresB = 0

  for (let i = 0; i < a; i++) {
    if (a % i === 0) {
      divisoresA += i
    }

  }

  for (let i = 0; i < b; i++) {
    if (b % i === 0) {
      divisoresB += i
    }

  }

  if (divisoresA === b && divisoresB === a) {
    return true
  }

  else {
    return false
  }

}

console.log(amigos(220, 284))
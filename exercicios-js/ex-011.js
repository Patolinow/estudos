function ate(n) {
  let total = ""
  let c = 0
  for (let i = 0; i < n; i++){
    c++
    total = total + " " + c
  }
  return total
}

console.log(ate(8))

//Par ou impar

function par(n) {
  if (n % 2 === 0) {
    return "Número par "
  }
  else {
    return "Número impar "
  }
}
// maior, igual ou menor

function maior(n) {
  if (n > 100) {
    return "maior que 100"
  }
  else if (n === 100) {
    return "igual a 100"
  }
  else {
    return "menor que 100"
  }
}

var at = 213

console.log(par(at) + maior(at))

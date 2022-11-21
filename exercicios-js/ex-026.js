let house = {
  budget: [900.87, 400, 300.23, 100],
  costs: [200, 500.17, 700.32, 1000]
}

function calcul() {
  let total = house.budget.reduce((all, current) => all + current) - house.costs.reduce((all, current) => all + current)
  if (total > 0) {
    return `Tudo tranquilo! seu saldo é positivo: \nR$${total.toFixed(2)}`
  }
  else {
    return `Cuidado, seu saldo é negativo: \nR$${total.toFixed(2)}`
  }
}

console.log(calcul(house))
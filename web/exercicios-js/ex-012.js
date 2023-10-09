function somaImposto(taxaImposto, custo) {

  return `Infelizmente o imposto anda muito alto esses dias, ${taxaImposto}% do que você comprou foram só em impostos, totalizando R$${custo + (custo / 100) * taxaImposto}`
}

console.log(somaImposto(14, 431))
function valorPagamento(valor, diasAt) {

  if (diasAt === 0) {
    return `Parabéns por pagar em dia! você só terá que pagar R$${valor}!`
  }

  else {
    return `Infelizmente você atrasou ${diasAt} dias, por conta disso terá que pagar R$${(valor / 100) * 3 + ((valor / 100) * 0.1) * diasAt} a mais, totalizando R$${valor + (valor / 100) * 3 + ((valor / 100) * 0.1) * diasAt}`
  }

}

console.log(valorPagamento(3424, 21))


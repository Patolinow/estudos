// rodar no https://sandbox.letscode.com.br/exercicio/15eed6ab-11dd-4e32-8fa8-51b80a1cf96a ou adicionar uma variavel com os valores da array e imprimir ao inves de retornar

export const ordenar = (lista) => {
    
  let impar = []
  let par = []

  lista.forEach((x)=>{ x % 2 == 0 ? par.push(x) : impar.push(x) })

  return par.sort((a, b) => a - b).concat(impar.sort((a, b) => b - a))
}
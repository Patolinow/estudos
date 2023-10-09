// um monte de variavel q to declarando pra nter risco de bugar, dps vejo noq da
let hmes = 0
let shora = 0
let inss = 0
let ir = 0
let sin = 0
let sbruto = 0
let sliquido = 0

// funções pra calcular cada parte do código
function calc_hmes(hm, sh) {
  return sbruto = hm * sh
}
function calc_inss(b) {
  return inss = b - (b / 100) * 89
}
function calc_ir(b) {
  return ir = b - (b / 100) * 92
}
function calc_sin(b) {
  return sin = b - (b / 100) * 95
}
function calc_final(b, inss, ir, si) {
  return sliquido = b - inss - ir - si
}

// td q aparece no terminal no final, preciso de um metodo melhor pra inserir valores iniciais de horas totais do mês e o salario por hora (hmes e shora)
console.log(`Seu salário bruto é: R$${calc_hmes(200, 34)}`)
console.log(`Mas o INSS comeu R$${calc_inss(sbruto)}`)
console.log(`E o imposto de renda comeu mais R$${calc_ir(sbruto)}`)
console.log(`Por fim, o sindico safado pegou R$${calc_sin(sbruto)}`)
console.log(`Aí só sobrou R$${calc_final(sbruto, inss, ir, sin)} na conta.`)


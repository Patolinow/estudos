function solution(n, b) {
  let binary = []
  let checked = []

  for (let i = 0; i < 2 ** n; i++) {
    // Converte o valor para binário e inverte ele para facilitar a parte seguinte
    binary.push(i.toString(2).split("").reverse())

    // Verifica se o número em binário possui o "1" na mesma posição que o valor binário do número "b"
    if (binary[i][b.toString(2).split("").length - 1] == 1 && b !== 0) {
      checked.push(i)
    }
  }

  return checked
}

console.log(solution(6, 1))
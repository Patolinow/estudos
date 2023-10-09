// link de acesso https://sandbox.letscode.com.br/exercicio/e42d5898-3957-4f18-8822-32e23c9bb229
export const solution = (encoded) => {
  let splited = encoded.split("")
  let matrix = [], k, i
  let phrase = []
  let aux = 0

  // seprando os pares de numeros por letra
  for (i = 0, k = -1; i < splited.length; i++) {
    if (isNaN(Number(splited[i - 1])) || splited[i - 1] == " ") {
      k++
      matrix[k] = []
    }

    matrix[k].push(splited[i])
  }

  //repetindo uma letra ou espaço pelo número de vezes determinado pelo número
  matrix.forEach((charset) => {

    charset.forEach((char, index, array) => {

      if (!isNaN(Number(char)) && !isNaN(Number(array[index + 1])) && array[index + 1] !== " ") {
        aux = Number(char + array[index + 1])
        for (let c = 0; c < aux; c++) {
          phrase.push(array[array.length - 1])
        }
      }
      else if (!isNaN(Number(char) && char !== " ")) {
        aux = Number(char)
        for (let c = 0; c < aux; c++) {
          phrase.push(array[array.length - 1])
        }

      }
    })
  })

  return phrase.join("")
}
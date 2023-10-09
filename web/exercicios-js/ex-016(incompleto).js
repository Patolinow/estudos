let matrix = [
  [0, 1, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 1, 1, 0],
  [1, 0, 0, 0, 1],
  [0, 1, 1, 0, 1]
]
let matrixunited = []
let i = 0
let biggest = 0
let counter = 0

matrix.forEach((line, index) => {
  matrix[index].forEach((col) => { matrixunited.push(col) })
})

while (i < matrixunited.length) {
  let c = i
  let stop = false
  if (matrixunited[c] === 1 && (matrixunited[c + 1] === 1 || matrixunited[c + 5])) {
    counter++
    while (stop !== true) {
      if (matrixunited[c]) {

      }
    }
  }
  else {
    i++
  }
}

console.log(matrixunited)
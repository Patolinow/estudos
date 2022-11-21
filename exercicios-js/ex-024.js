let initial = [1, 2, 4, 1, 2, 2, 7, 8, 2, 4, 6, 7, 8, 1]
let array = initial.sort()
let repeatedQuantity = 1

for (let i = 0; i < array.length; i++) {

  if (array[i] === array[i+1]) {
    repeatedQuantity += 1
  }

  else if (repeatedQuantity > 1){
    console.log(`O número ${array[i]} se repetiu ${repeatedQuantity} vezes.`)
    repeatedQuantity = 1
  }

}
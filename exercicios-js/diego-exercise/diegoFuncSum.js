const sum = function(array) {
  if(array.length == 1){
    return array[0]
  }

  let [head, ...tail] = array

  return head + sum(tail)
} 

console.log(sum([1,2,3,4,5,6]))


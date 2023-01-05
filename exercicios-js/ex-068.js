const reverse = function (array) {
  if (array.length == 1) {
    return array
  }

  let [head, ...tail] = array

  return reverse(tail).concat(head)
}

console.log(reverse(["a", 1, null, 14, "two"]))
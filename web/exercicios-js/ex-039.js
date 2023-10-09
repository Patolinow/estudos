function stray(numbers) {
  let amogus = 0
 numbers.forEach((element, index, value) => {
    if (value[index + 1] == element || value[index - 1] == element || value[index - 2] == element || value[index + 2] == element) {
    }
    else {
      amogus = element
    }
  });

  return amogus
}

console.log(stray([3, 17, 17]))
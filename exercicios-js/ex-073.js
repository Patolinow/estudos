const factory = (multiplayer) => ([head, ...tail]) => {
  if (!tail.length) {
    return [head * multiplayer]
  }

  return [head * multiplayer, ...factory(multiplayer)(tail)]
}

// test
const myArray = [1, 2, 3, 4, 5]
const threes = factory(3)

const assert = (x, y) => {
  x.join('') !== y.join('') ? console.log(`expected ${x} deeply equal to ${y}`) : console.log("Obrigado! agora a fábria está salva")
}

assert(threes(myArray), [3, 6, 9, 12, 15])
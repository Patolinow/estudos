function pairZeros(arr) {
  counter = 0

  function pairing([head, ...tail], counter) {
    if(head === undefined) {
      return []
    }

    if (!tail.length) {
      counter++

      return head == 0 && counter % 2 == 0 ? [] : [head]
    }

    if (head == 0) {
      counter++

      return counter % 2 == 0 ? [...pairing(tail,counter)]  : [head, ...pairing(tail, counter)]
    }

      return [head, ...pairing(tail, counter)]
  }

  return pairing(arr, counter)
}

// Tests
function assert(x, y) {
  return x.join("") != y.join("") ? console.error(`expected ${x} to deeply equal ${y}`) : console.log(`all fine!`)
}

assert(pairZeros([]), [])

assert(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0]), [1, 0, 1, 2, 0, 3, 0])

assert(pairZeros([0, 0, 0]), [0, 0])

assert(pairZeros([1]), [1])

assert(pairZeros([0, 0]), [0])
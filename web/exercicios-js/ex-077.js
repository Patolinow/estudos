const zipWith = function (fn, a0, a1) {
  let [val0, ...arr0] = a0
  let [val1, ...arr1] = a1

  if (val0 == undefined || val1 == undefined) {
    return []
  }

  else if (!arr1.length || !arr0.length) {
    return [fn(val0,val1)]
  }
  
  console.log(fn(val0, val1))
  return [fn(val0,val1), ...zipWith(fn, arr0, arr1)]
}

// Test
function assert(x, y) {
  x.join("") != y.join("") ? console.error(`expected ${x} to deep equal to ${y}`) : console.log(`tudo certo com a array [${x}]!`)
}

assert(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]), [1, 10, 100, 1000]);
assert(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]), [4, 7, 7, 4, 7, 7]);
assert(zipWith(function (a, b) { return a + b; }, [0, 1, 2, 3], [0, 1, 2, 3]), [0, 2, 4, 6]);

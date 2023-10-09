const reverse = function ([head,...tail]) {
  if (!tail.length) {
    return [head]
  }

  return [...reverse(tail),head]
}

console.log(reverse(["a", 1, null, 14, "two"]))
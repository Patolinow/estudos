function findWaldo(crowd) {
  let y = 0, x = 0, yx = [];

  // while (y < crowd.length) {
  //   if (crowd[y].includes("W")) {
  //     yx = y
  //   }
  //   y++
  // }

  if (crowd[y].includes("W")) {
    while (crowd[y][x] !== "W") {
      x++
    }
  }
  else {
    while (crowd[y][x] !== "B") {
      x++
    }
  }

  yx.push(y, x)

  return yx
}

console.log(findWaldo(
  ["             ",
    "         w   ",
    "   w         ",
    "~~~~~~~~~~~~~",
    ".~..~~.~~~..~",
    "...P......P..",
    "......P..P...",
    "..PW........."]))
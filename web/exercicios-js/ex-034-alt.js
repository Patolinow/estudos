function findWaldo(crowd) {
  let i, x, y = 0
  let yx = []

  for ( i = 0; i < crowd.length; i++) {
    if(crowd[i].includes("W") || crowd[i].includes("B")) {
      y = i
    }
  }

  for ( i = 0; i < crowd[y].length; i++) {
    if(crowd[y][i] === "W" || crowd[y][i] === "B"){
      x = i
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
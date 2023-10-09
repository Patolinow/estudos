const countSquares = function (cuts) {
  return cuts > 0 ? (cuts + 1) * (cuts + 1) * (cuts + 1) - ((cuts - 1) * (cuts - 1) * (cuts - 1)) : 1
}

console.log(countSquares(5))
f = "f"
m = "m"
hd = 0

function ideal(g, h) {
  if (g === m) {
    hd = (72.7*h) - 58
    return hd
  }
  else {
    hd = (62.1*h) - 44.7
    return hd
  }
}

console.log(`Seu peso ideal é ${ideal(m, 1.59)}kg`)
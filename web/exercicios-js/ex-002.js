function aposentar(g, i, c) {
  if ((g === m && i >= 65 && c >= 10) || (g === m && i >= 63 && c >= 15) || (g === f && i >= 63 && c >= 10) || (g === f && i >= 61 && c >= 15)) {
    return "Aposentável"
  }
  else {
    return "Não aposentável"
  }
}
m = ""
f = ""

console.log(aposentar(f, 61, 15))
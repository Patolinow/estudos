function reverter(str) {
  let separar = str.split("")
  let reverter = separar.reverse()
  let juntar = reverter.join("")
  return juntar
}
console.log(reverter("onibus"))
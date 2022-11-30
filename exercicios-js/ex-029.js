function toCamelCase(str) {
  let letters = str.split("")
  for (let i = 0; i < letters.length; i++) {
    if (letters[i].toLowerCase() == letters[i].toUpperCase()) {
      letters[i + 1] = letters[i + 1].toUpperCase()
      letters.splice(i, 1)
    }
  }
  return letters.join("")
}

console.log(toCamelCase("Grande-teste"))

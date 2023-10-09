function lastSurvivor(letters, coords) {
  let splitedLetters = letters.split("")
  coords.forEach(element => {
    splitedLetters.splice(element, 1)
  });
  return splitedLetters.join()
}

console.log(lastSurvivor("zbk", [2, 1]))
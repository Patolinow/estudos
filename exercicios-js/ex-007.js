function anagrama(str1, str2) {
  if (str1.length != str2.length) {
    return "Não são anagramas"
  }

  let arr1 = str1.split("").sort().join("")
  let arr2 = str2.split("").sort().join("")
  let ana = (arr1 === arr2)


  if (ana === true) {
    return "Anagramas!"
  } else {
    return "Não são anagramas"
  }
}
console.log(anagrama("regalia", "alegria"))
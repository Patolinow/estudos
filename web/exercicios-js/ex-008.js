function sub(str1, str2) {
  let arr1 = str1.split("")
  let arr2 = str2.split("")
  let final = []
  let loopkill = 0
  let i = 0

  while (i < arr1.length) {

    for (let c = 0; c < arr2.length; c++) {

      if (arr1[i] === arr2[c]) {
        final.push(arr2[c])
        arr2.splice(c, 1)
        i++
      }

      else if (loopkill > 200) {
        i++
      }

      else {
        loopkill += 1
      }
    }
  }

  if (final.join("") === str1) {
    return `${final.join("")} é uma subsequência de ${str2}`
  }

  else {
    return `${str1} NÃO é uma subsequência de ${str2}`
  }
}

console.log(sub("teste", "triste"))
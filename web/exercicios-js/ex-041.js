function isIsogram(str) {
  let is = true
  for (let i1 = 0; i1 < str.length; i1++) {
    str.split("").forEach((element, i2, letters) => {
      if (str.toLowerCase()[i1] == str.toLowerCase()[i2] && i2 != i1){
        is = false
      }
    });
  }
  return is
}

console.log(isIsogram('traum'))
function spinWords(string){
  let stringNow = []

  string.split(" ").forEach(word => {
    if (word.length > 4) {
      stringNow.push(word.split("").reverse().join(""))
    } else {
      stringNow.push(word)
    }
  });
  return stringNow.join(" ")
}

console.log(spinWords("You are almost to the last test"))
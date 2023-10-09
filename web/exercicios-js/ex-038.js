function sayMyName (name = "Fabio") {
  if (name === "") {
    throw "Nome é obrigatorio"
  }

  console.log(name)
}

try {
  sayMyName()

} catch (e) {
  console.log(e)

}

console.log("após o try")
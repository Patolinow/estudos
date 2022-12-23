const questions = [
  "O que aprendi hoje?",
  "O que me deixou puto e o que eu poderia fazer pra melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?"
]

const asks = (index = 0) => {
  process.stdout.write("\n" + questions[index] + "\n > ")
}

asks()
 
const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    asks(answers.length)
  } 
  else {
    process.exit()
  }
})


process.on('exit', () => {
  console.log(`
  Legal Fabio!

  O que vc aprendeu hj foi:
  ${answers[0]}

  O que te aborreceu e poderia melhorar foi:
  ${answers[1]}

  O que te deixou feliz hoje:
  ${answers[2]}

  Você ajudou ${answers[3]} pessoas hoje!

  Volte amanhã para novas reflexões
  `)
})

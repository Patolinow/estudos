// Declarando tempo do prazo final
const endDate = new Date("dec 12, 2022 20:15:00").getTime()

// Cronômetro que coloca o tempo no HTML
function countdown() {

  let now = new Date().getTime()
  let timeLeft = endDate - now

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  let hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  let minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60))
  let seconds = Math.floor(timeLeft % (1000 * 60) / 1000)

  document.getElementById('times').innerHTML = `<h2>${(days).toLocaleString('pt-br', { minimumIntegerDigits: 2 })}
: ${(hours).toLocaleString('pt-br', { minimumIntegerDigits: 2 })}
: ${(minutes).toLocaleString('pt-br', { minimumIntegerDigits: 2 })}
: ${(seconds).toLocaleString('pt-br', { minimumIntegerDigits: 2 })}</h2>`
}

const every = setInterval(countdown, 1000)
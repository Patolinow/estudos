// Conseguindo o tempo que falta até o foguete lançar
const date = new Date()

let days = 12 - date.getDate()
let hours = 14 - date.getHours()
let minutes = 30 - date.getMinutes()
let seconds = date.getSeconds()

// Cronômetro que coloca o tempo no HTML
function countdown() {

  if ((seconds -= 1) == 0) {
    seconds = 59
    minutes--
  }
  if (minutes == 0) {
    minutes = 59
    hours--
  }
  if (hours == 0) {
    hours == 23
    days--
  }

  document.getElementById('times').innerHTML = `<h2>${(days).toLocaleString('pt-br', { minimumIntegerDigits: 2 })}
: ${(hours).toLocaleString('pt-br', { minimumIntegerDigits: 2 })}
: ${(minutes).toLocaleString('pt-br', { minimumIntegerDigits: 2 })}
: ${(seconds).toLocaleString('pt-br', { minimumIntegerDigits: 2 })}</h2>`
}

const every = setInterval(countdown, 1000)
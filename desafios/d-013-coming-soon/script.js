// Declarando tempo do prazo final
const endDate = new Date("2023-02-01T16:00:00").getTime()

// Cronômetro que coloca o tempo no HTML
function countdown() {

  let now = new Date().getTime()
  let timeLeft = endDate - now

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  let hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  let minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60))
  let seconds = Math.floor(timeLeft % (1000 * 60) / 1000)

  if (seconds < 0) {
    days = 0
    hours = 0
    minutes = 0
    seconds = 0
  }

  document.getElementById('days').innerHTML = `${(days).toLocaleString('pt-br', { minimumIntegerDigits: 2 })}`
  document.querySelector('#hours').innerHTML = `${(hours).toLocaleString('pt-br', {minimumIntegerDigits: 2})}`
  document.getElementById('minutes').innerHTML = `${(minutes).toLocaleString('pt-br', {minimumIntegerDigits: 2})}`
  document.querySelector('#seconds').innerHTML = `${(seconds).toLocaleString('pt-br', {minimumIntegerDigits: 2})}`
}

const every = setInterval(countdown, 1000)

// Funções para abertura e fechamento do modal
const enterModal = document.getElementById('enterModal')
const wrapper = document.getElementById('wrapper')
const submit = document.querySelector('#submit')

enterModal.onclick = function openModal() {
  wrapper.style.display = "flex"
}

submit.onclick = function closeModal() {
  wrapper.style.display = "none"
}
const button = document.getElementById("dWModeButton")
const root = document.querySelector(":root")

button.onclick = function darkAndLight() {
  button.classList.toggle("active")
  root.style.setProperty()
}
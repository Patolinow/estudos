const button = document.getElementById('openModal')
const modal = document.querySelector('.modal-wrapper')

button.onclick = function openModal() {
  modal.style.display = "flex"
}

document.addEventListener("keydown", function closeModal(pressed) {
  if (pressed.key === "Escape" && modal.style.display == "flex") {
    modal.style.display = "none"
  }
})
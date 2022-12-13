const menu = document.getElementById("menu")
const toHide = document.querySelector(".hidden")
const option = document.querySelector(".option")

menu.onclick = function OpenAndClose() {
toHide.classList.toggle("hide")
}
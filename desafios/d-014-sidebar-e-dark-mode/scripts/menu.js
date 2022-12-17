const menu = document.getElementById("menu")
const toHide = document.querySelectorAll(".hidden")
const logout = document.querySelector("footer")

menu.onclick = function OpenAndClose() {
toHide.forEach(element => {
  element.classList.toggle("hide")
})

logout.classList.toggle("spaced")
}
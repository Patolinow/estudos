const menu = document.getElementById("menu")
const toHide = document.querySelectorAll(".hidden")
const logout = document.querySelector("footer")
const nav = document.querySelector("nav")

menu.onclick = function OpenAndClose() {
toHide.forEach(element => {
  element.classList.toggle("hide")
})

nav.classList.toggle("expanded")
logout.classList.toggle("spaced")
}
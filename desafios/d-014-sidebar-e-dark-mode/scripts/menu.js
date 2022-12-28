const menu = document.getElementById("menu")
const mutable = document.querySelectorAll(".mutable")
const logout = document.querySelector("footer")
const nav = document.querySelector("nav")
const toHide = document.querySelectorAll(".toHide")

menu.onclick = function OpenAndClose() {
mutable.forEach(element => {
  element.classList.toggle("invisible")
})

toHide.forEach(element => {
  element.classList.toggle("hided")
});

nav.classList.toggle("expanded")
logout.classList.toggle("spaced")

}


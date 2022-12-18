const button = document.getElementById("dWModeButton")
const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')
const currentTheme = localStorage.getItem('theme')

if (currentTheme == 'dark') {
  document.body.classList.toggle('dark-theme')
  button.classList.toggle("active")
} 
else if (currentTheme == 'light') {
  document.body.classList.toggle('light-theme')
}

button.addEventListener('click', function() {
  button.classList.toggle("active")

  if (prefersDarkTheme.matches) {
    document.body.classList.toggle('light-theme')
    var theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
  } 

  else {
    document.body.classList.toggle("dark-theme")
    var theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
  }
  
  localStorage.setItem('theme', theme)
}) 
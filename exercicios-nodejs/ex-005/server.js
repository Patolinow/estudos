const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", function (req, res) {
  const items = [
    {
    title: "D",
    message: "esenvolvedor"
  },
  {
    title: "E",
    message: "JS"
  },
  {
    title: "M",
    message: "uito"
  },
  {
    title: "A",
    message: "nimado com esse"
  },
  {
    title: "I",
    message: "ncrível framework"
  },
  {
    title: "S",
    message: "ensacional!"
  }
]

  const subtitle = "Uma linguagem de modelagem para criação de paginas html utilizando js"
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle
  })
})

app.get("/sobre", function (req, res) {
  res.render("pages/about")
})

app.listen(5500)
console.log("rodando...")
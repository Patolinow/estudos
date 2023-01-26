console.log('inicializando...')

const { query } = require('express')
const express = require('express')
const app = express()

app.listen('3000')

app.use(express.json())

app.route('/').post((req, res) => {
  const {nome, livros_favoritos} = req.body
  res.send(`meu nome é ${nome} e eu adoro os livros ${livros_favoritos.join(" e ")}`)
})

// app.route('/').get((req, res) => res.send("ola"))

// app.route('/:nome').get((req, res) => {
//   res.send(req.params.nome)
// })

// app.route('/id/:nome').get((req, res) => {
//   res.send(req.params.nome)
// })

app.route('/').get((req, res) => res.send(req.query.nome))

app.route('/about/user').get((req, res) => res.send(req.query.id))
const express = require('express')

const app = express()

app.listen('3000')

// middleware
app.use(express.json())

// POST
app.route('/').post((req, res) => {
  res.send(req.body)
})

// GET
app.route('/').get((req, res) => {
  res.send(author)
})

// PUT
let author = "fabio"

app.route('/').put((req, res) => {
  author = req.body.author
  res.send(author)
})

// DELETE
app.route('/:id').delete((req, res) => {

  res.send(req.params.id)
})
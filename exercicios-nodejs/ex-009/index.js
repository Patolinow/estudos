//https://api.github.com/users/patolinow

const axios = require('axios')
const express = require('express')
const app = express()

app.listen('3000')
app.use(express.json())

app.route('/').get((req, res) => {
  axios.get('https://api.github.com/users/patolinow')
    .then(githubResponse => { res.send(`<img src="${githubResponse.data.avatar_url}"/>`) 
  
  })
    .catch(error => console.error(error))
})


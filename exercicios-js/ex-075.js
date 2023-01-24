function imprimirDado(dado) {
  console.log('outras tarefas')
  setTimeout(() => { dado() }, 1000)
}

imprimirDado(function () {
  return console.log('foda na function dentro de uma function')
})

const https = require('https')
const api = 'https://jsonplaceholder.typicode.com/users?_limit=2'
https.get(api, res => {
  console.log(res.statusCode)
})

console.log('conectando API...')
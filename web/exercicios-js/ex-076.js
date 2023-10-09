console.log('pedindo uber')

let aceitar = true

const promise = new Promise((resolve, reject) => {
  return aceitar ? resolve('uber chegou pae') : reject('deu tudo errado')
})

console.log('aguardando...')

setTimeout(() => { promise.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log('finalizada')) }, 1000)


// fetch('https://api.github.com/users/patolinow').then(response => {
//   response.json().then(data => {
//     fetch(data.repos_url).then(res => {
//       res.json().then(d => {
//         console.log(d)
//       })
//     })
//   })
// })


async function start() {
  try{
    const result = await promise
    setTimeout(() => { console.log(result + " agora numa async await") }, 2000)
  }

  catch(err) {
    console.log(err)
  }

  finally {
    console.log('finalizado numa async await')
  }
}

start()
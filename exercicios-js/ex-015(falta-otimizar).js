//acesso em https://sandbox.letscode.com.br/exercicio/38997d7d-70de-4f27-ac2b-d667dcc21155

export const solution = ({duration, playlist}) => {
  let duracao = []
  let sTotal = 0
  let c = [0]
  let stop = false

// separa o valor de duration do objeto
  for (const x in playlist) {
      if (playlist[x] === null) {
      }

      else {
      duracao.push(playlist[x].duration)
      }
  }
  
// separa para multiplicar e somar os valores que estão dentro de duration
// também separa o indice da array
  duracao.forEach((min, i)=>{
      let current = Number(min[0]) * 60
      sTotal = (current + Number(min[2] + min[3])) + sTotal

      if (sTotal > duration*60 && stop === false) {
          c.push(i)
          stop = true
      }

  })
  
 return c
}

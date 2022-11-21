// link da atividade https://sandbox.letscode.com.br/exercicio/0de90875-62c3-4cb3-8dc7-779606c81671

export const palindromo = (palindromo) => {

  let atual = palindromo.split("")
  let final = []
  let reverso = []
  let i = 0
  
// copia e inverte pra juntar no final
  atual.forEach((x)=>{

      if (final.some((val)=>{ return val == x })) {

          final.forEach((k)=>{
              if(k === x) {
                  
              }
          })
      }
      else {
          final.push(x)
      }
  })
  reverso = final.slice(0).reverse()


  //remove pequenas incoerências
  if (final.concat(reverso).length > atual.length) {
      final.pop()
  }

  else {
      while (final.concat(reverso).length < atual.length) {
          final.push(atual[2])
      }
  }
  //envia no fim

  return final.concat(reverso).join("")
}
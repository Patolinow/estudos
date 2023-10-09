// acesso em https://sandbox.letscode.com.br/exercicio/f8a6b6fd-60bf-446c-8a5a-be114d065ce2

export const solution = (matrix) => {
  let allNames = []
  let resultado = []
  let repetidos = 0
  let atual = ""
  let errado = 0
  
//tirando os nomes (que estão agrupados em pares) de dentro da matriz para transformar em algo uniforme
  for (let nameOne = 0; nameOne < 2; nameOne++) {
      for (let nameTwo in matrix) {
          allNames.push(matrix[nameTwo][nameOne])
      }
  
  }
  
  allNames.sort()
  
// achando a quantidade de nomes repetidos. Se repetir mais de 2 vezes, significa q o grupo possui mais de 3 integrantes
  for (let name = 0; name < allNames.length; name++){
    if(allNames[name] == allNames[name+1]){
        
      if (atual == allNames[name]) {
        errado += 0.5
      }
  
      repetidos += 1
      atual = allNames[name]
    }
  }
  
  resultado.push(Math.ceil((allNames.length-repetidos)/3-errado))
  resultado.push(errado)
  
  return resultado
  }
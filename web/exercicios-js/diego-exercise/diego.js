/*
  A função greeting receberá uma lista de strings, como o exemplo a seguir:
  ['bar', '--name', 'javascript', 'foo', '--hello', 'world']

  Você deverá retornar da função um objeto com o seguinte conteúdo:
  {
    name: 'javascript',
    hello: 'world'
  }
  
  Observação: No meio da lista pode haver string aleatórias, como:
  ['something', '--id', '1337', 'hello', 'mundo', '42']
  
  Resultado:
  {
    id: '1337'
  }
*/

/** @param {string[]} argv */
function parseArgv(argv) {
let listOfSomething = {}
let test = ''

  argv.forEach((element, index, value) => {

    if (element.includes("--")) {
      listOfSomething = Object.assign(listOfSomething,{[element.slice(2)]: value[index + 1]})
    }
    
  });

  return listOfSomething
}

console.log(parseArgv(process.argv))
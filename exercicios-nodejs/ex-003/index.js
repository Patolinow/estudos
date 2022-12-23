const timeOut = 3000
const cleartime = 15001
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)

const checking = () => console.log("checking!")

const interval = setInterval(checking, timeOut)

setTimeout( () => clearInterval(interval), cleartime)
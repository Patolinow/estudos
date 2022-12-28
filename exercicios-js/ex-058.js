// Stack(pilha)
class Stack {
  constructor() {
    this.data = []
    this.top = - 1
  }

  push(value) {
    this.top++
    this.data[this.top] = value
    return this.data
  }

  pop() {
    if (this.top < 0) return undefined
    const poppedTop = this.data[this.top]
    delete this.data[this.top]
    this.top--
    return poppedTop
  }

  peek() {
    return this.top >= 0 ? this.data[this.top] : undefined
  }
}

const stack = new Stack()

stack.push('learning')
stack.push('data')
console.log(stack.peek())




// Queue(fila)

class Queue {
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.push(item)
    console.log(`${item} chegou na fila`)
   }

   dequeue() {
    const item = this.data.shift()
    console.log(`${item} saiu da fila`)
   }
}

const fila = new Queue()

fila.enqueue('arroz')
console.log(fila)
fila.enqueue('batata')
console.log(fila)
fila.enqueue('frango')
console.log(fila)
fila.dequeue()
console.log(fila)

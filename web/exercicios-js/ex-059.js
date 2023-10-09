// EX1
class Pessoa {
  constructor() {
    this.id = ~~(Math.random() * 100000)
  }

  dizerNome() {
    console.log(this.nome)
  }
}

const pessoa = new Pessoa()

console.log(pessoa)


// EX2
class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  get area() {
    return this.#calcularArea()
  }

  #calcularArea() {
    return this.altura * this.largura
  }
}

let poligono = new Poligono(4, 5)

console.log(poligono.area)

// EX3

class Atleta {
  peso;
  categoria;

  constructor(peso) {
    this.peso = peso
  }

  definirCategoria() {
    if (this.peso <= 50) {
      return this.categoria = 'infantil'
    }

    else if (this.peso <= 65) {
      return this.categoria = 'juvenil'
    }

    else {
      return this.categoria = 'adulto'
    }
  }
}

const atleta = new Atleta(51)

console.log(atleta.definirCategoria())

class Lutador extends Atleta {
  constructor(peso) {
    super(peso)
  }

  definirCategoria() {
    if (this.peso <= 54) {
      return this.categoria = 'pena'
    }

    else if (this.peso <= 65) {
      return this.categoria = 'leve'
    }

    else if (this.peso <= 75) {
      return this.categoria = "meio-leve"
    }

    else {
      return this.categoria = 'pesado'
    }
  }
}

const lutador = new Lutador(70)
console.log(lutador.definirCategoria())

// EX4

class Parafuso {
  constructor() {
    if (this.constructor === Parafuso) {
      throw new Error('Classe abstrata não pode ser instânciada')
    }
  }

  get tipo() {
    throw new Error('metodo "get tipo()" precisa ser implementado')
  }
}

class Fenda extends Parafuso {
  constructor() { super() }

  get tipo() {
    return 'fenda'
  }
}

class Philips extends Parafuso {
  constructor() { super() }

  get tipo() {
    return 'philips'
  }
}

class Allen extends Parafuso { }

let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(`${fenda.tipo}, ${philips.tipo}`)
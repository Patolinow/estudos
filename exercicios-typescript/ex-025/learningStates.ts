interface State {
  react():string
}

class Happy implements State {
  react(): string {
    return "I am happy :)"
  }
}

class Sad implements State {
  react(): string {
    return "I am sad :("
  }
}

class Person {
  state: State;

  constructor() {
    this.state = new Happy()
    
  }

  changeState(state: State) {
    this.state = state;
  }

  react() {
    return this.state.react()
  }
}

const person = new Person()
console.log(person.react())

person.changeState(new Sad())
console.log(person.react())

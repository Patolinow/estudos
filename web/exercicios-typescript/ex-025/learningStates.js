"use strict";
class Happy {
    react() {
        return "I am happy :)";
    }
}
class Sad {
    react() {
        return "I am sad :(";
    }
}
class Person {
    state;
    constructor() {
        this.state = new Happy();
    }
    changeState(state) {
        this.state = state;
    }
    react() {
        return this.state.react();
    }
}
const person = new Person();
console.log(person.react());
person.changeState(new Sad());
console.log(person.react());
//# sourceMappingURL=learningStates.js.map
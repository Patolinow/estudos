const {inherits} = require('util')
const { EventEmitter } = require('events')

function Character(name) {
  this.name = name
}


inherits(Character, EventEmitter)

const chapolin = new Character('chapotin')

chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado!`))

console.log("e quem podera me defender?")
chapolin.emit('help')
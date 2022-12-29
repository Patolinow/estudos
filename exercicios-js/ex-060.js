class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }

  isWorthIt() {
    if (this.draft - this.crew * 1.5 > 20) {
      return true
    }

    else {
      return false
    }
  }
}

const ship = new Ship(20, 20)

console.log(ship.isWorthIt())
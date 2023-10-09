class MarioAdapter {
  constructor(mario) {
    this.mario = mario;
  }

  attack(target) {
    return target.health -= this.mario.jumpAttack();
  }
}

// Teste
class Mario {
  jumpAttack() {
    console.log('Mamamia!');
    return 3;
  }
}

const marioAdapter = new MarioAdapter(new Mario());
const target = { health: 33 };

function assert(x, y) {
  x !== y ? console.log('expected' + x + 'deeply equal to' + y) : console.log('passou')
}


assert(marioAdapter.attack(target), 30)

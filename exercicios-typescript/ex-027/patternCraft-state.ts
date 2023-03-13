import assert = require("assert");

abstract class State {
  abstract canMove(): boolean;

  abstract damage(): number;
}

class SiegeState implements State {
  canMove(): boolean {
    return false;
  }

  damage(): number {
    return 20;
  }
}

class TankState implements State {
  canMove(): boolean {
    return true;
  }

  damage(): number {
    return 5;
  }
}

class Tank {
  state: State = new TankState();

  changeState(newState: State){
    this.state = newState
  }

  public canMove(): boolean {
    return this.state.canMove();
  }

  public damage(): number {
    return this.state.damage();
  }
}

// Test

let tank = new Tank();

assert.deepEqual(tank.canMove(), true);
assert.deepEqual(tank.damage(), 5);

tank.changeState(new SiegeState());

assert.deepEqual(tank.canMove(), false);
assert.deepEqual(tank.damage(), 20);

tank = new Tank();

assert.deepEqual(tank.canMove(), true);
tank.changeState(new SiegeState());
assert.deepEqual(tank.damage(), 20);

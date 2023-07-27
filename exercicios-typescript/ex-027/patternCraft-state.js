"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
class State {
}
class SiegeState {
    canMove() {
        return false;
    }
    damage() {
        return 20;
    }
}
class TankState {
    canMove() {
        return true;
    }
    damage() {
        return 5;
    }
}
class Tank {
    state = new TankState();
    changeState(newState) {
        this.state = newState;
    }
    canMove() {
        return this.state.canMove();
    }
    damage() {
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
//# sourceMappingURL=patternCraft-state.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
class Idle {
    move(level, button) {
        return 0;
    }
}
class Lifting {
    move(level, button) {
        return button - level;
    }
}
class Lowering {
    move(level, button) {
        return button - level;
    }
}
class Elevator {
    state;
    constructor() {
        this.state = new Idle();
    }
    changeState(state) {
        this.state = state;
    }
    move(level, button) {
        if (level < Number(button)) {
            this.changeState(new Lifting());
        }
        else if (level > Number(button)) {
            this.changeState(new Lowering());
        }
        return this.state.move(level, button);
    }
}
function goto(level, button) {
    const allButtons = ["0", "1", "2", "3"];
    const allLevels = allButtons.map(Number);
    if (!allLevels.includes(level) || !allButtons.includes(button)) {
        return 0;
    }
    const elevator = new Elevator();
    let moveCount = elevator.move(level, Number(button));
    return moveCount;
}
assert.deepEqual(goto(0, '2'), 2);
assert.deepEqual(3 + goto(3, '1'), 1);
assert.deepEqual(2 + goto(2, '2'), 2);
//# sourceMappingURL=simpleElevator.js.map
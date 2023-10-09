import assert = require("assert");

interface State {
  move(level: number, button: number): number;
}

class Idle implements State {
  move(level: number, button: number): number {
    return 0;
  }
}

class Lifting implements State {
  move(level: number, button: number): number {
    return button - level;
  }
}

class Lowering implements State {
  move(level: number, button: number): number {
    return button - level;
  }
}

class Elevator {
  state: State;

  constructor() {
    this.state = new Idle();
  }

  changeState(state: State) {
    this.state = state;
  }

  move(level: number, button: number) {
    if (level < Number(button)) {
      this.changeState(new Lifting());
      
    }
    else if (level > Number(button)) {
      this.changeState(new Lowering());
    }

    return this.state.move(level, button);
  }
}

function goto(level: number, button: string) {
  const allButtons = ["0","1","2","3"]
  const allLevels = allButtons.map(Number)

  if (!allLevels.includes(level) || !allButtons.includes(button)) {
    return 0
  }

  const elevator = new Elevator();
  let moveCount = elevator.move(level, Number(button));

  return moveCount;
}

assert.deepEqual(goto(0,'2'),2);
assert.deepEqual(3+goto(3,'1'),1);
assert.deepEqual(2+goto(2,'2'),2);


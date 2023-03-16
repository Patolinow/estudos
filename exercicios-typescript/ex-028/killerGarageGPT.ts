class ElectricGarageDoor {
  position = 0;
  direction = 1; // 1 for opening, -1 for closing
  state: DoorState = new ClosedState(this);

  handleButtonPress(): void {
    this.state.handleButtonPress();
  }

  handleObstacleDetection(): void {
    this.state.handleObstacleDetection();
  }

  updatePosition(): void {
    this.state.updatePosition();
  }

  setPosition(position: number): void {
    this.position = position;
  }

  setDirection(direction: number): void {
    this.direction = direction;
  }

  setState(state: DoorState): void {
    this.state = state;
  }
}

interface DoorState {
  handleButtonPress(): void;
  handleObstacleDetection(): void;
  updatePosition(): void;
}

class ClosedState implements DoorState {
  constructor(private door: ElectricGarageDoor) {}

  handleButtonPress(): void {
    this.door.setState(new OpeningState(this.door));
  }

  handleObstacleDetection(): void {
    // no effect
  }

  updatePosition(): void {
    this.door.setPosition(0);
  }
}

class OpeningState implements DoorState {
  private seconds = 0;
  private paused = false;

  constructor(private door: ElectricGarageDoor) {}

  handleButtonPress(): void {
    if (this.paused) {
      this.paused = false;
    } else {
      this.paused = true;
    }
  }

  handleObstacleDetection(): void {
    this.door.setDirection(-1); // reverse direction
    this.door.setState(new ClosingState(this.door));
  }

  updatePosition(): void {
    if (!this.paused) {
      this.seconds = this.door.position;
      this.seconds++;
      this.door.setPosition(this.seconds);
      if (this.seconds === 5) {
        this.door.setState(new OpenState(this.door));
      }
    }
  }
}

class OpenState implements DoorState {
  constructor(private door: ElectricGarageDoor) {}

  handleButtonPress(): void {
    this.door.setState(new ClosingState(this.door));
  }

  handleObstacleDetection(): void {
    this.door.setDirection(-1); // reverse direction
    this.door.setState(new ClosingState(this.door));
  }

  updatePosition(): void {
    this.door.setPosition(5);
  }
}

class ClosingState implements DoorState {
  private seconds = 5;
  private paused = false;

  constructor(private door: ElectricGarageDoor) {}

  handleButtonPress(): void {
    if (this.paused) {
      this.paused = false;
    } else {
      this.paused = true;
    }
  }

  handleObstacleDetection(): void {
    this.door.setDirection(1); // reverse direction
    this.door.setState(new OpeningState(this.door));
  }

  updatePosition(): void {
    if (!this.paused) {
      this.seconds = this.door.position;
      this.seconds--;
      this.door.setPosition(this.seconds);
      if (this.seconds === 0) {
        this.door.setState(new ClosedState(this.door));
      }
    }
  }
}

export function door(input: string): string {
  const garageDoor = new ElectricGarageDoor();
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const event = input[i];
    if (event === "P") {
      garageDoor.handleButtonPress();
    } else if (event === "O") {
      garageDoor.handleObstacleDetection();
    }
    garageDoor.updatePosition();
    output += garageDoor.position;
  }

  return output;
}
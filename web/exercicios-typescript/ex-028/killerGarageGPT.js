"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.door = void 0;
class ElectricGarageDoor {
    position = 0;
    direction = 1; // 1 for opening, -1 for closing
    state = new ClosedState(this);
    handleButtonPress() {
        this.state.handleButtonPress();
    }
    handleObstacleDetection() {
        this.state.handleObstacleDetection();
    }
    updatePosition() {
        this.state.updatePosition();
    }
    setPosition(position) {
        this.position = position;
    }
    setDirection(direction) {
        this.direction = direction;
    }
    setState(state) {
        this.state = state;
    }
}
class ClosedState {
    door;
    constructor(door) {
        this.door = door;
    }
    handleButtonPress() {
        this.door.setState(new OpeningState(this.door));
    }
    handleObstacleDetection() {
        // no effect
    }
    updatePosition() {
        this.door.setPosition(0);
    }
}
class OpeningState {
    door;
    seconds = 0;
    paused = false;
    constructor(door) {
        this.door = door;
    }
    handleButtonPress() {
        if (this.paused) {
            this.paused = false;
        }
        else {
            this.paused = true;
        }
    }
    handleObstacleDetection() {
        this.door.setDirection(-1); // reverse direction
        this.door.setState(new ClosingState(this.door));
    }
    updatePosition() {
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
class OpenState {
    door;
    constructor(door) {
        this.door = door;
    }
    handleButtonPress() {
        this.door.setState(new ClosingState(this.door));
    }
    handleObstacleDetection() {
        this.door.setDirection(-1); // reverse direction
        this.door.setState(new ClosingState(this.door));
    }
    updatePosition() {
        this.door.setPosition(5);
    }
}
class ClosingState {
    door;
    seconds = 5;
    paused = false;
    constructor(door) {
        this.door = door;
    }
    handleButtonPress() {
        if (this.paused) {
            this.paused = false;
        }
        else {
            this.paused = true;
        }
    }
    handleObstacleDetection() {
        this.door.setDirection(1); // reverse direction
        this.door.setState(new OpeningState(this.door));
    }
    updatePosition() {
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
function door(input) {
    const garageDoor = new ElectricGarageDoor();
    let output = "";
    for (let i = 0; i < input.length; i++) {
        const event = input[i];
        if (event === "P") {
            garageDoor.handleButtonPress();
        }
        else if (event === "O") {
            garageDoor.handleObstacleDetection();
        }
        garageDoor.updatePosition();
        output += garageDoor.position;
    }
    return output;
}
exports.door = door;
//# sourceMappingURL=killerGarageGPT.js.map
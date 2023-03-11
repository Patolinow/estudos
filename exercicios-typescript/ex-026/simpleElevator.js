function goto(level, button) {
    var allButtons = ["0", "1", "2", "3"];
    var allLevels = allButtons.map(Number);
    if (!allLevels.includes(level) || !allButtons.includes(button)) {
        return 0;
    }
    var Stoped = /** @class */ (function () {
        function Stoped() {
        }
        Stoped.prototype.move = function (level, button) {
            return 0;
        };
        return Stoped;
    }());
    var Lifting = /** @class */ (function () {
        function Lifting() {
        }
        Lifting.prototype.move = function (level, button) {
            return button - level;
        };
        return Lifting;
    }());
    var Lowering = /** @class */ (function () {
        function Lowering() {
        }
        Lowering.prototype.move = function (level, button) {
            return button - level;
        };
        return Lowering;
    }());
    var Elevator = /** @class */ (function () {
        function Elevator() {
            this.state = new Stoped();
        }
        Elevator.prototype.changeState = function (state) {
            this.state = state;
        };
        Elevator.prototype.move = function (level, button) {
            return this.state.move(level, button);
        };
        return Elevator;
    }());
    var elevator = new Elevator();
    var moveCount = 0;
    if (level < Number(button)) {
        elevator.changeState(new Lifting());
        moveCount = elevator.move(level, Number(button));
    }
    if (level > Number(button)) {
        elevator.changeState(new Lowering());
        moveCount = elevator.move(level, Number(button));
    }
    return moveCount;
}

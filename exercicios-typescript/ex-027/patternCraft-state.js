"use strict";
exports.__esModule = true;
var assert = require("assert");
var State = /** @class */ (function () {
    function State() {
    }
    return State;
}());
var SiegeState = /** @class */ (function () {
    function SiegeState() {
    }
    SiegeState.prototype.canMove = function () {
        return false;
    };
    SiegeState.prototype.damage = function () {
        return 20;
    };
    return SiegeState;
}());
var TankState = /** @class */ (function () {
    function TankState() {
    }
    TankState.prototype.canMove = function () {
        return true;
    };
    TankState.prototype.damage = function () {
        return 5;
    };
    return TankState;
}());
var Tank = /** @class */ (function () {
    function Tank() {
        this.state = new TankState();
    }
    
    Object.defineProperty(Tank.prototype, "canMove", {
        get: function () {
            return this.state.canMove();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tank.prototype, "damage", {
        get: function () {
            return this.state.damage();
        },
        enumerable: false,
        configurable: true
    });
    return Tank;
}());
// Test
var tank = new Tank();
assert.deepEqual(tank.canMove, true);
assert.deepEqual(tank.damage, 5);
tank.state = new SiegeState();
assert.deepEqual(tank.canMove, false);
assert.deepEqual(tank.damage, 20);
tank = new Tank();
assert.deepEqual(tank.canMove, true);
tank.state = new SiegeState();
assert.deepEqual(tank.damage, 20);

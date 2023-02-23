"use strict";
class Bike {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(this.brand);
    }
}
const jacket1 = new Jacket("cool Joker", "red");
const bike1 = new Bike("red");
class Player {
    first;
    last;
    _score;
    numLives = 10;
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.first = first;
        this.last = last;
        this.secret();
    }
    secret() {
        console.log("secret!");
    }
    get fullName() {
        return this.first + " " + this.last;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score can't be lower than 0");
        }
        else {
            this._score = newScore;
        }
    }
}
class Ruler extends Player {
    isAdmin = true;
    maxScore() {
        this._score = 9999999;
    }
}
const player1 = new Player("Adriano", "Pimenta", 100);
console.log(player1);
console.log(player1.fullName);
console.log((player1.score = 15));
class Employee {
    first;
    last;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    salary;
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    hourlyRate;
    hoursWorked;
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const benny = new FullTimeEmployee("Benny", "Flame", 1500);
console.log(benny.getPay());
const don = new PartTimeEmployee("Don", "Quixote", 1.5, 50);
console.log(don.getPay());

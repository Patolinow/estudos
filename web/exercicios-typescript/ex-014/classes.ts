interface Colors {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colors {
  constructor(public color: string) {}
}

class Jacket implements Colors, Printable {
  constructor(public brand: string, public color: string) {}

  print() {
    console.log(this.brand);
  }
}

const jacket1 = new Jacket("cool Joker", "red");
const bike1 = new Bike("red");

class Player {
  private numLives = 10;

  constructor(
    public readonly first: string,
    public readonly last: string,
    protected _score: number
  ) {
    this.first = first;
    this.last = last;
    this.secret();
  }

  private secret(): void {
    console.log("secret!");
  }

  get fullName(): string {
    return this.first + " " + this.last;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score can't be lower than 0");
    } else {
      this._score = newScore;
    }
  }
}

class Ruler extends Player {
  public isAdmin: boolean = true;

  maxScore() {
    this._score = 9999999;
  }
}

const player1 = new Player("Adriano", "Pimenta", 100);

console.log(player1);
console.log(player1.fullName);
console.log((player1.score = 15));

abstract class Employee {
  constructor(public first: string, public last: string) {}

  abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const benny = new FullTimeEmployee("Benny", "Flame", 1500)
console.log(benny.getPay())

const don = new PartTimeEmployee("Don", "Quixote", 1.5, 50)
console.log(don.getPay())

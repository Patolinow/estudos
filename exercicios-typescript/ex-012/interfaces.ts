interface Point {
  x: number;
  y: number;
}

const point: Point = { x: 12, y: 4 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi?(): string;
}

const thomas: Person = {
  first: "Thomas",
  last: "Thurbano",
  nickname: "totu",
  id: 123123,
  sayHi() {
    return "asd";
  },
};

thomas.first = "Ana";

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Balanceaga Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.25));

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): boolean;
}

const marcel: Dog = {
  name: "Marcel",
  age: 12,
  breed: "husky",
  bark() {
    return true;
  },
};

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 5,
  breed: "Shepherd",
  bark() {
    return false;
  },
  job: "guide dog",
};

interface Foreigner extends Person {
  email: string;
}

interface Emplyoee {
  readonly id: number;
}

interface Engineer extends Foreigner, Emplyoee {
  level: "jr" | "pl" | "sr";
  lang: "pt-br" | "eng";
}

const pierre: Engineer = {
  first: "Pierre",
  last: "Vasconcelo",
  id: 123123,
  email: "asdasd@gmail.com",
  level: "jr",
  lang: "eng",
  nickname: "Pi"
};

interface Chicken {
  breed: string
}

interface Chicken {
  eggs: number 
}


function square(num: number): number {
  return num * num;
}

function greet(person: string = "strange") {
  return console.log(`Hi there, ${person}`);
}

const doSomething = (person: string, age: number, isFunny: boolean) => {
  return console.log(
    `Hi ${person}! even though you're ${age}, you're really ${
      isFunny ? "funny" : "unfunny"
    }!`
  );
};

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }

  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toLocaleUpperCase;
});

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop():never {
  while (true) {
    console.log("Running...")
  }
}

console.log(square(9));
greet();
greet("fabio");
doSomething("ChickenFace", 76, false);
rando(2);
add(1, 5);
console.log(printTwice("Hello"));

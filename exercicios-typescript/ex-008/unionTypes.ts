let age: number | string | boolean = 21;
age = 25;
age = "1";
age = false;

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 35 };
coordinates = { lat: 234.232, long: 2342.344 };

const printAge = (age: number | string) => {
  console.log(`You are ${age} years old`);
};

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = price.replace("$", "");
    return Number(price) * tax;
  }
  return price * tax;
}

printAge(24);
printAge("23");
console.log(calculateTax(12, 0.2));
console.log(calculateTax("$35.25", 0.5));

const stuffs: (number | string)[] = [2, "23", 24];
const otherStuffs: number[] | string[] = [2, 24];
const cords: (Point | Loc)[] = [];
cords.push({ lat: 25, long: 64 });
cords.push({ x: 5, y: 23 });

let zero: 0 = 0;
zero = 0;
let mood: "happy" | "sad" = "sad";
mood = "happy";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";

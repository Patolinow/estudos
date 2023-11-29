// Typescript
function isEven(num: number): boolean {
  return num % 2 == 0;
}

isEven(2); //true
isEven(3); //false
isEven(4); //true

function hasOla(phrase: string): boolean {
  return phrase.indexOf("olá") != -1;
}

console.log(hasOla("olá mundo")); //true
console.log(hasOla("mundo")); //false
console.log(hasOla("ola")); //false
import { add } from "./utils";
import Dog from "./dog";
import ShelterDog from "./shelter";

console.log("i'm index!");

const elton = new Dog("Elton", "Aussie", 2)
console.log(elton)

console.log(add(1, 5))

const buffy = new ShelterDog("Buffy", "Pitbul", 2, true)

console.log("now with webpack!")
console.log("teste 12315")
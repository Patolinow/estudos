// EX 1
let num = 2

function square() {
  return num * num
}

num = square()

console.log(num)

const square2 = n => n * n

console.log(square2(num))


// EX 2
const cart = {
  quantity: 2,
  total: 200
}

const newCart = {...cart, quantity: 3}
console.log(newCart)

// No reactJS
// const [amount, setAmount] = useState(0)
// setAmount(2)


// EX 3
const random = (number, Math) => Math.floor(Math.random() * number)
console.log(random(10, Math))

const factorial = x => {
  if (x === 0) {
    return 1
  }

  return x * factorial(x - 1)
}

console.log(factorial(6))


// EX 4
function calculateCircum(radius) {
  return Math.PI * (radius * radius)
}

console.log(calculateCircum(5))

let person = {
  names: 'Rafael Camarda',
  age: "jovem"
}

function changeNames(names) {
  person.names = names
  return person
}

console.log(changeNames("eduardo"))


const calculateCircumference = (pi, radius) => pi * (radius * radius)
console.log(calculateCircumference(Math.PI, 5))


const changePersonName = (person, names) => ({...person, names})
console.log(changePersonName(person))


// EX 5
const sayMyName = () => console.log("fabio")
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))


// EX 6
const numbers = [2,4,8,16]

const squared = n => n * n
const squaredNumbers = numbers.map(squared)

console.log(numbers, squaredNumbers)

const pause = wait => fn => setTimeout(fn, wait)

pause(600)(() => console.log("waiting 600ms"))

const wait2000 = pause(2000)

wait2000(() => console.log("waiting 2s"))

// EX 7
const peoples = ['rafa', 'diego', 'dani', 'rod']
const upperCaseStartD = peoples.filter(person => person.startsWith('d')).map(dperson => dperson.toUpperCase())
console.log(peoples, upperCaseStartD)
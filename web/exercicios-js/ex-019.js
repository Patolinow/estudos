let weight

console.log(typeof weight)

let people = {
  name: "john",
  age: 18,
  stars: 4.5,
  isSubscribed: false

}

console.log(typeof (people.isSubscribed))

let student = {
  name: "john",
  age: 18,
  stars: 4.5,
  isSubscribed: false
}

console.log(typeof (student))

console.log(`${student.name} de idade ${student.age} pesa ${student.stars}kg`)

let students = []

students = [student]

console.log(students)

console.log(students[0])

let student2 = {
  name: "Isa",
  age: 18,
  stars: 4.5,
  isSubscribed: true
}

students[1] = student2

console.log(students)
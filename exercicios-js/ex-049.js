function solution(number){
  let totalSum = 0
  let i = 0

  while (i < number) {
    if (i % 3 === 0 || i % 5 === 0) {
      totalSum += i
    }
    i++
  }

  return totalSum
}

console.log(solution(10))
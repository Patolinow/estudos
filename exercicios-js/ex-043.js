function numOfOpenLockers(n){
  let everyOpened = 0
  let opened = 3
  let i = 1

  while (i <= n) {
    everyOpened++
    i += opened
    opened += 2
  }

  return everyOpened
  }

  console.log(numOfOpenLockers(4521))
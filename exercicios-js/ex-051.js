function openingTimes(str) {
  const day = str.split(" ")[0].charAt(0).toUpperCase() + str.split(" ")[0].slice(1).toLowerCase()
  const time = str.split(" ")[1]
  const correctHourFormat = /^([0-1][0-9]|2[0-3]):([0-5][0-9])?$/
  const dayOfTheWeek = {
    Sunday: ['12:00', '16:30'],
    Monday: ['08:00', '20:00'],
    Tuesday: ['08:00', '20:00'],
    Wednesday: ['08:00', '20:00'],
    Thursday: ['08:00', '20:00'],
    Friday: ['08:00', '20:00'],
    Saturday: ['10:00', '18:00']
  }
  let indexOfTheWeek = 0

  if (!Object.keys(dayOfTheWeek).includes(day) || !correctHourFormat.test(time)) {
    return "Invalid time!"
  }

  Object.keys(dayOfTheWeek).forEach((objectDay, indexOfDay) => {
    if (objectDay == day) {
      indexOfTheWeek = indexOfDay
    }
  })

  if (Object.values(dayOfTheWeek)[indexOfTheWeek][0] > time) {
    return `Library opens: today ${Object.values(dayOfTheWeek)[indexOfTheWeek][0]}`
  }

  else if (time >= Object.values(dayOfTheWeek)[indexOfTheWeek][1]){
    return `Library opens: ${Object.keys(dayOfTheWeek)[indexOfTheWeek == 6 ? 0 : indexOfTheWeek + 1]} ${Object.values(dayOfTheWeek)[indexOfTheWeek == 6 ? 0 : indexOfTheWeek + 1][0]}`
  }

  else {
    return `Library closes at ${Object.values(dayOfTheWeek)[indexOfTheWeek][1]}`
  }
}

console.log(openingTimes("MoNDay 07:59"))
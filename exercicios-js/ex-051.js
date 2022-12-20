function openingTimes(str) {
  const day = str.split(" ")[0].toLowerCase()
  const time = str.split(" ")[1]
  const correctHourFormat = /^([0-1][0-9]|2[0-3]):([0-5][0-9])?$/
  const dayOfTheWeek = {
    sunday: ['12:00', '16:30'],
    monday: ['08:00', '20:00'],
    tuesday: ['08:00', '20:00'],
    wednesday: ['08:00', '20:00'],
    thurday: ['08:00', '20:00'],
    friday: ['08:00', '20:00'],
    saturday: ['12:00', '16:30']
  }

  if (!Object.keys(dayOfTheWeek).includes(day) || !correctHourFormat.test(time)) {
    return "Invalid time!"
  }

  
}

console.log(openingTimes("sunday 23:30"))
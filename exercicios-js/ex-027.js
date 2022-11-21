let values = 0
let filtered = 0

function temp(temperature) {
  if (temperature.toLowerCase().includes("c")) {
    values = temperature.split("c").shift()
    return `A temperatura ${values}°C foi transformada em ${(values * 9 / 5 + 32).toFixed(2)}°F`
  }

  else if (temperature.toLowerCase().includes("f")) {
    values = temperature.split("f").shift()
    return `A temperatura ${values}°F foi transformada em ${((values - 32) * 5 / 9).toFixed(2)}°C`
  }

  else {
    return "Unidade de medida inválido."
  }
}

console.log(temp("132f"))
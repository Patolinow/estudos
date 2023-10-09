function conversor(h, min) {
  if (h > 24 || min >= 60 || h < 0 || min < 0) {
    return "Formato de hora e minuto inválidos, por favor insira de 0 a 24 horas e de 0 a 59 minutos."
  }

  else {

    if (h > 12) {
      let convertido = h - 12
      return `Agora são ${convertido}:${min} PM`
    }

    else if (h === 12) {
      return `Agora são ${h}:${min} PM`
    }

    else {
      return `Agora são ${h}:${min} AM`
    }

  }
}

console.log(conversor(0, 59))
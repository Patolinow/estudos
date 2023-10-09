function getScore(nota) {

  if (nota > 100 || nota < 0){
    
  }

  else {
    if (nota >= 90) {
      nota = "A"
    }

    else if (nota >= 80) {
      nota = "B"
    }

    else if (nota >= 70) {
      nota = "C"
    }

    else if (nota >= 60) {
      nota = "D"
    }

    else {
      nota = "F"
    }

    return nota
  }
}

console.log(`Parabéns, você tirou um ${getScore(-2)}!`)
function stockList(listOfArt, listOfCat){
  let numberByCat = 0
  let totalByCat = []
  let sumAllCat = 0

  listOfCat.forEach(cat => {
    listOfArt.forEach(art => {

      if (art.split("")[0] === cat) {
        numberByCat += Number(art.slice((art.length - 3)))
      }

    })
    totalByCat.push(`(${cat} : ${numberByCat})`)
    sumAllCat += numberByCat
    numberByCat = 0
    
  });

  if (sumAllCat === 0) {
    totalByCat = ''
  }

  else {
    totalByCat = totalByCat.join(' - ').toString()
  }

  return totalByCat
}

console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["R", "X", "O", "B"]))
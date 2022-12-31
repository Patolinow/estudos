Date.prototype.getDate = function getGrinchDate() {
  let toDay = this.toLocaleDateString().split("/")[1]

  return (this.getMonth() == 11 && toDay == 25) ?  26 : toDay
}

let d = new Date('1999-12-21T10:00:00');

console.log(d.getDate())
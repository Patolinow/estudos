function compareVersions(version1, version2) {
  
// Class para igualar o tamanho das arrays
  class Equity {
    constructor(theTwoVersions) {
      this.theTwoVersions = theTwoVersions
    }

    toEquity() {
      let smallerVersion = this.theTwoVersions[0].length < this.theTwoVersions[1].length ? this.theTwoVersions[0] : this.theTwoVersions[1]
      let biggestLength = this.theTwoVersions[0].length > this.theTwoVersions[1].length ? this.theTwoVersions[0].length : this.theTwoVersions[1].length

      while (smallerVersion.length < biggestLength) {
        this.theTwoVersions[this.theTwoVersions[0].length < this.theTwoVersions[1].length ? 0 : 1].push(0)
      }

      return this.theTwoVersions
    }
  }

  // declaração de variaveis e a parte mais importante do codigo
  const splitedVersions = [version1, version2].map(version => version.split(".").map(Number))
  const equity = new Equity(splitedVersions)
  const equals = equity.toEquity()
  const softwareVersion = equals[0]
  const operationalSystem = equals[1]

  for (let i = 0; i < softwareVersion.length; i++) {
    if (softwareVersion[i] > operationalSystem[i] || softwareVersion[i] < operationalSystem[i]) {

      return (softwareVersion[i] < operationalSystem[i] ? false : true)
    }
  }

  return true
}



// Testes
function test(x, y) {
  return (x != y ? console.log(`expected "${x}" deeply equal to "${y}"`) : console.log("well done!"))

}

test(compareVersions("10.4.6", "10.4.3"), true)
test(compareVersions("10.4.9", "10.5"), false)
test(compareVersions("11", "10"), true)
test(compareVersions("11", "11"), true)
test(compareVersions("10.4", "10.10"), false)
test(compareVersions("10.4", "11"), false)
test(compareVersions("134.109.47.157.113", "134.109.47.164.63.3"), false)
test(compareVersions("43.33.96.138.66.106.92.84.89", "21.66.191.128.11.130.13.52.16.84"), true)
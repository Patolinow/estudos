//done * number*count is expanded as number repeated count times

//half-done * first-last is expanded as a sequence of consecutive numbers starting with first and ending with last. This is true for both ascending and descending order

//done * first-last/interval is similarly expanded, as sequence starting with first, ending with last, where the numbers are separated by interval. Note that interval does NOT have a sign

function uncompress(music) {
  const musicSplited = music.split(",")
  let decoded = []

  musicSplited.forEach(element => {

    if (element.includes("*")) {
      let allRepeats = element.split("*")

      for (let i = 0; i < allRepeats[1]; i++) {
        decoded.push(Number(allRepeats[0]))
      }

    }

    else if (element.includes("-")) { 
      let startValue = Number(element.split("-")[0])
      let endValue = Number(element.split("-")[1].split("/")[0])
      let step = element.split("-")[1].split("/")[1] != undefined ? Number(element.split("-")[1].split("/")[1]) : 1

      while (startValue !== endValue) {
        decoded.push(startValue)

        startValue <= endValue ? startValue+= step : startValue-= step;
      }

      decoded.push(endValue)
    }

    else {
      decoded.push(Number(element))
    }
  });

  return decoded
}

console.log(uncompress("0-4/2, 5, 7-9"))
// fiquei preso nesse teste com negativos: "1--5/2"

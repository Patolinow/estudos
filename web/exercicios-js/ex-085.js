// Por conta de limitações do kata (code wars), so é possível rodar esse código
// no site: https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript

async function sayJoke(apiUrl, jokeId) {
  const res = await fetch(apiUrl)

  if (apiUrl != "http://great.jokes/christmas") {
    throw new Error(`No jokes at url: ${apiUrl}`)
  }

  const jokesResponse = await res.json()
  let allIds = []
  let i = 0

  while (i < jokesResponse.jokes.length) {

    if (jokesResponse.jokes[i].id == jokeId) {

      class ThisJoke {
        constructor(joke) {
          this.joke = joke
        }

        saySetup() {
          return this.joke.setup
        }

        sayPunchLine() {
          return this.joke.punchLine
        }
      }

      return new ThisJoke(jokesResponse.jokes[i])
    }
    
    allIds.push(jokesResponse.jokes[i].id)
    i++
  }

  if (!allIds.includes(jokeId)) {
    throw new Error(`No jokes found id: ${jokeId}`)
  }
}
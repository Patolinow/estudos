const url = "https://api.github.com/users/patolinow"
let user = fetch(url)
.then(res => { 
  // console.log("\n" + res.json())
  res.json()
.then(anotherRes => {
  console.log(anotherRes.login)
})
})

console.log(user)
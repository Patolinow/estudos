const url = "http://localhost:5500/api"


function getUsers() {
  axios.get(url)
    .then(res => {
      renderApiResult.textContent = JSON.stringify(res.data.users)
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
  axios.post(url, newUser)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.error(err))
}

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(res => {
      userName.textContent = res.data.name
      city.textContent = res.data.city
      avatar.src = res.data.avatar
    })
    .catch(err => console.error(err))
}

function updateUser(updatedUser, id) {
axios.put(`${url}/${id}`, updatedUser)
}

function userDelete(id) {
axios.delete(`${url}/${id}`)
}

const newUser =
{
  name: "Fabio Neves",
  avatar: "https://avatars.githubusercontent.com/u/65193403?v=4",
  city: "Bahia"
}

const updatedUser = {
  name: "João Cleber",
  city: "Espirito Santo",
  avatar: "https://kilogen.io/wp-content/uploads/2022/01/top-2021-schema-00.jpg"
}

const id = 2
// addUser(newUser)
getUsers()
getUser(id)
updateUser(updatedUser, id)
userDelete(3)


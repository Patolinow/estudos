const url = "http://localhost:5500/api"
const renderApiRes = document.querySelector('#RenderApiResult')
const avatar = document.getElementById('avatar')
const username = document.getElementById('name')
const city = document.getElementById('city')
let alertApi = document.getElementById('alert')

function getUsers() {
  fetch(url)
    .then(urlResponse => {
      urlResponse.json()
        .then(jsonInfo => {
          renderApiRes.textContent = JSON.stringify(jsonInfo)
        })
    }).catch(error => console.error(error))
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => {
      response.json().then(data => {
        username.textContent = data.name
        city.textContent = data.city
        avatar.src = data.avatar
      })

    })

    .catch(error => console.error(error))
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => {
      alertApi = res.json().data
    }).catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => {
      res.json().then(data => {
        alertApi.textContent = data
      })
    })
    .catch(error => console.error(error))
}

const newUser = {
  name: "Fabio neves",
  avatar: "https://avatars.githubusercontent.com/u/65193403?v=4",
  city: "Cruz das Almas"
}

const updatedUser = {
  name: "Andé",
  avatar: "https://randomwordgenerator.com/img/picture-generator/57e7d1404c56a914f1dc8460962e33791c3ad6e04e50744172297cd59144cc_640.jpg",
  city: "Acre"
}
const id = 9

deleteUser(id)
// updateUser(updatedUser, id)
// addUser(newUser)
getUsers()
getUser(id)
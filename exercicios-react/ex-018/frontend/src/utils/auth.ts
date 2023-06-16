import { redirect } from "react-router-dom"

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration')

  if (storedExpirationDate) {
    const expirationDate = new Date(storedExpirationDate)
    const now = new Date()
    const duration = expirationDate.getTime() - now.getTime()

    return duration
  }
  
  return 0
}

export function getAuthToken() {
  const token = localStorage.getItem('token')
  const tokenDuration = getTokenDuration()

  if (!token) {
    return null
  }

  if (tokenDuration <= 0) {
    return "EXPIRED"
  }

  return token
}

export function loadAuthToken() {
  return getAuthToken()
}

export function checkAuthLoader() {
  const token = getAuthToken()

  if (!token) {
    return redirect("/auth")
  }

  return null
}
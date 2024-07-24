import * as SecureStore from 'expo-secure-store'

const { loginEndpoint, createLessonEndpoint, createScenarioEndpoint, correctionEndpoint, getImageEndpoint } = require("./endpoints")


const authHeader = new Headers()
authHeader.append("Content-Type", "application/json")

export const loginUser = async (email, password) => {
  try {
    let response = await fetch(loginEndpoint, {
      method: "POST",
      headers: authHeader,
      body: JSON.stringify({
        email: email,
        motDePasse: password
      })
    })

    if (!response.ok) throw Error("erreur")
    let data = await response.json()

    return data.jwt

  } catch(error) {
    console.log(error)
  }
}

export const getToken = async () => {
  return await SecureStore.getItemAsync('authToken')
}

export const getLessons = async (chapter) => {
  try {

    const token = await SecureStore.getItemAsync('authToken')
    if (!token) throw Error("token was not found")
  
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `${token}`)
    let response = await fetch(createLessonEndpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(chapter)
    })
    
    let data = await response.json()
    
    return data

  } catch(error) {
    console.log(error)
  }
}

export const getScenarioExercise = async (lesson) => {
  try {
    const token = await getToken()
    if (!token) throw Error("token not found")

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `${token}`)

    console.log("id", lesson.id)

    let response = await fetch(createScenarioEndpoint(lesson.id), {
      method: "GET",
      headers: headers,
    })

    let data = await response.json()

    return data

  } catch(error) {
    console.log(error)
  }
}

export const getCorrection = async (gameId, userResponse) => {
  try {
    const token = await getToken()
    if (!token) throw Error("token not found")

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `${token}`)

    let response = await fetch(correctionEndpoint(gameId), {
      method: "POST",
      headers: headers,
      body: JSON.stringify(userResponse)
    })

    let data = await response.json()

    console.log("reponse", data.response)

    return data
  } catch(error) {
    console.log(error)
  }
}

export const fetchImage = async (path) => {
  console.log("image path", path)
  const token = await getToken()
  if (!token) throw Error("token not found")

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Authorization', `${token}`)

  try {
    let response = await fetch(getImageEndpoint, {
      method: "POST",
      headers: headers,
      body: path
    })

    const data = await response.blob()

    return data

  } catch(error) {
    console.log(error)
  }
}
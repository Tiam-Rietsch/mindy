import { useState, useEffect, createContext, useContext } from 'react'
import { getAuthToken } from '../app/api/fetch'
import { Dimensions } from 'react-native'

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [skills, setSkills] = useState([])
  const [curSkill, setCurSkill] = useState(null)
  const [units, setUnits] = useState(null)
  const [curUnit, setCurUnit] = useState(null)
  const [allLessons, setAllLessons] = useState([])
  const [curLesson, setCurLesson] = useState(null)

  useEffect(() => {
    // get the auth token
    getAuthToken()
      .then((token) => {
        if (token) {
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
        }
      })
      .catch((error) => {
        setIsLoggedIn(false)
        console.error(error)
      })
    
    // get the device dimensions
    setIsTablet(Dimensions.get('window').width >= 500)
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        isTablet,
        skills,
        setSkills,
        curSkill,
        setCurSkill,
        units, 
        setUnits,
        curUnit,
        setCurUnit,
        allLessons,
        setAllLessons,
        curLesson,
        setCurLesson
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}
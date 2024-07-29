import { useState, useEffect, createContext, useContext } from 'react'
import { getAuthToken } from '../app/api/fetch'
import { Dimensions } from 'react-native'

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isTablet, setIsTablet] = useState(false)
  const [skills, setSkills] = useState([])
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [units, setUnits] = useState(null)
  const [allLessons, setAllLessons] = useState([])

  useEffect(() => {
    // get the auth token
    // getAuthToken()
    //   .then((token) => {
    //     if (token) {
    //       setIsLoggedIn(true)
    //     } else {
    //       setIsLoggedIn(false)
    //     }
    //   })
    //   .catch((error) => {
    //     setIsLoggedIn(false)
    //     console.error(error)
    //   })
    
    // get the device dimensions
    setIsTablet(Dimensions.get('window').width >= 500)
  }, [isLoggedIn, setIsLoggedIn, isTablet, setIsTablet])

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        isTablet,
        skills,
        setSkills,
        selectedSkill,
        setSelectedSkill,
        units, 
        setUnits,
        allLessons,
        setAllLessons
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}
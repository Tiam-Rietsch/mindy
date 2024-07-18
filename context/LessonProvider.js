import { createContext, useContext, useState } from 'react'

const LessonContext = createContext()

export const useLessonContext = () => useContext(LessonContext)

export default LessonProvider = ({ children }) => {
  const [curLesson, setCurLesson] = useState(null)
  return (
    <LessonContext.Provider
      value={{
        curLesson,
        setCurLesson
      }}
    >
      { children }
    </LessonContext.Provider>
  )
}
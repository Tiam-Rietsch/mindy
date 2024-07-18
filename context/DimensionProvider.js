import { createContext, useContext }  from "react";
import { Dimensions } from "react-native";


const DimensionContext = createContext()

export default DimensionProvider = ({ children }) => {
    const isTablet = () => {
        return Dimensions.get('window').width > 500 
    }
    return (
        <DimensionContext.Provider
            value={{
                isTablet
            }}
        >
            {children}
        </DimensionContext.Provider>
    )
}

export const useDimensionContext = () => useContext(DimensionContext)
//REUSABLE CONTEXT.. BASKA YERLERDE KULANABILIRIZ



import React, { useState, createContext }from 'react'
import {themes} from '../styles/Themes'
import {Appearance} from 'react-native'

const deviceMode = Appearance.getColorScheme() ==="dark" ? "dark" : "light"
console.log("colorsheme", deviceMode)



export const ThemeContext = createContext({
    colors:(themes[deviceMode].colors)
})


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(deviceMode)
    return (
        <ThemeContext.Provider value = {{colors: themes[theme].colors, setTheme, theme:theme}}>
            {children}
        </ThemeContext.Provider>
    )
}



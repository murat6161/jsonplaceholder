import React from 'react'
import { Text } from 'react-native'
import {useTheme} from '../hook/useTheme'
import {Button, Container} from '../components'

 export const ThemesScreen = () => {
    const { theme, setTheme } = useTheme()
    return (
        <Container>
            <Text>Theme Screen</Text>
            <Button 
            
            onPress={()=>setTheme('dark')} buttonText={"Set Dark Theme"}/> 
        <Button 
            
            onPress={()=>setTheme('light')} buttonText={"Set Light Theme"}/> 
       

       <Button 
            
            onPress={()=>setTheme(theme==='dark' ? 'dark':'light')} buttonText={"Toggle Theme"}/> 
       

        </Container>
    )
}




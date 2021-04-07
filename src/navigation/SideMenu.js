import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CreditsScreen, ThemesScreen} from '../screems';
import { MainFlow } from './MainFlow'


const Drawer= createDrawerNavigator()

export const SideMenu = () => {
return (
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Themes" component={ThemesScreen}/>
        <Drawer.Screen name="Credits" component={CreditsScreen}/>
        <Drawer.Screen name="Main" component={MainFlow}/>
        {/* <Drawer.Screen name="Main" component={MainFlow}/> */}
      </Drawer.Navigator>    
)
}
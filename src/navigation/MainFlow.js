import React from 'react';
import {IntroScreen, DetailsScreen, ListScreen} from '../screems';
import {createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator()

export const MainFlow = () => {
    return (
     <Stack.Navigator initialRouteName="Intro">
     <Stack.Screen 
     name="Intro" 
     component={IntroScreen} 
     options={{title:'Intro Screen'}}
     />
     <Stack.Screen name="List" component={ListScreen}/>
     <Stack.Screen name="Details" component={DetailsScreen}/>
   </Stack.Navigator>
    )
  }
  
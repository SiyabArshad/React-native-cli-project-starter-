import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { screennames } from '../utils/screennames';
import DrawerNav from './DrawerNav';

export default function Routes() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={screennames.drawer} screenOptions={{headerShown:false}}>
            <Stack.Screen name={screennames.drawer} component={DrawerNav}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
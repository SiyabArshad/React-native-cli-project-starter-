import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {screennames} from '../utils/screennames';
import DrawerNav from './DrawerNav';
import Splash from '../screens/Splash';
import {useAuth} from '../context/auth/AuthContext';

export default function Routes() {
  const {isLoggedIn} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen name={screennames.drawer} component={DrawerNav} />
        ) : (
          <Stack.Screen name={screennames.splash} component={Splash} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

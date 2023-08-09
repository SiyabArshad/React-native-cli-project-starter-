import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { colors } from '../utils/theme/colors';
import { screennames } from '../utils/screennames';

import Home from '../screens/Home';
import Setting from '../screens/Setting';
import About from '../screens/About';

import AntDesign from "react-native-vector-icons/AntDesign"

const Tab = createBottomTabNavigator();
export default function HmBottomTab() {
  return (
    <Tab.Navigator
      initialRouteName={screennames.home}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.grey700,
        headerShown: false,
        tabBarStyle:{
          height:60
        }
      })}
    >
        <Tab.Screen name={screennames.home} component={Home} options={{tabBarLabel:"Home",tabBarIcon:(({size,color})=>(
          <AntDesign name="home" size={28} color={color} />
        ))}}/>
        <Tab.Screen name={screennames.about} component={About} options={{tabBarLabel:"About",tabBarIcon:(({size,color})=>(
          <AntDesign name="info" size={28} color={color} />
        ))}}/>
        <Tab.Screen name={screennames.setting} component={Setting} options={{tabBarLabel:"Setting",tabBarIcon:(({size,color})=>(
          <AntDesign name="setting" size={28} color={color} />
        ))}}/>
   </Tab.Navigator>
  );
}
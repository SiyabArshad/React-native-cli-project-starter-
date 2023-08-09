import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import { DrawerContent } from './DrawerContent';
import { screennames } from '../utils/screennames';
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
      <Drawer.Navigator drawerContent={() => <DrawerContent />} screenOptions={{headerShown:false}}>
        <Drawer.Screen
        name={screennames.tabBar}
        component={BottomTab}        
      />
      </Drawer.Navigator>
    );
  }
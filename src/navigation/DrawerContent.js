import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';

import {screennames} from '../utils/screennames';

import {useNavigation} from '@react-navigation/native';
export function DrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <DrawerItem
          label="Home"
          onPress={() => {
            navigation.navigate(screennames.home);
          }}
        />
        <DrawerItem
          label="About"
          onPress={() => {
            navigation.navigate(screennames.about);
          }}
        />
        <DrawerItem
          label="Setting"
          onPress={() => {
            navigation.navigate(screennames.setting);
          }}
        />

        <DrawerItem label="Logout" />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});

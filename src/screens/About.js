import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
export default function About({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        drawerfunc={() => navigation.openDrawer()}
        screenname="About Screen"
      />
      <View style={styles.con}>
        <Text>About</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

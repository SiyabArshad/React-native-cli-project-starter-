import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import Header from "../components/Header"
export default function Setting({navigation}) {
  return (
    <SafeAreaView  style={{flex:1}}>
      <Header drawerfunc={()=>navigation.openDrawer()} screenname='Setting Screen'/>
    <View style={styles.con}>
      <Text>Setting</Text>
    </View>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  con:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})
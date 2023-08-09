import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import Header from "../components/Header"
import { s } from "react-native-wind";
import Config from "react-native-config"
export default function Home({navigation}) {
  return (
    <SafeAreaView  style={{flex:1}}>
      <Header drawerfunc={()=>navigation.openDrawer()} screenname='Home Screen'/>
    <View style={styles.con}>
      <Text style={s`text-5xl`}>Home</Text>
      <Text style={s`text-1xl`}>{Config.ENV}</Text>
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
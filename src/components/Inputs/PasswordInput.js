import { View, Text,Pressable,ActivityIndicator } from 'react-native'
import React from 'react'
import {colors} from "../../utils/theme/colors"
import ButtonText from '../Typography/ButtonText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";
import { TextInput,DefaultTheme } from 'react-native-paper';

export default function PasswordInput({lable="Name",placeholder="Your Name",changefunc=()=>{},val="",style}) {
    const [show,setshow]=React.useState(false)
    const theme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary:colors.primary,
          text: colors.black, // Color of the input text
        },
      };

    return (
        <TextInput 
        outlineColor={colors.primary}
        onChangeText={(e)=>changefunc(e)}
          value={val}
        theme={theme}
  mode="outlined"
  label={lable}
  placeholder={placeholder}
  secureTextEntry={!show}

    style={{width:"90%",backgroundColor:colors.white,color: colors.primary,...style}}
    right={<TextInput.Icon color={colors.lightblack} onPress={()=>setshow(!show)} icon={show?"eye-off":"eye"} />}
/>
  )
}
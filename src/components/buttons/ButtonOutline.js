import { View, Text,Pressable } from 'react-native'
import React from 'react'
import {colors} from "../../utils/theme/colors"
import ButtonText from '../Typography/ButtonText'
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";

export default function ButtonOutline({text,style,func=()=>{},textstyle}) {
  return (
    <Pressable onPress={()=>func()} style={[{borderWidth:1,borderColor:colors.primary,width:"90%",paddingVertical:rp(1.5),display:"flex",justifyContent:"center",alignItems:"center",marginHorizontal:"5%",borderRadius:rp(2.7)},style]}>
    <ButtonText text={text} color={colors.primary} style={{fontSize:rp(2.7),...textstyle}}/>
</Pressable>
  )
}
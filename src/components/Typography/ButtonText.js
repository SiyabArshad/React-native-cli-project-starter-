import { View, Text } from 'react-native'
import React from 'react'
import {colors} from "../../utils/theme/colors"
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";

export default function ButtonText({text,color=colors.black,style}) {
  return (
    <Text style={[{color:color,fontSize:rp(2.2)},style]}>
        {
            text
        }
    </Text>
  )
}
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../utils/theme/colors';
import { RFPercentage as rp, RFValue as rf } from "react-native-responsive-fontsize";

export default function DynamicInput({
  onchange,
  val,
  secureEntry = false,
  boxstyle,
  inpstyle,
  placeholder = 'Email',
}) {
  const [secure, setsecure] = React.useState(secureEntry);
  return (
    <View style={[styles.inpbox, boxstyle]}>
      <TextInput
        placeholderTextColor={colors.lightgrey1}
        value={val}
        onChangeText={e => onchange(e)}
        secureTextEntry={secure}
        placeholder={placeholder}
        style={[styles.inpstyle, inpstyle]}
      />
      {secureEntry && (
        <TouchableOpacity onPress={() => setsecure(!secure)}>
          <Feather name={secure ? 'eye-off' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inpbox: {
    marginVertical: rf(15),
    borderWidth: 1.4,
    borderRadius: rf(5),
    borderColor: colors.primary,
    paddingHorizontal: rf(11),
    paddingVertical:rf(13),
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inpstyle: {
    fontSize: rf(16),
    width: '85%',
  },
});

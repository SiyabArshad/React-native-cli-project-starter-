import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAuth} from '../context/auth/AuthContext';

export default function Splash() {
  const {login} = useAuth();
  return (
    <View style={styles.mncon}>
      <Text className="text-3xl">Welcome Back</Text>
      <TouchableOpacity onPress={login} className="my-5 py-3 px-5 bg-slate-500">
        <Text className="text-white">Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mncon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

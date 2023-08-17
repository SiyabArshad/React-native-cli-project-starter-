import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {useAuth} from '../context/auth/AuthContext';

export default function Setting({navigation}) {
  const {logout} = useAuth();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        drawerfunc={() => navigation.openDrawer()}
        screenname="Setting Screen"
      />
      <View style={styles.con}>
        <TouchableOpacity
          onPress={logout}
          className="my-5 py-3 px-5 bg-slate-500">
          <Text className="text-white">Logout</Text>
        </TouchableOpacity>
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

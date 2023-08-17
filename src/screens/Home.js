import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Config from 'react-native-config';
import notifee from '@notifee/react-native';

export default function Home({navigation}) {
  //start of notification
  async function onDisplayNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    await notifee.requestPermission();
    await notifee.displayNotification({
      id: '123',
      title: 'Test Notification',
      body: 'Some Like your comment',
      android: {
        channelId,
      },
    });
  }
  //end of notification display function

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        drawerfunc={() => navigation.openDrawer()}
        screenname="Home Screen"
      />
      <View style={styles.con}>
        <Text className="text-4xl text-black dark:text-white">Home</Text>
        <Text className="text-2xl text-black dark:text-white">
          {Config.ENV}
        </Text>
        <TouchableOpacity
          onPress={onDisplayNotification}
          className="my-5 py-3 px-5 bg-slate-500">
          <Text className="text-white">Alert</Text>
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

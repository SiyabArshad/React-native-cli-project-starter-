import {appname} from '../utils/appname';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getdata = async () => {
  const data = await AsyncStorage.getItem(appname);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error('Error parsing data from AsyncStorage:', error);
      return null;
    }
  }
  return null;
};

export const setdata = async info => {
  await AsyncStorage.setItem(appname, JSON.stringify(info));
};

export const removedata = async () => {
  await AsyncStorage.removeItem(appname);
};

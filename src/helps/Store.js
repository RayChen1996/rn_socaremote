import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (Key, Value) => {
  try {
    await AsyncStorage.setItem(Key, Value);
  } catch (error) {}
};

export const getData = async Key => {
  try {
    const value = await AsyncStorage.getItem(Key);
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (error) {}
};

export const removeData = async Key => {
  try {
    await AsyncStorage.removeItem(Key);
    return true;
  } catch (error) {
    return false;
  }
};

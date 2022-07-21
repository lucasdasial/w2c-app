import AsyncStorage from "@react-native-async-storage/async-storage";

export const setOnStoreData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

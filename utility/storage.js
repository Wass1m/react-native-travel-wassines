import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.log("couldnt store the token ", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

export default {
  storeToken,
  getToken,
  removeToken,
};

import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AuthNavigator from "./navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./store";
import { getToken, loadUser } from "./redux/actions/auth";
import AppNavigator from "./navigation/AppNavigator";
import { AppLoading } from "expo";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import Wrapper from "./Wrapper";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // useEffect(() => {
  //   store.dispatch(getToken());
  //   store.dispatch(loadUser());
  // }, []);

  const handleStart = () => {
    console.log("start");
    store.dispatch(getToken());
    store.dispatch(loadUser());
  };

  if (!isReady)
    return (
      <AppLoading startAsync={handleStart} onFinish={() => setIsReady(true)} />
    );

  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
}

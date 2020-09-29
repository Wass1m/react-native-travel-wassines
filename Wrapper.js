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
import { connect } from "react-redux";

const Wrapper = ({ auth: { user } }) => {
  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Wrapper);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

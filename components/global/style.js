import React from "react";
import { StyleSheet, Platform } from "react-native";

const colors = {
  primary: "#00a7ff",
  secondary: "#0ceba0",
};

const appText = StyleSheet.create({
  text: {
    fontSize: 24,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
  },
});

export default {
  colors,
  appText,
};

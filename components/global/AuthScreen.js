import React from "react";
import { StyleSheet } from "react-native";
import SafeScreen from "./SafeScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function AuthScreen({ children }) {
  return (
    <SafeScreen>
      <LinearGradient colors={["#0ceba0", "#00a7ff"]} style={styles.container}>
        {children}
      </LinearGradient>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

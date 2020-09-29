import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../global/CustomButton";
import style from "../global/style";
import SafeScreen from "../global/SafeScreen";
import routes from "../../navigation/routes";
import AuthScreen from "../global/AuthScreen";

export default function WelcomeScreen({ navigation }) {
  return (
    <AuthScreen>
      <View style={styles.logo}></View>
      <CustomButton
        title="Login"
        color="white"
        onPress={() => navigation.navigate(routes.LOGIN)}
      />
      <CustomButton
        title="Register"
        color="white"
        onPress={() => navigation.navigate(routes.REGISTER)}
      />
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    marginBottom: 50,
  },
});

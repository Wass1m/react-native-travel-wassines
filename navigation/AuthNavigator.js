import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../components/screens/WelcomeScreen";
import routes from "./routes";
import LoginScreen from "../components/screens/LoginScreen";
import RegisterScreen from "../components/screens/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
    <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;

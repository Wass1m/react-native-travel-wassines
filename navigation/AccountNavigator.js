import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import HomeScreen from "../components/screens/HomeScreen";
import AccountScreen from "../components/screens/AccountScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="account"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AccountNavigator;

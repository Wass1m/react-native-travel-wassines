import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import HomeScreen from "../components/screens/HomeScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;

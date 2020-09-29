import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import routes from "./routes";
import HomeScreen from "../components/screens/HomeScreen";
import ProductScreen from "../components/screens/ProductScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="productDetails"
      component={ProductScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;

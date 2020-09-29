import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import style from "../components/global/style";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: style.colors.secondary,
      activeTintColor: "white",
      inactiveBackgroundColor: "white",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="account"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="email" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;

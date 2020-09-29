import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function CustomTextInput({
  iconName,
  placeholder,
  ...otherProps
}) {
  return (
    <View style={styles.inputContainer}>
      <MaterialCommunityIcons name={iconName} size={35} color="grey" />
      <TextInput
        {...otherProps}
        style={styles.inputStyle}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
    borderRadius: 30,
    padding: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  inputStyle: {
    color: "black",
    marginLeft: 10,
    fontSize: 18,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
  },
});

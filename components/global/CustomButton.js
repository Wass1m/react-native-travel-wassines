import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import style from "../global/style";

export default function CustomButton({ color, title, onPress }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.container, { backgroundColor: color }]}
    >
      <Text style={style.appText.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
  },
});

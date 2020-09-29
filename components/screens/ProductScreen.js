import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProductScreen({ route }) {
  const item = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `http://192.168.1.122:5000/${item.images[0]}` }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  subTitle: {
    color: "black",
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

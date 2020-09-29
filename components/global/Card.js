import React from "react";
import { View, StyleSheet, TouchableNativeFeedbackBase } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Card({ title, description, imageUrl, onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.subTitle} numberOfLines={2}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
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

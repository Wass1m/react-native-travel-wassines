import React from "react";
import { FlatList, StyleSheet, Text, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SafeScreen from "../global/SafeScreen";
import { connect } from "react-redux";
import { logOut } from "../../redux/actions/auth";

const HomeScreen = ({ logOut }) => {
  handleLogout = () => {
    logOut();
  };

  return (
    <SafeScreen style={styles.container}>
      <Text>Home screen</Text>
      <FlatList />
      <Button title="logout" onPress={handleLogout} />
    </SafeScreen>
  );
};

// const mapStateToProps = state => ({
//   products : state.product
// })

export default connect(null, { logOut })(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

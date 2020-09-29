import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import SafeScreen from "../global/SafeScreen";
import style from "../global/style";
import CustomButton from "../global/CustomButton";
import { logOut } from "../../redux/actions/auth";

const AccountScreen = ({ logOut, auth: { user } }) => {
  return (
    <SafeScreen style={styles.container}>
      <Image style={styles.image} source={{ uri: `http:${user.avatar}` }} />
      <Text style={style.appText.text}>{user.name}</Text>
      <CustomButton
        title="Logout"
        color={style.colors.primary}
        onPress={() => logOut()}
      />
    </SafeScreen>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logOut })(AccountScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 50,
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  name: {},
});

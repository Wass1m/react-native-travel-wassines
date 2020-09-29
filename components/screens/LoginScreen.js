import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import AppForm from "../forms/AppForm";
import CustomField from "../forms/CustomField";
import SubmitButton from "../forms/SubmitButton";
import AuthScreen from "../global/AuthScreen";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";
import ActivityIndicator from "../global/ActivityIndicator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = ({ login }) => {
  const [load, setLoad] = useState(false);
  const handleSubmit = (formData) => {
    setLoad(true);
    login(formData);
  };

  return (
    <>
      <ActivityIndicator visible={load} />
      <AuthScreen>
        <AppForm
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={{ email: "", password: "" }}
        >
          <CustomField placeholder="Email" name="email" iconName="mail" />
          <CustomField placeholder="Password" name="password" iconName="lock" />
          <SubmitButton color="white" title="Login" />
        </AppForm>
      </AuthScreen>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(LoginScreen);

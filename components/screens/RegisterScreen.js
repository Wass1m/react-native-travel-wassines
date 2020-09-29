import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import AppForm from "../forms/AppForm";
import CustomField from "../forms/CustomField";
import SubmitButton from "../forms/SubmitButton";
import AuthScreen from "../global/AuthScreen";
import { connect } from "react-redux";
import { register } from "../../redux/actions/auth";
import ActivityIndicator from "../global/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(6).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = ({ register }) => {
  const [load, setLoad] = useState(false);
  const handleSubmit = (formData) => {
    setLoad(true);
    register(formData);
  };

  return (
    <>
      <ActivityIndicator visible={load} />
      <AuthScreen>
        <AppForm
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={{ name: "", email: "", password: "" }}
        >
          <CustomField placeholder="Name" name="name" iconName="account" />
          <CustomField placeholder="Email" name="email" iconName="mail" />
          <CustomField placeholder="Password" name="password" iconName="lock" />
          <SubmitButton color="white" title="Register" />
        </AppForm>
      </AuthScreen>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { register })(RegisterScreen);

import React from "react";
import CustomTextInput from "./CustomTextInput";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

export default function CustomField({ name, ...otherProps }) {
  const {
    values,
    setFieldValue,
    touched,
    setFieldTouched,
    handleSubmit,
    errors,
  } = useFormikContext();

  return (
    <>
      <CustomTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        autoCapitalize="none"
        autoCorrect={false}
        {...otherProps}
      />
      <ErrorMessage visible={touched} error={errors[name]} />
    </>
  );
}

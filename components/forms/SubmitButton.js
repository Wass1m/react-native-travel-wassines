import React from "react";

import { useFormikContext } from "formik";
import CustomButton from "../global/CustomButton";

export default function SubmitButton({ title, color }) {
  const { handleSubmit } = useFormikContext();
  return <CustomButton color={color} onPress={handleSubmit} title={title} />;
}

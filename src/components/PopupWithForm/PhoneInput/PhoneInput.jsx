/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import NumberFormat from "react-number-format";
import "./PhoneInput.css";

const PhoneInput = ({ title, formik, value, name, error }) => {
  const changeHandler = useCallback(
    (e) => formik.setFieldValue(name, e.target.value),
    [formik, name]
  );

  return (
    <NumberFormat
      placeholder="+ 7 (999) 000-00-00"
      title={title}
      onChange={changeHandler}
      className={`popup__input ${error && "popup__input-error"}`}
      format="+7 (###) ###-##-##"
      mask="_"
      value={value}
    />
  );
};
export default PhoneInput;

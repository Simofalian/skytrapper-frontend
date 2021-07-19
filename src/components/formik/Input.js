import React from "react";
import TextError from "../shared/TextError";
import { Field, ErrorMessage } from "formik";
const Input = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <div className="form-control__main">
        <label htmlFor={name}>{label}</label>
        <Field name={name} type="text" {...rest} />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;

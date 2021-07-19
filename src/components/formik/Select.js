import React from "react";
import TextError from "../shared/TextError";
import { Field, ErrorMessage } from "formik";
const Select = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} type="text" {...rest} />

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;

import React from "react";
import TextError from "./../shared/TextError";
import { Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = (props) => {
  const { name, label, ...rest } = props;

  return (
    <div className='form-control'>
      <div className='form-control__main'>
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
          {({ form, field }) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <DatePicker
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={(val) => setFieldValue(name, val)}
              />
            );
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePick;

import React from "react";
import TextError from "../shared/TextError";
import { Field, ErrorMessage } from "formik";
const Checkbox = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className='form-control'>
      <div className='form-control__main'>
        <label htmlFor={name}>{label}</label>
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <label htmlFor={option.key}>{option.key}</label>
                  <input
                    name={name}
                    {...field}
                    id={option.value}
                    type='checkbox'
                    value={option.value}
                    checked={option.checked}
                  />
                </React.Fragment>
              );
            });
          }}
        </Field>
      </div>

      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Checkbox;

import React from "react";
import "./form.scss";
import * as Yup from "yup";
import FormikControl from "./formik/FormikControl";
import { Formik, Form } from "formik";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email("invalid email format"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("Login Details", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className="form-container">
            <h1 className="form-control huge-heading">Log In to read more</h1>
            <FormikControl
              name="email"
              label="Email"
              type="email"
              control="input"
            />
            <FormikControl
              name="password"
              label="password"
              type="password"
              control="input"
            />
            <button type="submit" disabled={!formik.isValid}>
              Login
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Login;

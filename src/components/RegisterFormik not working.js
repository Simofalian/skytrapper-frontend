import React from "react";
import * as Yup from "yup";
import "./form.scss";
import { connect } from "react-redux";
import { signUp } from "./../redux";
import { Formik, Form } from "formik";
import FormikControl from "./formik/FormikControl";
const Register = (props) => {
  const checkboxOptions = [
    { key: "Male", value: "male" },
    { key: "Female", value: "female" },
  ];
  const skillsOptions = [
    { key: "Vanilla", value: "vanilla" },
    { key: "Angular", value: "angular" },
    { key: "React", value: "react" },
  ];
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bdDate: null,
    gender: "",
    skillsets: [],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf(["", Yup.ref("password")], "the password must match"),
    bdDate: Yup.date().required("Required").nullable(),
    gender: Yup.string().required("Required"),
    skillsets: Yup.array().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log("Reg details are :", values);

    props.signUp(values);
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form className='form-container'>
            <h1 className='form-control huge-heading'>
              Register for our services
            </h1>
            <FormikControl
              name='name'
              type='text'
              label='Name'
              control='input'
            />
            <FormikControl
              name='email'
              type='email'
              label='Email'
              control='input'
            />
            <FormikControl
              name='password'
              type='password'
              label='Password'
              control='input'
            />
            <FormikControl
              name='confirmPassword'
              type='password'
              label='Confirm Password'
              control='input'
            />
            <FormikControl name='bdDate' label='Select a date' control='date' />
            <FormikControl
              name='skillsets'
              control='checkbox'
              options={skillsOptions}
            />
            <FormikControl
              name='gender'
              control='radio'
              label='Gender :'
              options={checkboxOptions}
            />
            <button type='submit' disabled={!formik.isValid}>
              Register
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: () => dispatch(signUp()),
  };
};
export default connect(null, mapDispatchToProps)(Register);

import React from "react";
import * as Yup from "yup";
import FormikControl from "./formik/FormikControl";
import { Formik, Form } from "formik";
import "./form.scss";
const CreateBlog = () => {
  const initialValues = {
    title: "",
    snippet: "",
    body: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    snippet: Yup.string().required("Required"),
    body: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Blog Details", values);
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
            <h1 className="form-control huge-heading">Create Blog</h1>
            <FormikControl name="title" label="Title" control="input" />
            <FormikControl name="snippet" label="Snippet" control="input" />
            <FormikControl
              name="body"
              label="Body"
              as="textarea"
              control="textarea"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateBlog;

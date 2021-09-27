import React, { useState, useEffect } from "react";
import ButtonComponent from "../../atoms/button";
import { Form, SubmitButton, Input } from "formik-semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";

export type IloginForm = {
  isDisabled: boolean;
  isPrimary: boolean;
  isDisabledLogBtn?: boolean;
};

const LogInForm = ({ isDisabled = false, isPrimary = true }) => {
  useEffect(() => {
    setDisabledState(isDisabled);
  }, [isDisabled]);

  const [isDisabledState, setDisabledState] = useState(isDisabled);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .required("Password is required"),
  });

  const history = useHistory();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(_, { setSubmitting, resetForm }) => {
          setDisabledState(true);
          setTimeout(() => {
            setSubmitting(false);
            setDisabledState(false);
            resetForm();
            history.push("/tasks");
          }, 1000);
        }}
      >
        {({ isValid }) => (
          <Form size="large">
            <Input
              className="inputEmail"
              label="Email"
              placeholder="Email"
              disabled={isDisabledState}
              name="email"
              fluid
              errorPrompt
            />
            <Input
              className="inputPassword"
              label="Password"
              placeholder="Password"
              disabled={isDisabledState}
              name="password"
              type="password"
              fluid
              errorPrompt
            />
            <SubmitButton
              control={ButtonComponent}
              disabled={!isValid}
              primary={isPrimary}
              basic={!isPrimary}
              btnlabel="Login"
              fluid
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LogInForm;

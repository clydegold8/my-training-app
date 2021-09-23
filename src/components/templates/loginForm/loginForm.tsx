import React, {useState, useEffect} from 'react';
import InputText from '../../atoms/inputs'
import ButtonComponent from '../../atoms/button'
// import {Form} from 'semantic-ui-react'
import {
    Form,
    SubmitButton,
    Input
  } from "formik-semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";


export type IloginForm = {
    isDisabled:boolean,
    isPrimary:boolean,
    isDisabledLogBtn?:boolean
}

const LogInForm = (
    {
        isDisabled = false,
        isPrimary = true,
    }) => {
    
    useEffect(() => {
        setDisabledState(isDisabled);
        setIsPrimaryState(isPrimary)
    }, [isDisabled,isPrimary]);

    const [isDisabledState, setDisabledState] = useState(isDisabled);
    const [isPrimaryState, setIsPrimaryState] = useState(isPrimary);

    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string()
            .min(8, "Must be at least 8 characters")
            .required("Password is required")
    });


    return(
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
          }, 1000);
        }}
        >
        {props => (
            <Form size="large">
            {console.log(isDisabledState,props)}
                <Input
                    control={InputText}
                    label="Email"
                    placeholder="Email"
                    isDisabled={isDisabledState}
                    disabled={isDisabledState}
                    name="email"
                    fluid
                    errorPrompt
                />
                <Input
                    control={InputText}
                    label="Password"
                    placeholder="Password"
                    isDisabled={isDisabledState}
                    disabled={isDisabledState}
                    name="password"
                    type="password"
                    fluid
                    errorPrompt
                />
                <SubmitButton
                control={ButtonComponent}
                disabled={!props.isValid}
                primary={isPrimaryState}
                basic={!isPrimaryState}
                btnlabel="Login"
                fluid 
                />
            </Form>
       )}
        </Formik>
        </>
    )
}

export default  LogInForm;
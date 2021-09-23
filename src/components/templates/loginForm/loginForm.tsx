import React from 'react';
import InputText from '../../atoms/inputs'
import ButtonComponent from '../../atoms/button'
import {Form} from 'semantic-ui-react'
import { action } from '@storybook/addon-actions';
import { StyledFormField } from './style/loginForm.styled.component';


export type loginFormInterface = {
    isDisabled:boolean,
    isPrimary:boolean,
    isLoading:boolean,
    isError?:boolean,
}

const LogInForm = (
    {
        isDisabled = false,
        isPrimary = true,
        isLoading = false,
        isError = false,
    }:loginFormInterface) => {
    return(
        <>
         <Form onSubmit={action('onSubmit')}>
            <Form.Group widths="equal">
                <StyledFormField
                control={InputText}
                fluid
                label="Email"
                pattern="[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{1,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"
                placeholder="Email"
                type="email"
                isDisabled={isDisabled}
                disabled={isDisabled}
                isError={isError}
                error ={isError}
                isErrorProp={isError}
                name="email"
                />
            </Form.Group>
            <Form.Group widths="equal">
              <StyledFormField
                control={InputText}
                fluid
                label="Password"
                placeholder="Password"
                type="password"
                isDisabled={isDisabled}
                disabled={isDisabled}
                isError={isError}
                error ={isError}
                isErrorProp={isError}
                name="password"
              />
            </Form.Group>
            <Form.Field>
                <ButtonComponent
                color="blue"
                isPrimary={isPrimary}
                label="Login"
                isDisabled={isDisabled}
                isLoading={isLoading}
                onClickHandler={(e:any) => {}}
                />
            </Form.Field>
         </Form>
        </>
    )
}

export default  LogInForm;
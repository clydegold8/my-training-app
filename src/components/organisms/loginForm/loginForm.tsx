import React from "react";
import InputText from "../../atoms/inputs";
import ButtonComponent from "../../atoms/button";
import { Form } from "semantic-ui-react";
import { action } from "@storybook/addon-actions";
import { StyledFormField } from "./style/loginForm.styled.component";

export type loginFormInterface = {
  isDisabled: boolean;
  isPrimary: boolean;
  isLoading: boolean;
  isError?: boolean;
  onHandleSubmit(e: any): any;
};

const LogInForm = ({
  isDisabled = false,
  isPrimary = true,
  isLoading = false,
  isError = false,
}: loginFormInterface) => {
  return (
    <>
      <Form onSubmit={action("onSubmit")}>
        <Form.Group widths="equal">
          <StyledFormField
            control={InputText}
            fluid
            label="Email"
            placeholder="Email"
            isDisabled={isDisabled}
            disabled={isDisabled}
            isError={isError}
            error={isError}
            iserrorprop={isError.toString()}
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
            error={isError}
            iserrorprop={isError.toString()}
            name="password"
          />
        </Form.Group>
        <Form.Field>
          <ButtonComponent
            color="blue"
            isPrimary={isPrimary}
            btnlabel="Login"
            isDisabled={isDisabled}
            isLoading={isLoading}
            onClickHandler={() => {}}
          />
        </Form.Field>
      </Form>
    </>
  );
};

export default LogInForm;

import React from 'react';
import { StyledInput,Styledlabel } from './style/input.styled.component';

export type textInput = {
    type:string,
    label?:string,
    placeholder?:string,
    pattern?:string,
    isDisabled:boolean,
    isError?:boolean,
    icon?:string,
    iconPosition?:any,
    name?:string,
}

const InputText = ({
    type = 'text',
    placeholder,
    pattern,
    isDisabled = false,
    isError,
    label,
    icon,
    iconPosition,
    name,
    ...props
}:textInput) => {
  return (
    <>
    <Styledlabel isErrorProp={isError}>{label}</Styledlabel>
    <StyledInput fluid
        isDisabledProp={isDisabled}
        disabled={isDisabled}
        error={isError}
        isErrorProp={isError}
        type={type}
        pattern={pattern}
        placeholder={placeholder}
        icon={icon}
        iconPosition={iconPosition}
        name={name}
        {...props} />
    </>
  )
}

export default InputText;
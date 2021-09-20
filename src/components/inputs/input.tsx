import { Input } from 'semantic-ui-react';
import './style/input.scss';

export interface textInput  {
    type?:string,
    label?:string,
    placeholder?:string,
    pattern?:string,
    isDisabled:boolean,
    isError:boolean,
}

const InputText = ({
    type = 'text',
    placeholder = '',
    pattern,
    isDisabled = false,
    isError = false,
    label='',
    ...props
}:textInput) => {
  return (
    <>
    <label className={(isError?'onError':'')}>{label}</label>
    <Input fluid
        className={'inputText' + (isDisabled?' disabled':'')}
        disabled={isDisabled}
        error={isError}
        type={type}
        pattern={pattern}
        placeholder={placeholder} />
    </>
  )
}

export default InputText;
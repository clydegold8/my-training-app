import React from 'react';
import { SemanticCOLORS } from 'semantic-ui-react';
import { Styledbutton } from './style/button.styled.component';


type buttonProps = {
  label?:string,
  color?:SemanticCOLORS,
  isLoading:boolean,
  isDisabled:boolean,
  isPrimary:boolean,
}

const ButtonComponent = ({ 
label,
isLoading = false,
isDisabled = false,
isPrimary = true,
color,
...props }:buttonProps,ClickHandler:any) => {
  return (
    <Styledbutton
      onClick={(event:any) => ClickHandler(event)}
      color= {color}
      primary={isPrimary}
      basic={!isPrimary}
      loading={isLoading}
      disabled={isDisabled}
      isPrimaryProp={isPrimary}
      isDisabledProp={isDisabled}
      {...props}
    >
      {label}
    </Styledbutton>
  )
}

export default ButtonComponent;
import React from 'react';
import { Button, SemanticCOLORS } from 'semantic-ui-react';
import './style/button.scss';


export interface buttonProps  {
  label?:string,
  color?:SemanticCOLORS,
  isLoading:boolean,
  isDisabled:boolean,
  isPrimary:boolean,
}

const ButtonComponent = ({ 
label,
isLoading,
isDisabled,
isPrimary,
color,
...props }:buttonProps,ClickHandler: (arg0: any) => void) => {
  return (
    <Button
      onClick={(event:any) => ClickHandler(event)}
      color= {color}
      primary={isPrimary}
      basic={!isPrimary}
      loading={isLoading}
      disabled={isDisabled}
      {...props}
    >
      {label}
    </Button>
  )
}

export default ButtonComponent;
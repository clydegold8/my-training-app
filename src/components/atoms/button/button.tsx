import { SemanticCOLORS } from 'semantic-ui-react';
import { Styledbutton } from './style/button.styled.component';


type buttonProps = {
  label?:string,
  color?:SemanticCOLORS,
  isLoading:boolean,
  isDisabled:boolean,
  isPrimary:boolean,
  onClickHandler(): void;
}

const ButtonComponent = ({ 
label,
isLoading = false,
isDisabled = false,
isPrimary = true,
onClickHandler,
color,
...props }:buttonProps) => {
  return (
    <Styledbutton
      onClick={() => onClickHandler()}
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
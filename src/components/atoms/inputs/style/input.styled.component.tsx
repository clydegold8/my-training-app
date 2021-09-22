import { Input } from 'semantic-ui-react';
import styled from 'styled-components';
import {fontColor,fontLink} from '../../../utils/fontColor.context';

export const Styledlabel = styled.label<labelInterface>`
  &&&&&{
    ${fontLink.url};
    ${fontLink.fontFamily};
    font-weight: 400;
    font-size: 14px;
    line-height: 16.41px;
    color: ${props => props.isErrorProp ? fontColor.error : fontColor.default};
  }
`;

export const StyledInput = styled(Input)<inputInterface>`
  &&&&&{
    ${fontLink.url};
    ${fontLink.fontFamily};
    margin-top: 11px;
    ${props => props.isDisabledProp? 'cursor: not-allowed;' : ''}
    color: ${props => props.isErrorProp ? fontColor.error : fontColor.default};

    ${props => props.isErrorProp ? `
      input{
        background-color: #fff6f6;
        border-color: #e0b4b4;
        color: #9f3a38;
        box-shadow: none;
      }
    ` : ``}
  }
`;

type labelInterface = {
    isErrorProp?:boolean,
}

type inputInterface ={
  isDisabledProp?:boolean,
  isErrorProp?:boolean,
}
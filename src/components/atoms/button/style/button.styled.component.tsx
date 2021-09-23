import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import {fontLink} from '../../../utils/fontColor.context';

export const Styledbutton = styled(Button)<buttonInterface>`
&&&&&{
  ${fontLink.url};
  ${fontLink.fontFamily};
  border-radius: 4px;
  ${props => props.isPrimaryProp? '' : `
    color: #2F80ED;
    background: #E0ECFD;
    border-radius: 4px;
    box-shadow: none;
  `}
  ${props => props.isDisabledProp? `
    cursor: not-allowed;
    pointer-events: unset !important;
  ` : ''}
}

`;

export type buttonInterface = {
  isPrimaryProp?:boolean,
  isDisabledProp?:boolean
}
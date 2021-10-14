import { Button } from 'semantic-ui-react'
import styled from 'styled-components'
import { fontColor, fontLink } from '../../../utils/fontColor.context'

export type buttonInterface = {
  primary?: boolean;
  disabled?: boolean;
};

export const Styledbutton = styled(Button)<buttonInterface>`
  &&&&& {
    ${fontLink.url};
    ${fontLink.fontFamily};
    border-radius: 4px;
    ${(props) =>
      props.primary
        ? ''
        : `
    color: ${fontColor.header};
    background: ${fontColor.btnBackground};
    border-radius: 4px;
    box-shadow: none;
  `}
    ${(props) =>
      props.disabled
        ? `
    cursor: not-allowed;
    pointer-events: unset !important;
  `
        : ''}
  }
`

import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import { fontColor, fontLink } from '../../../utils/fontColor.context'

export const StyledGridImageColumn = styled(Grid.Column)`
  &&&&& {
    margin-top: 108px;
  }
`

export const StyledGridSecondColumn = styled(Grid.Column)`
  &&&&& {
    ${fontLink.url};
    ${fontLink.fontFamily};
    color: ${fontColor.default};
    text-align: center;

    p:nth-child(1) {
      margin-top: 22px;
      font-size: 14px;
      font-weight: 400;
    }

    p:nth-child(2) {
      color: ${fontColor.header};
      cursor: pointer;
    }
  }
`

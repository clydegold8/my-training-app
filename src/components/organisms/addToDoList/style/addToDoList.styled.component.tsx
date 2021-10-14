import { Button, Grid, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { fontColor } from '../../../utils/fontColor.context'

export const StyledGridFirstColumn = styled(Grid.Column)`
  &&&&& {
    i {
      color: ${fontColor.header};
      font-size: 25px;
      margin-top: 10px;
      position: relative;
      top: 4px;
      cursor: pointer;
    }
    span {
      font-size: 16px;
      font-weight: 700;
    }
  }
`

export const StyledGridSegment = styled(Segment)`
  &&&&& {
    position: relative;
    top: 5%;
    z-index: 1000;
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    background-color: ${fontColor.segmentColor};
  }
`

export const StyledCircularBtn = styled(Button)`
  &&&&& {
    position: relative;
    float: right;
    top: -32px;
    background-color: ${fontColor.default};
    color: ${fontColor.whiteBackground};
    font-size: 10px;
    right: 5px;
  }
`

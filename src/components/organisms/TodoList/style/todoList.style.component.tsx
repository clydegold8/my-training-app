import { Button, Modal, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import { fontColor, fontLink } from '../../../utils/fontColor.context'

export const StyledGridModal = styled(Modal)`
  &&&&& {
    ${fontLink.url};
    ${fontLink.fontFamily};
    .header {
      text-align: center;
    }
    .actions {
      text-align: center;
    }
    .yesBtn {
      background-color: ${fontColor.header};
      color: ${fontColor.whiteBackground};
    }
    .noBtn {
      background-color: #fce0e0;
      color: ${fontColor.redColor};
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
    float: right;
    position: fixed;
    right: 35px;
    background-color: ${fontColor.header};
    bottom: 20px;

    i {
      color: ${fontColor.whiteBackground};
    }
  }
`

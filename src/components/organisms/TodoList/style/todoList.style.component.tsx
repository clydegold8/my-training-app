import { Modal } from "semantic-ui-react";
import styled from "styled-components";
import { fontLink } from "../../../utils/fontColor.context";
import { Segment } from "semantic-ui-react";

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
      background-color: #2f80ed;
      color: #ffffff;
    }
    .noBtn {
      background-color: #fce0e0;
      color: #ed2f2f;
    }
  }
`;

export const StyledGridSegment = styled(Segment)`
  &&&&& {
    position: relative;
    top: 5%;
    z-index: 1000;
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    background-color: #6fcf97;
  }
`;

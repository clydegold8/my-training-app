import { Button } from "semantic-ui-react";
import styled from "styled-components";
import { fontLink } from "../../../utils/fontColor.context";

export const Styledbutton = styled(Button)`
  &&&&& {
    ${fontLink.url};
    ${fontLink.fontFamily};
    border-radius: 4px;
    ${(props: buttonInterface) =>
      props.isPrimaryProp
        ? ""
        : `
    color: #2F80ED;
    background: #E0ECFD;
    border-radius: 4px;
    box-shadow: none;
  `}
    ${(props: buttonInterface) =>
      props.isdisableddrop
        ? `
    cursor: not-allowed;
    pointer-events: unset !important;
  `
        : ""}
  }
`;

export type buttonInterface = {
  isPrimaryProp?: boolean;
  isdisableddrop?: boolean;
};

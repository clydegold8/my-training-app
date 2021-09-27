import { Grid } from "semantic-ui-react";
import styled from "styled-components";
import { fontColor, fontLink } from "../../../utils/fontColor.context";

export const StyledGridHeaderColumn = styled(Grid.Column)`
  &&&&& {
    ${fontLink.url};
    ${fontLink.fontFamily};
    margin-top: 16px;
    margin-left: 15px;
    color: ${fontColor.header};
    font-weight: 700;

    img {
      margin-top: 12px;
      cursor: pointer;
    }
  }
`;

export const StyledGridSearchColumn = styled(Grid.Column)`
  &&&&& {
    ${fontLink.url};
    ${fontLink.fontFamily};
    padding-right: 0px;

    .twelve.wide.column {
      padding-right: 0px;
    }

    .ui.fluid.left.icon.input {
      margin-left: 16px;
    }
  }
`;

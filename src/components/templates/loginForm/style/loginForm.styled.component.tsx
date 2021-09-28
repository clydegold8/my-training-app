import { Form } from "semantic-ui-react";
import styled from "styled-components";
import { fontColor, fontLink } from "../../../utils/fontColor.context";

export const StyledFormField = styled(Form.Field)<formfieldInterface>`
  &&&&& {
    ${fontLink.url};
    ${fontLink.fontFamily};
    label {
      font-weight: 400;
      font-size: 14px;
      ${(props) =>
        props.isErrorProp
          ? ` color: ${fontColor.error};`
          : ` color: ${fontColor.default};`}
    }
  }
`;

type formfieldInterface = {
  isErrorProp?: boolean;
};

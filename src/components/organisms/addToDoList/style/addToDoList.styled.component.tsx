import { Grid, Segment } from "semantic-ui-react";
import styled from "styled-components";

export const StyledGridFirstColumn = styled(Grid.Column)`
  &&&&& {
    i {
      color: #2f80ed;
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

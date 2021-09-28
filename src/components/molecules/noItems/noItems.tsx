import React from "react";
import { Grid, Image } from "semantic-ui-react";
import TasksIcon from "../../pages/assets/images/TasksIcon.png";
import {StyledGridImageColumn, StyledGridSecondColumn} from "./style/noItems.styled.component"

export type InoItemsComponent = {
    description?:string,
    subdescription?:string,
}


const NoItemsComponent = ({
    description = 'To do list increases productivity',
    subdescription = 'Add your first to do'
}:InoItemsComponent) => {
  return (
    <>
      <Grid>
        <Grid.Row>
          <StyledGridImageColumn width={16}>
            <Image centered src={TasksIcon} />
          </StyledGridImageColumn>
          <StyledGridSecondColumn width={16}>
                <p>{description}</p>
                <p>{subdescription}</p>
          </StyledGridSecondColumn>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default NoItemsComponent;

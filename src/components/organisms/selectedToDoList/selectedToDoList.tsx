import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import { StyledGridFirstColumn } from "./style/selectedToDoList.styled.component";
import NoItemsComponent from "../../molecules/noItems";
import {useHistory} from "react-router-dom";

const SelectToDoListComponent = () => {

    const handleClick = () => {
        history.push("/tasks");
    }

    const history = useHistory();
  return (
    <>
      <Grid>
        <Grid.Row>
          <StyledGridFirstColumn>
            <Icon onClick={()=>handleClick()} name="angle left" />
            <span>Select To Do</span>
          </StyledGridFirstColumn>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <NoItemsComponent description="No to do yet" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default SelectToDoListComponent;

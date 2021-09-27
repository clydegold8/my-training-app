import React from "react";
import LogOut from "../assets/images/LogOut.png";
import { Grid, Image } from "semantic-ui-react";
import {
  StyledGridHeaderColumn,
  StyledGridSearchColumn,
} from "./styles/tasks.styled.component";
import SearchHead from "../../templates/searchForm/";
import NoItemsComponent from "../../molecules/noItems";

const TasksPage = () => {
  return (
    <>
      <Grid>
        <Grid.Row>
          <StyledGridHeaderColumn width={12}>
            <h1>ToDoish</h1>
          </StyledGridHeaderColumn>
          <StyledGridHeaderColumn width={3}>
            <Image centered src={LogOut} />
          </StyledGridHeaderColumn>
        </Grid.Row>
        <Grid.Row>
          <StyledGridSearchColumn>
            <SearchHead
              isDisabled={false}
              isLoading={false}
              isPrimary={false}
              placeholder=""
            />
          </StyledGridSearchColumn>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <NoItemsComponent />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default TasksPage;

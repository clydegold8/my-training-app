import React, { useState } from "react";
import { Grid, Icon, Input, TransitionablePortal } from "semantic-ui-react";
import {
  StyledGridFirstColumn,
  StyledGridSegment,
} from "./style/addToDoList.styled.component";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ITask } from "../../pages/services/types/type.d";
import { Dispatch } from "redux";
import { addTask } from "../../pages/services/store/actionCreators";

const AddToDoListComponent = () => {
  const [showToast, setShowToast] = useState(false);

  const dispatch: Dispatch<any> = useDispatch();

  const addToDoTask = React.useCallback(
    (task: ITask) => dispatch(addTask(task)),
    [dispatch]
  );

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      let newTask: ITask = {
        id: 0,
        taskName: (e.target as HTMLInputElement).value,
      };
      addToDoTask(newTask);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  };

  const handleClick = () => {
    history.push("/tasks");
  };

  const history = useHistory();
  return (
    <>
      <Grid>
        <Grid.Row>
          <StyledGridFirstColumn>
            <Icon onClick={() => handleClick()} name="angle left" />
            <span>Add To Do</span>
          </StyledGridFirstColumn>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1} />
          <Grid.Column width={14}>
            <Input fluid focus placeholder="To do" onKeyDown={handleKeyDown} />
          </Grid.Column>
          <Grid.Column width={1} />
        </Grid.Row>
      </Grid>

      <TransitionablePortal open={showToast}>
        <StyledGridSegment>
          <p>To do added</p>
        </StyledGridSegment>
      </TransitionablePortal>
    </>
  );
};

export default AddToDoListComponent;

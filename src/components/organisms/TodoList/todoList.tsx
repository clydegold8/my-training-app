import React, { useState } from "react";
import { Grid, Modal, Button, TransitionablePortal } from "semantic-ui-react";

import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { removeTask } from "../../pages/services/store/actionCreators";
import { Dispatch } from "redux";
import { ITask, TaskState } from "../../pages/services/types/type.d";
import TaskComponent from "../../molecules/task";
import {
  StyledGridModal,
  StyledGridSegment,
} from "./style/todoList.style.component";
import NoItemsComponent from "../../molecules/noItems";
import { useHistory } from "react-router-dom";

const ToDoListComponent = () => {
  const history = useHistory();

  const tasks: readonly ITask[] = useSelector(
    (state: TaskState) => state.tasks,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const [isOpenState, setOpenState] = useState({
    openDialog: false,
    tasks: {
      id: 0,
      taskName: "",
    },
  });

  const [showToast, setShowToast] = useState(false);

  const deleteTask = React.useCallback(
    (task: ITask) => dispatch(removeTask(task)),
    [dispatch]
  );

  const onHandleDialog = (event: any) => {
    if (event) {
      deleteTask(isOpenState.tasks);
      setShowToast(true);
      setOpenState({
        openDialog: false,
        tasks: isOpenState.tasks,
      });
      setTimeout(() => {
        setShowToast(false);
      }, 1000);
    } else {
      setOpenState({
        openDialog: false,
        tasks: isOpenState.tasks,
      });
    }
  };

  const onHandleDropdown = (_e: any, data: any, taskID: number) => {
    const selectedTask: any = tasks.filter((task) => task.id === taskID);
    if (data.value === "delete") {
      setOpenState({
        openDialog: true,
        tasks: selectedTask[0],
      });
    } else {
      history.push(`/updatetodo/${selectedTask[0].id}`);
    }
  };

  return (
    <>
      <Grid>
        {tasks.length > 0 ? (
          tasks.map((task: ITask) => (
            <TaskComponent
              key={task.id}
              taskID={task.id}
              taskName={task.taskName}
              isTask={true}
              onHandleCheckboxChange={() => {}}
              onHandleDropDownChange={(e, data, taskID) =>
                onHandleDropdown(e, data, taskID)
              }
            />
          ))
        ) : (
          <Grid.Row>
            <Grid.Column textAlign="center">
              <NoItemsComponent />
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
      <StyledGridModal
        size="mini"
        centered={true}
        open={isOpenState.openDialog}
      >
        <Modal.Header>
          Delete To Do - ({isOpenState.tasks.taskName}) ?
        </Modal.Header>
        <Modal.Actions>
          <Button className="yesBtn" onClick={() => onHandleDialog(true)}>
            Yes
          </Button>
          <Button className="noBtn" onClick={() => onHandleDialog(false)}>
            No
          </Button>
        </Modal.Actions>
      </StyledGridModal>
      <TransitionablePortal open={showToast}>
        <StyledGridSegment>
          <p>To do Deleted</p>
        </StyledGridSegment>
      </TransitionablePortal>
    </>
  );
};

export default ToDoListComponent;

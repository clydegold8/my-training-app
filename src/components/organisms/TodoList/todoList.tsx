import React, { useState } from "react";
import {
  Grid,
  Modal,
  Button,
  TransitionablePortal,
  DropdownItemProps,
} from "semantic-ui-react";

import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  removeTask,
  crashOutTask,
} from "../../../services/redux/store/actionCreators";
import { Dispatch } from "redux";
import { ITask, TaskState } from "../../../services/redux/types/type.d";
import TaskComponent from "../../molecules/task";
import {
  StyledGridModal,
  StyledGridSegment,
  StyledCircularBtn,
} from "./style/todoList.style.component";
import NoItemsComponent from "../../molecules/noItems";
import { useHistory } from "react-router-dom";
import TasksService from "../../../services/tasks.services";

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

  const crashOutSelectedTask = React.useCallback(
    (task: ITask) => dispatch(crashOutTask(task)),
    [dispatch]
  );

  const onHandleDialog = (event: any) => {
    if (event) {
      TasksService.removeTask(isOpenState.tasks.id)
        .then((response: any) => {
          deleteTask(response.data.tasks[0]);
        })
        .catch((e) => {});

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

  const onHandleDropdown = (data: DropdownItemProps, taskID: number) => {
    const selectedTask: ITask[] = tasks.filter((task) => task.id === taskID);
    if (data.value === "delete") {
      setOpenState({
        openDialog: true,
        tasks: selectedTask[0],
      });
    } else {
      history.push(`/updatetodo/${selectedTask[0].id}`);
    }
  };

  const onHandleColumnClick = (taskID: number) => {
    const selectedTask: ITask[] = tasks.filter((task) => task.id === taskID);
    selectedTask[0].isCrashOut = !selectedTask[0].isCrashOut;
    TasksService.updateTask(taskID, selectedTask[0])
      .then((response: any) => {
        crashOutSelectedTask(response.data.tasks[0]);
      })
      .catch((e) => {});
  };

  const handleAddBtn = () => {
    history.push(`/addtodo`);
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
              isCrashout={task.isCrashOut}
              isTask={true}
              onHandleCheckboxChange={() => {}}
              onHandleColumnClick={onHandleColumnClick}
              onHandleDropDownChange={(data, taskID) =>
                onHandleDropdown(data, taskID)
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
      <StyledCircularBtn onClick={() => handleAddBtn()} circular icon="add" />
    </>
  );
};

export default ToDoListComponent;

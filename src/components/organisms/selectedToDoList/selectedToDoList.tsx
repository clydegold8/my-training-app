import React, { useState } from "react";
import {
  CheckboxProps,
  Grid,
  Icon,
  TransitionablePortal,
} from "semantic-ui-react";
import {
  StyledGridFirstColumn,
  StyledGridRow,
  StyledGridSegment,
} from "./style/selectedToDoList.styled.component";
import NoItemsComponent from "../../molecules/noItems";
import { useHistory } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { ITask, TaskState } from "../../../services/redux/types/type.d";
import TaskComponent from "../../molecules/task";
import { Dispatch } from "redux";
import {
  completeSelectedTask,
  deleteSelectedTask,
} from "../../../services/redux/store/actionCreators";

const SelectToDoListComponent = () => {
  const history = useHistory();

  const dispatch: Dispatch<any> = useDispatch();
  const [toastLabel, setToastLabel] = useState("");
  const [showBox, setShowBox] = useState(false);
  const [allChecked, setChecked] = useState(false);
  const [tasksSelected, setTasksSelected] = useState<ITask[]>([]);

  const handleClick = () => {
    history.push("/tasks");
  };

  const tasks: readonly ITask[] = useSelector(
    (state: TaskState) => state.tasks,
    shallowEqual
  );

  const handleCheckBoxChange = (data: CheckboxProps) => {
    if (!showBox) {
      setShowBox(true);
    }

    if (!allChecked) {
      if (data.checked) {
        const filteredSelectedTask: ITask[] = tasks.filter(
          (task) => task.id === data.value
        );
        setTasksSelected([...tasksSelected, filteredSelectedTask[0]]);
      } else {
        const filteredUnSelectedTask: ITask[] = tasks.filter(
          (task) => task.id === data.value
        );
        const selectedTasks: ITask[] = tasksSelected.filter(
          (task) => task.id !== filteredUnSelectedTask[0].id
        );
        setTasksSelected(selectedTasks);
        if (selectedTasks.length === 0) {
          setShowBox(false);
        }
      }
    }
  };

  const onToggleSelectAll = () => {
    setChecked(!allChecked);
    if (allChecked) {
      setTasksSelected([]);
      setShowBox(false);
    } else {
      setTasksSelected([...tasks]);
    }
  };

  const onCompleteSelectedTasks = () => {
    completeSelectedTasks(tasksSelected[0], tasksSelected);
    setToastLabel("To Do Completed");
    setTimeout(() => {
      setToastLabel("");
      handleClick();
    }, 2000);
  };

  const onDeleteSelectedTasks = () => {
    deleteSelectedTasks(tasksSelected[0], tasksSelected);
    setToastLabel("To Do Deleted");
    setTimeout(() => {
      setToastLabel("");
      handleClick();
    }, 2000);
  };

  const completeSelectedTasks = React.useCallback(
    (task: ITask, taskArr: ITask[]) =>
      dispatch(completeSelectedTask(task, taskArr)),
    [dispatch]
  );

  const deleteSelectedTasks = React.useCallback(
    (task: ITask, taskArr: ITask[]) =>
      dispatch(deleteSelectedTask(task, taskArr)),
    [dispatch]
  );

  return (
    <>
      <Grid>
        <Grid.Row>
          <StyledGridFirstColumn>
            <Icon onClick={() => handleClick()} name="angle left" />
            <span>Select To Do</span>
          </StyledGridFirstColumn>
        </Grid.Row>
        {tasks.length > 0 ? (
          tasks.map((task: ITask) => (
            <TaskComponent
              key={task.id}
              taskID={task.id}
              taskName={task.taskName}
              isCrashout={task.isCrashOut}
              isAllchecked={allChecked}
              isTask={false}
              onHandleCheckboxChange={(data) => handleCheckBoxChange(data)}
              onHandleColumnClick={(taskID) => {}}
              onHandleDropDownChange={(data, taskID) => {}}
            />
          ))
        ) : (
          <Grid.Row>
            <Grid.Column textAlign="center">
              <NoItemsComponent />
            </Grid.Column>
          </Grid.Row>
        )}
        {showBox ? (
          <StyledGridRow>
            <Grid.Column width={16}>
              {!allChecked ? (
                <p onClick={() => onToggleSelectAll()}>Select All</p>
              ) : (
                <p onClick={() => onToggleSelectAll()}>Deselect All</p>
              )}
              <p onClick={() => onCompleteSelectedTasks()}>Complete Selected</p>
              <p onClick={() => onDeleteSelectedTasks()}>Delete Selected</p>
            </Grid.Column>
          </StyledGridRow>
        ) : (
          ""
        )}
      </Grid>
      <TransitionablePortal open={!!toastLabel}>
        <StyledGridSegment>
          <p>{toastLabel}</p>
        </StyledGridSegment>
      </TransitionablePortal>
    </>
  );
};

export default SelectToDoListComponent;

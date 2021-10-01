import { ITask, TaskAction, DispatchType } from "../types/type.d";
import * as actionTypes from "./actionTypes";

export const simulateHttpRequest = (action: TaskAction) => {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
};

export const addTask = (task: ITask) => {
  const action: TaskAction = {
    type: actionTypes.ADD_TASK,
    task,
    taskArr: [],
  };
  return simulateHttpRequest(action);
};

export const updateTask = (task: ITask) => {
  const action: TaskAction = {
    type: actionTypes.UPDATE_TASK,
    task,
    taskArr: [],
  };
  return simulateHttpRequest(action);
};

export const removeTask = (task: ITask) => {
  const action: TaskAction = {
    type: actionTypes.REMOVE_TASK,
    task,
    taskArr: [],
  };
  return simulateHttpRequest(action);
};

export const crashOutTask = (task: ITask) => {
  const action: TaskAction = {
    type: actionTypes.CRASHOUT_TASK,
    task,
    taskArr: [],
  };
  return simulateHttpRequest(action);
};

export const completeSelectedTask = (task: ITask, taskArr: ITask[]) => {
  const action: TaskAction = {
    type: actionTypes.COMPLETE_SELECTED_TASK,
    task,
    taskArr,
  };
  return simulateHttpRequest(action);
};

export const deleteSelectedTask = (task: ITask, taskArr: ITask[]) => {
  const action: TaskAction = {
    type: actionTypes.DELETE_SELECTED_TASK,
    task,
    taskArr,
  };
  return simulateHttpRequest(action);
};

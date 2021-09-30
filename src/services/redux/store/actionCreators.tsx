import { ITask, TaskAction, DispatchType } from "../types/type.d";
import * as actionTypes from "./actionTypes";

export function simulateHttpRequest(action: TaskAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export function addTask(task: ITask) {
  const action: TaskAction = {
    type: actionTypes.ADD_TASK,
    task,
    taskArr: [],
  };

  return simulateHttpRequest(action);
}

export function updateTask(task: ITask) {
  const action: TaskAction = {
    type: actionTypes.UPDATE_TASK,
    task,
    taskArr: [],
  };
  return simulateHttpRequest(action);
}

export function removeTask(task: ITask) {
  const action: TaskAction = {
    type: actionTypes.REMOVE_TASK,
    task,
    taskArr: [],
  };
  return simulateHttpRequest(action);
}

export function crashOutTask(task: ITask) {
  const action: TaskAction = {
    type: actionTypes.CRASHOUT_TASK,
    task,
    taskArr: [],
  };
  return simulateHttpRequest(action);
}

export function completeSelectedTask(task: ITask, taskArr: ITask[]) {
  const action: TaskAction = {
    type: actionTypes.COMPLETE_SELECTED_TASK,
    task,
    taskArr,
  };
  return simulateHttpRequest(action);
}

export function deleteSelectedTask(task: ITask, taskArr: ITask[]) {
  const action: TaskAction = {
    type: actionTypes.DELETE_SELECTED_TASK,
    task,
    taskArr,
  };
  return simulateHttpRequest(action);
}

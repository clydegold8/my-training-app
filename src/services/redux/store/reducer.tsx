import * as actionTypes from "./actionTypes";
import { ITask, TaskAction, TaskState } from "../types/type.d";

let initialState: TaskState = { tasks: [] };

const reducer = (
  state: TaskState = initialState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case actionTypes.SET_INITIAL_STATE:
      return {
        ...state,
        tasks: action.taskArr,
      };
    case actionTypes.ADD_TASK:
      const newTask: ITask = action.task;
      return {
        ...state,
        tasks: state.tasks.concat(newTask),
      };
    case actionTypes.UPDATE_TASK:
      const taskID = action.task.id;
      let tasks = [...state.tasks];
      for (let task of tasks) {
        if (task.id === taskID) {
          task.taskName = action.task.taskName;
        }
      }
      return {
        ...state,
        tasks: tasks,
      };
    case actionTypes.REMOVE_TASK:
      const updatedTasks: ITask[] = state.tasks.filter(
        (task) => task.id !== action.task.id
      );
      return {
        ...state,
        tasks: updatedTasks,
      };
    case actionTypes.CRASHOUT_TASK:
      const tasksArr: ITask[] = state.tasks.map((val: ITask) => {
        action.task.isCrashOut = val.id === action.task.id;
        return { ...val };
      });
      return {
        ...state,
        tasks: tasksArr,
      };
    case actionTypes.COMPLETE_SELECTED_TASK:
      let selectedCompletedTasks: ITask[] = state.tasks.map((val: ITask) => {
        return { ...val };
      });

      for (let selectedtask of action.taskArr) {
        selectedCompletedTasks = selectedCompletedTasks.filter(
          (task) => task.id !== selectedtask.id
        );
      }

      return {
        ...state,
        tasks: selectedCompletedTasks,
      };
    case actionTypes.DELETE_SELECTED_TASK:
      let selectedDeletedTasks: ITask[] = state.tasks.map((val: ITask) => {
        return { ...val };
      });

      for (let selectedtask of action.taskArr) {
        selectedDeletedTasks = selectedDeletedTasks.filter(
          (task) => task.id !== selectedtask.id
        );
      }
      return {
        ...state,
        tasks: selectedDeletedTasks,
      };
  }
  return state;
};

export default reducer;

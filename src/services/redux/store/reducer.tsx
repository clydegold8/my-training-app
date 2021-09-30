import * as actionTypes from "./actionTypes";
import { ITask, TaskAction, TaskState } from "../types/type.d";

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      taskName: "Water the plants",
      isCrashOut: false,
    },
    {
      id: 2,
      taskName: "Cook for Lunch",
      isCrashOut: false,
    },
    {
      id: 3,
      taskName: "Cook for Dinner",
      isCrashOut: false,
    },
    {
      id: 4,
      taskName: "Cook for Breakfast",
      isCrashOut: false,
    },
    {
      id: 5,
      taskName: "Play many games",
      isCrashOut: false,
    },
  ],
};

const reducer = (
  state: TaskState = initialState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      const newTask: ITask = {
        id: Math.random(), // not really unique
        taskName: action.task.taskName,
      };
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
      const tasksArr: ITask[] = [];
      state.tasks.forEach((val) => tasksArr.push(Object.assign({}, val)));

      for (let task of tasksArr) {
        if (task.id === action.task.id) {
          task.isCrashOut = true;
        }
      }
      return {
        ...state,
        tasks: tasksArr,
      };
    case actionTypes.COMPLETE_SELECTED_TASK:
      let selectedCompletedTasks: ITask[] = [];
      state.tasks.forEach((val) =>
        selectedCompletedTasks.push(Object.assign({}, val))
      );

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
      let selectedDeletedTasks: ITask[] = [];
      state.tasks.forEach((val) =>
        selectedDeletedTasks.push(Object.assign({}, val))
      );

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

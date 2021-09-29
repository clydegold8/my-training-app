import * as actionTypes from "./actionTypes";
import { ITask, TaskAction, TaskState } from "../types/type.d";

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      taskName: "Water the plants",
    },
    {
      id: 2,
      taskName: "Cook for Lunch",
    },
    {
      id: 3,
      taskName: "Cook for Dinner",
    },
    {
      id: 4,
      taskName: "Cook for Breakfast",
    },
    {
      id: 5,
      taskName: "Play many games",
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
  }
  return state;
};

export default reducer;

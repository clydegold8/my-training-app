import http from "../http-common";
import { ITask } from "../services/redux/types/type.d";

const getAllTasks = () => {
  return http.get("/tasks");
};

const getTask = (id: number) => {
  return http.get(`/task/${id}`);
};

const addTask = (data: ITask) => {
  const dataJson = JSON.stringify({
    taskName: data.taskName,
    isCrashOut: data.isCrashOut,
  });

  return http.post("/task", dataJson);
};

const updateTask = (id: number, data: ITask) => {
  return http.put(`/task/${id}`, data);
};

const removeTask = (id: number) => {
  return http.delete(`/task/${id}`);
};

const completeAll = (data: ITask[]) => {
  return http.put(`/tasks`, data);
};

const deleteAll = (data: ITask[]) => {
  return http.put(`/tasks`, data);
};

const TasksService = {
  getAllTasks,
  getTask,
  addTask,
  updateTask,
  removeTask,
  completeAll,
  deleteAll,
};

export default TasksService;

export type ITask = {
  id: number;
  taskName: string;
};

export type TaskState = {
  tasks: ITask[];
};

export type TaskAction = {
  type: string;
  task: ITask;
};

export type DispatchType = (args: TaskAction) => TaskAction;

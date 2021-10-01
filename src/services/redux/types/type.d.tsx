export type ITask = {
  id: number;
  taskName: string;
  isCrashOut?: boolean;
};

export type TaskState = {
  tasks: ITask[];
};

export type TaskAction = {
  type: string;
  task: ITask;
  taskArr: ITask[];
};

export type DispatchType = (args: TaskAction) => TaskAction;

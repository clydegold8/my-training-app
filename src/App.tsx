import React, { useEffect } from "react";
import LogInPage from "./components/pages/logInPage/";
import TasksPage from "./components/pages/tasksPage";
import SelectToDoComponent from "./components/pages/selectToDoPage";
import UpdateToDoListPageComponent from "./components/pages/updateToDoPage";
import AddToDoListPageComponent from "./components/pages/addToDoPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TasksService from "./services/tasks.services";
import { Dispatch } from "redux";
import { ITask } from "./services/redux/types/type.d";
import { initializeTask } from "./services/redux/store/actionCreators";
import { useDispatch } from "react-redux";

const LoginPage = () => <LogInPage />;
const TaskPage = () => <TasksPage />;
const SelecTodoPage = () => <SelectToDoComponent />;
const UpdateTodoPage = () => <UpdateToDoListPageComponent />;
const AddTodoPage = () => <AddToDoListPageComponent />;

const App = () => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    TasksService.getAllTasks()
      .then((response) => {
        initializeTasks(response.data["tasks"]);
      })
      .catch((e) => {});
  };

  const initializeTasks = React.useCallback(
    (taskArr: ITask[]) => dispatch(initializeTask(taskArr)),
    [dispatch]
  );

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/tasks" component={TaskPage} />
          <Route path="/selecttodo" component={SelecTodoPage} />
          <Route path="/updatetodo/:id" component={UpdateTodoPage} />
          <Route path="/addtodo" component={AddTodoPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

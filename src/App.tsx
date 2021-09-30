import React from "react";
import LogInPage from "./components/pages/logInPage/";
import TasksPage from "./components/pages/tasksPage";
import SelectToDoComponent from "./components/pages/selectToDoPage";
import UpdateToDoListPageComponent from "./components/pages/updateToDoPage";
import AddToDoListPageComponent from "./components/pages/addToDoPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const LoginPage = () => <LogInPage />;
const TaskPage = () => <TasksPage />;
const SelecTodoPage = () => <SelectToDoComponent />;
const UpdateTodoPage = () => <UpdateToDoListPageComponent />;
const AddTodoPage = () => <AddToDoListPageComponent />;

function App() {
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
}

export default App;

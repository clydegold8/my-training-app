import React from "react";
import LogInPage from "./components/pages/logInPage/";
import TasksPage from "./components/pages/tasksPage";
import SelectToDoComponent from "./components/pages/selectToDoPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/tasks" component={TaskPage} />
          <Route path="/selecttodo" component={SelecTodoPage} />
        </Switch>
      </Router>
    </div>
  );
}

const LoginPage = () => <LogInPage />;
const TaskPage = () => <TasksPage />;
const SelecTodoPage = () => <SelectToDoComponent />;

export default App;

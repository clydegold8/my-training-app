import React from "react";
import LogInPage from "./components/pages/logInPage/";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/tasks" component={SeconPage} />
        </Switch>
      </Router>
    </div>
  );
}

const LoginPage = () => (
  <>
    <LogInPage />
  </>
);

// this is a sample directed page for now
const SeconPage = () => (
  <>
    <h1>Hello World!</h1>
  </>
);

export default App;

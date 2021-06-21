import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";
import Secured from "./Secured";
import Protected from "./Protected";
import { UserContext } from "./UserContext";
import "./styles.css";
const Home = () => {
  return (
    <div className="g-signin">
      <Login />
    </div>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Protected path="/secured" component={Secured} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;

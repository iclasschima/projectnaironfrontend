import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import "./App.css";
import Login from "./components/login";

class App extends Component {
  // state = {  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/signup"} component={SignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import {
  // BrowserRouter,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import Dashboard from "./components/Dashboard"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { history } from "./_helpers";
import { alertActions } from "./_actions";
import { PrivateRoute } from "./_components";
import { HomePage } from "./components/Homepage";
import { connect } from "react-redux";
import sign from "./components/SignUp2";
import log from "./components/login2";

class App extends Component {
  // state = {  }
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <BrowserRouter>
          <div>
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}

              <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={log} />
                <Route path="/signup" component={sign} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/manage_ads" component={Dashboard} />
                <Route component={Dashboard} />
              </Switch>
            {/* </Router> */}
          </div>
      </BrowserRouter>
    );
  }
}
function mapState(state) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear,
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
// export default App;

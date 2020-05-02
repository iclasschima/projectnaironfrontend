import React, { Component } from "react";
import {
  // BrowserRouter,
  Switch,
  Route,
  Redirect,
  Router,
} from "react-router-dom";
import SignUp from "./components/Signup";
// import "./App.css";
import SignIn from "./components/login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { history } from "./_helpers";
import { alertActions } from "./_actions";
import { PrivateRoute } from "./_components";
import { HomePage } from "./components/Homepage";
import { connect } from "react-redux";

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
      // <div
      //   className="container"
      //   style={{
      //     justifyContent: "center",
      //     backgroundColor: "black",
      //     // position: "absolute",
      //     // width: "100%",
      //     // left: 0,
      //     // right: 0,
      //   }}
      // >
      //   {alert.message && (
      //     <div className={`alert ${alert.type}`}>{alert.message}</div>
      //   )}
      //   <Router history={history}>
      //     <Switch>
      //       <PrivateRoute exact path="/" component={HomePage} />
      //       <Route path="/login" component={SignIn} />
      //       <Route path="/signup" component={SignUp} />
      //       <Redirect from="*" to="/" />
      //     </Switch>
      //   </Router>
      // </div>

      <div style={{}}>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </div>
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

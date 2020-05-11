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
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AdvertNavBar from "./components/AdvertNavBar";
import AdvertBody from "./components/AdvertBody";
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
  
      <div style={{}}>
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <Switch>

           
            <Route exact path={"/signup"} component={SignUp} />
            <Route exact path={"/advertnav"} component={AdvertNavBar} />
            <Route exact path={"/advert"} component={AdvertBody} />


            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={log} />
            <Route path="/signup" component={sign} />
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

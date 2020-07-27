import React, { Component } from "react";
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect
} from "react-router-dom";
import "./Styles/global.scss"
import Loadable from "react-loadable"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { history } from "./_helpers";
import { alertActions } from "./_actions";
import { PrivateRoute } from "./_components";
// import { HomePage } from "./components/Homepage";
import { connect } from "react-redux";
// import securedRoutes from "./secureRoutes"
import { useSelector, useDispatch } from "react-redux"

import Loader from "./_helpers/loader"

const Login = Loadable({
  loader: () => import("./components/Login"),
  loading: Loader,
  delay: 100,
});

const Signup = Loadable({
  loader: () => import("./components/Signup"),
  loading: Loader,
  delay: 100,
});

const CreateAccount = Loadable({
  loader: () => import("./components/CreateAccount"),
  loading: Loader,
  delay: 100,
});

const LoginWithEmail = Loadable({
  loader: () => import("./components/LoginWithEmail"),
  loading: Loader,
  delay: 100,
});

const ResetPassword = Loadable({
  loader: () => import("./components/ResetPassword"),
  loading: Loader,
  delay: 100,
});

const RequestResetPassword = Loadable({
  loader: () => import("./components/RequestPasswordReset"),
  loading: Loader,
  delay: 100,
});

const Dashboard = Loadable({
  loader: () => import("./components/Dashboard"),
  loading: Loader,
  delay: 100,
})

const HomePage = Loadable({
  loader: () => import("./components/HomePage"),
  loading: Loader,
  delay: 100,
})

function ProtectedRoute({ children, ...rest }) {
  const isLoggedIn = true

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? children : <Redirect to="/" />
      }
    />
  );
}

class App extends Component {
  // state = {  }
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <BrowserRouter>
        <div className="app">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}

          <Switch>
            {/* <PrivateRoute exact path="/" component={HomePage} /> */}
            <Route path="/" exact component={Login} />
            <Route path="/login" exact component={Login} />
            <Route path="/create-account" exact component={CreateAccount} />
            <Route path="/login-with-email" exact component={LoginWithEmail} />
            <Route path="/reset-password" exact component={ResetPassword} />
            <Route path="/request-reset-password" exact component={RequestResetPassword} />
            <Route path="/signup" component={Signup} />
            <ProtectedRoute path="/dashboard">
              <Dashboard />
            </ProtectedRoute>
            {/* <Route path="/manage_ads" component={Dashboard} />
                <Route component={Dashboard} /> */}
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
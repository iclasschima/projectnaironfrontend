import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./Styles/global.scss";
import Loadable from "react-loadable";
import { history } from "./_helpers";
import { alertActions } from "./_actions";
import { PrivateRoute } from "./_components";
import { useSelector, useDispatch } from "react-redux";

import Loader from "./_helpers/loader";

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
});

const HomePage = Loadable({
  loader: () => import("./components/HomePage"),
  loading: Loader,
  delay: 100,
});

function ProtectedRoute({ children, ...rest }) {
  const isLoggedIn = true;

  return (
    <Route
      {...rest}
      render={({ location }) => (isLoggedIn ? children : <Redirect to="/" />)}
    />
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          {/* <PrivateRoute exact path="/" component={HomePage} /> */}
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={Login} />
          <Route path="/create-account" exact component={CreateAccount} />
          <Route path="/login-with-email" exact component={LoginWithEmail} />
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route path="/signup" component={Signup} />
          <Route
            path="/request-reset-password"
            exact
            component={RequestResetPassword}
          />
          <ProtectedRoute path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

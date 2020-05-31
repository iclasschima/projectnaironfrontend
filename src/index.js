import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
// import Login from "./login";
import "bootstrap/dist/css/bootstrap.css";
import 'semantic-ui-css/semantic.min.css'


import { Provider } from "react-redux";
import { store } from "./_helpers";

ReactDOM.render(
  <Provider store={store}>
    {" "}
    <App />,
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

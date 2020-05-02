import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../_reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware))
);

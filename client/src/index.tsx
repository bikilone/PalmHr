import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/main.scss";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { fetcImgs } from "./store/reducer";
import thunkMiddleware from "redux-thunk";
// const rootReducer = combineReducers()
const store = createStore(fetcImgs, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

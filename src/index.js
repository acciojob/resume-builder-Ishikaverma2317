import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import App from "./App";

const profile = (state = {}, action) => {
  if (action.type === "SET_PROFILE") return action.payload;
  return state;
};

const education = (state = [], action) => {
  if (action.type === "ADD_EDUCATION") return [...state, action.payload];
  return state;
};

const skills = (state = [], action) => {
  if (action.type === "ADD_SKILL") return [...state, action.payload];
  return state;
};

const projects = (state = [], action) => {
  if (action.type === "ADD_PROJECT") return [...state, action.payload];
  return state;
};

const social = (state = [], action) => {
  if (action.type === "ADD_SOCIAL") return [...state, action.payload];
  return state;
};

const store = createStore(
  combineReducers({ profile, education, skills, projects, social })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

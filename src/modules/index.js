import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import todos from "./todos/reducers";

const reducers = {
  routing: routerReducer,
  todos
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);

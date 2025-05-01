import { combineReducers } from "redux";
import { projectReducer } from "./projectReducer";

export const reducer = combineReducers({
  projectReducer: projectReducer,
});

import { combineReducers } from "redux";
import app from "./app";
import filterButtons from "./filterButtons";

export default combineReducers({ app, filterButtons });

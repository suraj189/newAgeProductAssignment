import { applyMiddleware, createStore } from "redux";
import logger  from 'redux-logger'
import addTaskReducer from "./Task/AddTaskReducer";
const store=createStore(addTaskReducer,applyMiddleware(logger))

export default store
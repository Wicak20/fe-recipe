import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import rootReducers from './reducer/index'
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore(rootReducers, applyMiddleware(thunk, logger))

export default store
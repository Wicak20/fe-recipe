import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login";


const rootReducers = combineReducers({
    login: loginReducer
})

export default rootReducers
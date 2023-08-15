import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./login";
import detailMenuReducer from "./menu";


const rootReducers = combineReducers({
    login: loginReducer,
    detailMenu: detailMenuReducer
})

export default rootReducers
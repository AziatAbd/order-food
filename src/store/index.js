import { combineReducers, createStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";


const rootReduser = combineReducers({
   [loginSlice.name]:loginSlice.reducer 
})
export const store = createStore(rootReduser)
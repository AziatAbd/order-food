import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    email: "",
    isAuthorized: false,
  };
  

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
      login(state, action) {
        state.email = action.payload;
        state.isAuthorized = true;
      },
      
    },
  });
  
  export const loginAction = loginSlice.actions;
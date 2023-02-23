import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";
import { mealsSlice } from "./meals/mealsSlice";

export const store = configureStore({
  reducer: {
    [loginSlice.name]: loginSlice.reducer,
    [mealsSlice.name]: mealsSlice.reducer,
  },
});

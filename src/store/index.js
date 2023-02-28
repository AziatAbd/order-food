import { configureStore } from '@reduxjs/toolkit'
import { loginSlice } from './loginSlice'
import mealsSlice from './meals/mealsSlice'

const store = configureStore({
  reducer: {
    [loginSlice.name]: loginSlice.reducer,
    [mealsSlice.name]: mealsSlice.reducer,
  },
})

export default store

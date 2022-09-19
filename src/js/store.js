import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './features/moviesSlice'
import userReducer from './features/userSlice'
export const store = configureStore({
  reducer: {
    movieReducer,userReducer  },
})
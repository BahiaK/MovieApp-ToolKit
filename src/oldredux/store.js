import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './features/moviesSlice'
export const store = configureStore({
  reducer: {
    movieReducer
  },
})
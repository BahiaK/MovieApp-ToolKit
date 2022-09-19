import { createSlice } from '@reduxjs/toolkit'
import data from '../../data'
const initialState = {
    movies: data,
  }
  export const moviesSlice=createSlice ({
    name :'movies',
    initialState,
    reducers: {
        addMovie:(state,{payload}) => {
            state.movies.push(payload)
    },
    deleteMovie :(state,{payload}) => {
        state.movies=state.movies.filter((el)=>el._id != payload)
    }
}
    


  })
  console.log(moviesSlice)

  export const { addMovie ,deleteMovie } = moviesSlice.actions

export default moviesSlice.reducer
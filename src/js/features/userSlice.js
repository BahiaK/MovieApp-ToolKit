import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
  }
  export const userSlice=createSlice ({
    name :'users',
    initialState,
    reducers: {
       
    
}
  })
  //console.log(moviesSlice)
  export const {  } = userSlice.actions
export default userSlice.reducer
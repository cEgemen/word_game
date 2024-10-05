import  {createSlice}  from "@reduxjs/toolkit"

const initialState = {userId : null,name : null}

const userSlice = createSlice({
      name : "user",
      initialState ,
      reducers : {
           updateUserData(state,action){
                  state.userId = action.payload.userId
                  state.name = action.payload.name
           },
           clearUserData(state){
                  state.userId = null
                  state.name = null
           }
      }
})

export const userActions = userSlice.actions
export const userReducers = userSlice.reducer
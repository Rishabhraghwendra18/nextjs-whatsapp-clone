import { createSlice } from "@reduxjs/toolkit";

export const socketSlice = createSlice({
    name:"socket",
    initialState:{
        socket:null,
    },
    reducers:{
        addSocket:(state,action)=>{
            state.socket=action.payload;
        }
    }
});

export const {addSocket}=socketSlice.actions;
export default socketSlice.reducer;
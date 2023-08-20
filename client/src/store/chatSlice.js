import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name:"chatSlice",
    initialState:{
        selectedChatUser:{}
    },
    reducers:{
        setSelectedChatUser:(state,action)=>{
            state.selectedChatUser=action.payload;
        }
    }
});

export const {setSelectedChatUser} = chatSlice.actions;
export default chatSlice.reducer;
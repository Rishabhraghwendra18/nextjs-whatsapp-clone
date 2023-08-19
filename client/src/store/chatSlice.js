import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name:"chatSlice",
    initialState:{
        selectedChatEmail:"",
        userName:""
    },
    reducers:{
        setSelectedChatUser:(state,action)=>{
            state.selectedChatEmail=action.payload?.email;
            state.userName=action.payload?.name;
        }
    }
});

export const {setSelectedChatUser} = chatSlice.actions;
export default chatSlice.reducer;
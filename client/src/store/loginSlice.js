import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginUser",
  initialState: {
    emailId: "",
  },
  reducers: {
    setLoggedInUser: (state, action) => {
        console.log("logged in user: ",action);
      state.emailId = action.payload;
    },
  },
});

export const {setLoggedInUser} = loginSlice.actions;
export default loginSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import chatSlice from "./chatSlice";

export default configureStore({
    reducer: {
        loggedInUser:loginReducer,
        selectedChatUser:chatSlice,
    },
  })
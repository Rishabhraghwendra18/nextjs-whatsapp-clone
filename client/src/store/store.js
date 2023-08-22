import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import chatSlice from "./chatSlice";
import socketSlice from './socketSlice';

export default configureStore({
    reducer: {
        loggedInUser:loginReducer,
        selectedChatUser:chatSlice,
        socket:socketSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        // Need to make it false because redux is not allowing to store class instance of socket
      serializableCheck: false,
    }),
  })
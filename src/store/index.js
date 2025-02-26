import { configureStore } from "@reduxjs/toolkit";
import userReducer, { userActions } from "./userSlice"; 
import uiReducer, { uiActions } from "./uiSlice"; 

const store = configureStore({
  reducer: {
    user: userReducer, 
    ui: uiReducer,
  },
});

export default store;
export { userActions, uiActions };

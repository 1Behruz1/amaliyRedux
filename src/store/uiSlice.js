import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: { message: "", type: "", open: false },
  },
  reducers: {
    showNotifications(state, action) {
      state.notification = action.payload;
    },
    hideNotifications(state) {
      state.notification = { message: "", type: "", open: false };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

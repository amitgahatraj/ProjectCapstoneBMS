// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import loanReducer from "./reducers/loanReducer";
// Import other reducers as needed

const store = configureStore({
  reducer: {
    auth: authReducer,
    loans: loanReducer,
    // Add other reducers here
  },
});

export default store;

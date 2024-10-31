// src/redux/reducers/loanReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loans: [],
  pendingLoans: [],
  statusState: {
    status: null,
    loading: false,
    error: null,
  },
  loading: false,
  error: null,
};

const loanSlice = createSlice({
  name: "loans",
  initialState,
  reducers: {
    fetchLoansStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchLoansSuccess(state, action) {
      state.loading = false;
      state.loans = action.payload;
      // Optionally differentiate between loans and pendingLoans based on API response
    },
    fetchLoansFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // Add more reducers for status and pending loans if needed
  },
});

export const { fetchLoansStart, fetchLoansSuccess, fetchLoansFailure } =
  loanSlice.actions;
export default loanSlice.reducer;

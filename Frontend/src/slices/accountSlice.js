import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccounts(state, action) {
      state.accounts = action.payload;
    },
    addAccount(state, action) {
      state.accounts.push(action.payload);
    },
  },
});

export const { setAccounts, addAccount } = accountSlice.actions;
export default accountSlice.reducer;

simport { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import accountSlice from "../features/accountSlice";
import transactionSlice from "../features/transactionSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    account: accountSlice,
    transaction: transactionSlice,
  },
});

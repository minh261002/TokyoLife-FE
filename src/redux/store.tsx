import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./slice/toastSlice";
import authReducer from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    toast: toastReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

import { Auth } from "@/types/Auth";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: Auth | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLogin: (state, action: PayloadAction<Auth | null>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    setAuthLogout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setAuthLogin, setAuthLogout } = authSlice.actions;

export default authSlice.reducer;

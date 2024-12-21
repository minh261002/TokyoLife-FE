import { Admin } from "@/types/Admin";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  admin: Admin | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  admin: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLogin: (state, action: PayloadAction<Admin | null>) => {
      state.isAuthenticated = true;
      state.admin = action.payload;
    },

    setUnReadNotifications: (state, action: PayloadAction<number>) => {
      if (state.admin) {
        state.admin.unreadNotifications = action.payload;
      }
    },

    setAuthLogout: (state) => {
      state.isAuthenticated = false;
      state.admin = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { setAuthLogin, setAuthLogout, setUnReadNotifications } =
  authSlice.actions;

export default authSlice.reducer;

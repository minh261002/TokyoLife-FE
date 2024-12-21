import type { Auth, Login, Register } from "@/types/Auth";
import axiosInstance from "../configs/axios";
import { handleAxiosError } from "@/helpers/axiosHelper";

type ForgotPasswordPayload = {
  email: string;
  time: string;
  device: string;
};

type UpdatePasswordPayload = {
  email: string;
  password: string;
  password_confirmation: string;
  token: string;
};

const login = async (payload: Login): Promise<Auth | null> => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email: payload.email,
      password: payload.password,
    });

    if (response.data.status === 401) {
      return null;
    }

    const user = response.data;
    const accessToken = response.data.access_token;
    localStorage.setItem("accessToken", accessToken);
    return user;
  } catch (error) {
    handleAxiosError(error);
    return null;
  }
};

const register = async (payload: Register): Promise<Auth | null> => {
  try {
   const response =  await axiosInstance.post("/auth/register", {
      email: payload.email,
      password: payload.password,
      password_confirmation: payload.password_confirmation,
      name: payload.name,
    });

    if (response.data.status === 401) {
      return null;
    }

    const user = response.data.user;
    const accessToken = response.data.access_token;
    localStorage.setItem("accessToken", accessToken);
    return user;
  } catch (error) {
    handleAxiosError(error);
    return null;
  }
};

const fetchUserData = async (): Promise<Auth | null> => {
  try {
    const response = await axiosInstance.get("/auth/me");
    return response.data.user;
  } catch (error) {
    handleAxiosError(error);
    return null;
  }
};

const logout = async (): Promise<void> => {
  try {
    await axiosInstance.post("/auth/logout");
  } catch (error) {
    handleAxiosError(error);
  }
};

const sendEmailLink = async (payload: ForgotPasswordPayload): Promise<void> => {
  try {
    await axiosInstance.post("/auth/forgot-password", {
      email: payload.email,
      time: payload.time,
      device: payload.device,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

const updatePassword = async (
  payload: UpdatePasswordPayload
): Promise<void> => {
  try {
    await axiosInstance.post("/auth/reset-password", {
      email: payload.email,
      password: payload.password,
      password_confirmation: payload.password_confirmation,
      token: payload.token,
    });
  } catch (error) {
    handleAxiosError(error);
  }
};

export { login, register, logout, sendEmailLink, updatePassword, fetchUserData };

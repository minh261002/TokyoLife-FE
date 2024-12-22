import { Category, HomeCategory } from "@/types/Category";
import axiosInstance from "../configs/axios";
import { handleAxiosError } from "@/helpers/axiosHelper";

const getCategoryInMenu = async (
): Promise<Category | null> => {
  try {
    const response = await axiosInstance.get(`/category/menu`);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    return null;
  }
};

const getCategoryInHome = async (
): Promise<HomeCategory | null> => {
  try {
    const response = await axiosInstance.get(`/category/home`);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    return null;
  }
};


export { getCategoryInMenu, getCategoryInHome };

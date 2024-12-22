import { Discount } from "@/types/Discount";
import axiosInstance from "../configs/axios";
import { handleAxiosError } from "@/helpers/axiosHelper";

const getHomeDiscount = async (
): Promise<Discount | null> => {
  try {
    const response = await axiosInstance.get(`/discount/home`);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    return null;
  }
};

export { getHomeDiscount};

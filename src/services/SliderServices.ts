import { Slider } from "@/types/Slider";
import axiosInstance from "../configs/axios";
import { handleAxiosError } from "@/helpers/axiosHelper";


const getSliders = async (
  key:string
): Promise<Slider | null> => {
  try {
    const response = await axiosInstance.get(`/sliders/${key}`);
    return response.data.data;
  } catch (error) {
    handleAxiosError(error);
    return null;
  }
};

export { getSliders};

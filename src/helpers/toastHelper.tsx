import { toast } from "react-hot-toast";

export type ToastType = "success" | "error" | null;

export const showToast = (message: string, type: ToastType) => {
  if (message) {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        break;
    }
  }
};

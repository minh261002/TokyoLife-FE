import axios from "axios";

const handleAxiosError = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    // Ghi log thông điệp lỗi từ server (nếu có)
    if (error.response) {
      const statusCode = error.response.status;
      const errorData = error.response.data;

      console.log(`Error Status: ${statusCode}`);

      if (errorData && errorData.error) {
        console.log(`Error Message: ${errorData.error}`);
      } else {
        console.log("Unexpected error response from server.");
      }
    } else if (error.request) {
      // Không nhận được phản hồi từ server
      console.log("No response received from server.");
    } else {
      // Có lỗi xảy ra trong quá trình thiết lập request
      console.log(`Error Message: ${error.message}`);
    }
  } else {
    // Lỗi không phải từ Axios
    console.log("Lỗi không xác định:", error);
  }
};

export { handleAxiosError };

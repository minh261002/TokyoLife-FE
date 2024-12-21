import axios from "axios";

const handleAxiosError = (error: unknown): void => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const { status, data } = error.response;
      console.log(`Error Status: ${status}`);
      console.log(`Error Data: ${JSON.stringify(data)}`);

      if (data?.error) {
        console.log(`Error Message: ${data.error}`);
      } else {
        console.log("Unexpected error response from server.");
      }
    } else if (error.request) {
      console.log("No response received from server.");
    } else {
      console.log(`Error Message: ${error.message}`);
    }
  } else {
    console.log("Unknown error:", error);
  }
};

axios.get("/api/non-existent-endpoint").catch(handleAxiosError);

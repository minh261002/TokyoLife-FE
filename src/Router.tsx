import { createBrowserRouter as Router } from "react-router-dom";
import Layout from "@/components/Layout";

const router = Router([
  {
    path: "/",
    element: <Layout />,
  },
]);

export default router;

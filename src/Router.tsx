import { createBrowserRouter as Router } from "react-router-dom";
import Layout from "@/components/Layout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

const router = Router([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dang-nhap",
        element: <Login />,
      },
      {
        path: "/dang-ky",
        element: <Register />,
      },
    ],
  },
]);

export default router;

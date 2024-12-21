import { createBrowserRouter as Router } from "react-router-dom";
import Layout from "@/components/Layout";
// import Login from "@/pages/auth/Login";
// import Register from "@/pages/auth/Register";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import NoAuthMiddleware from "./middlewares/NoAuthMiddleware";

//lazy load
import { lazy } from "react";
const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));
const router = Router([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dang-nhap",
        element: (
          <NoAuthMiddleware>
            <Login />
          </NoAuthMiddleware>
        ),
      },
      {
        path: "/dang-ky",
        element: (
          <NoAuthMiddleware>
            <Register />
          </NoAuthMiddleware>
        ),
      },
    ],
  },
]);

export default router;

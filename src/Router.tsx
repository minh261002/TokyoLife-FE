import React, { lazy } from "react";
import { createBrowserRouter as Router } from "react-router-dom";
import Layout from "@/components/Layout";
import NoAuthMiddleware from "./middlewares/NoAuthMiddleware";
import Loading from "@/components/ui/loading";

const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));
const Home = lazy(() => import("@/pages/Home"));

const router = Router([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<Loading />}>
        <Layout />
      </React.Suspense>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
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

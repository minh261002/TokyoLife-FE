import { PropsWithChildren } from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchUserData } from "@/services/AuthServices";

type ProtectedRouteProps = PropsWithChildren;

const NoAuthMiddleware = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    const checkAuth = async () => {
      const user = await fetchUserData();
      if (user !== null) {
        navigate("/");
      }
    };

    if (!isAuthenticated || user === null) {
      checkAuth();
    } else {
      navigate("/");
    }
  }, [isAuthenticated, user, navigate]);

  return children;
};

export default NoAuthMiddleware;

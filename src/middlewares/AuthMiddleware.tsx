import { PropsWithChildren } from "react";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAuthLogin } from "@/redux/slice/authSlice";
import { fetchUserData } from "@/services/AuthServices";

type ProtectedRouteProps = PropsWithChildren;

const AuthMiddleware = ({ children }: ProtectedRouteProps) => {
  const dispatch = useDispatch();

  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (!isAuthenticated || user === null) {
      const fetchAdminData = async () => {
        const admin = await fetchUserData();
        if (admin) {
          dispatch(setAuthLogin(admin));
        }
      };

      fetchAdminData();
    }
  }, [isAuthenticated, user, dispatch]);

  return isAuthenticated && user ? children : null;
};

export default AuthMiddleware;

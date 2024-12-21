import HeaderTop from "@/components/header/HeaderTop";
import HeaderBottom from "@/components/header/HeaderBottom";
import HeaderMain from "@/components/header/HeaderMain";

import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { showToast } from "@/helpers/toastHelper";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearToast } from "@/redux/slice/toastSlice";

const Layout = () => {
  const { message, type } = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    showToast(message, type);
    dispatch(clearToast());
  }, [message, type]);

  return (
    <>
      <div className="">
        <HeaderTop />
        <HeaderMain />
        <HeaderBottom />
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

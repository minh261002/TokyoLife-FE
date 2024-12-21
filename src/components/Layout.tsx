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
import Footer from "@/components/footer/Footer";

const Layout = () => {
  const { message, type } = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    showToast(message, type);
    dispatch(clearToast());
  }, [message, type]);

  return (
    <div>
      <div className="">
        <HeaderTop />
        <HeaderMain />
        <HeaderBottom />
      </div>

      <div className="w-full max-w-[1280px] mx-auto">
        <Outlet />
      </div>

      <div className="w-full max-w-[1280px] mx-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

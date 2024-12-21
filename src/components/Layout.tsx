import HeaderTop from "@/components/header/HeaderTop";
import HeaderBottom from "@/components/header/HeaderBottom";
import HeaderMain from "@/components/header/HeaderMain";

const Layout = () => {
  return (
    <>
      <div className="">
        <HeaderTop />
        <HeaderMain />
        <HeaderBottom />
      </div>
    </>
  );
};

export default Layout;

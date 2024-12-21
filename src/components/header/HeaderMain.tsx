import { PackageSearchIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ShoppingCart from "@/components/header/ShoppingCart";
import UserInfo from "@/components/header/UserInfo";

const HeaderMain = () => {
  return (
    <div className="flex items-center justify-center bg-[#f8f1e4] py-4">
      <div className="w-full max-w-[1280px]">
        <div className="grid grid-cols-12 grid-rows-1 gap-4 items-center">
          <div className="col-span-3">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="col-span-6 col-start-4 relative">
            <Input
              placeholder="Tìm kiếm sản phẩm"
              className="border-[#c92127] focus:border-none h-[40px] bg-white focus:ring-0 rounded-[4px]"
            />
            <Button className="absolute right-0 top-0 h-full bg-[#c92127]">
              <SearchIcon size={30} />
            </Button>
          </div>
          <div className="col-span-3 col-start-10">
            <div className="w-full flex items-center justify-end gap-6">
              <Link to={"/"}>
                <PackageSearchIcon size={30} />
              </Link>
              <ShoppingCart />
              <UserInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;

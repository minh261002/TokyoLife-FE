import { MenuIcon, PackageSearchIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ShoppingCart from "@/components/header/ShoppingCart";
import UserInfo from "@/components/header/UserInfo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderMain = () => {
  return (
    <div className="flex items-center justify-center bg-[#f8f1e4] py-4">
      <div className="w-full max-w-[1280px] px-5">
        <div className="grid grid-cols-12 grid-rows-1 gap-4 items-center">
          <Link to={"/"} className="col-span-5 md:col-span-3">
            <img src="/logo.svg" alt="logo" />
          </Link>

          <div className="hidden md:block col-span-6 col-start-4 relative">
            <Input
              placeholder="Tìm kiếm sản phẩm"
              className="border-[#c92127] focus:border-none h-[40px] bg-white focus:ring-0 rounded-[4px]"
            />
            <Button className="absolute right-0 top-0 h-full bg-[#c92127]">
              <SearchIcon size={30} />
            </Button>
          </div>

          <div className="hidden md:block col-span-3 col-start-10">
            <div className="w-full flex items-center justify-end gap-6">
              <Link to={"/"}>
                <PackageSearchIcon size={30} />
              </Link>
              <ShoppingCart />
              <UserInfo />
            </div>
          </div>

          <div className="block md:hidden md:col-span-7 col-start-12">
            <Sheet>
              <SheetTrigger>
                <MenuIcon size={35} />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="relative mt-8">
                      <Input
                        placeholder="Tìm kiếm sản phẩm"
                        className="border-[#c92127] focus:border-none h-[40px] bg-white focus:ring-0 rounded-[4px]"
                      />
                      <Button className="absolute right-0 top-0 h-full bg-[#c92127]">
                        <SearchIcon size={30} />
                      </Button>
                    </div>
                  </SheetTitle>
                  <SheetDescription>//Menu</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;

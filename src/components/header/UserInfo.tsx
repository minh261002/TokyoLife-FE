import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HeartIcon,
  LogInIcon,
  LogOutIcon,
  ShoppingBagIcon,
  SquareArrowUpIcon,
  UserCircleIcon,
} from "lucide-react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {isAuthenticated ? (
          <>
            <Avatar>
              <AvatarImage src={user?.image} />
              <AvatarFallback>{user?.name}</AvatarFallback>
            </Avatar>
            <DropdownMenuContent>
              <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserCircleIcon size={20} />
                Thông tin cá nhân
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ShoppingBagIcon size={20} />
                Đơn hàng
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HeartIcon size={20} />
                Sản phẩm yêu thích
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon size={20} />
                Đăng xuất
              </DropdownMenuItem>
            </DropdownMenuContent>
          </>
        ) : (
          <>
            <Avatar>
              <AvatarFallback>
                <UserCircleIcon size={30} />
              </AvatarFallback>
            </Avatar>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <LogInIcon size={20} />
                Đăng nhập
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SquareArrowUpIcon size={20} />
                Đăng ký
              </DropdownMenuItem>
            </DropdownMenuContent>
          </>
        )}
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default UserInfo;

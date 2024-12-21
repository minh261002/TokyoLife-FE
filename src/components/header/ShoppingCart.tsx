import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBagIcon } from "lucide-react";
const ShoppingCart = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBagIcon size={30} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="border-b py-2 text-xl">Giỏ hàng.</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;

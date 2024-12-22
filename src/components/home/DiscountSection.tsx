import type { Discount } from "@/types/Discount";
import { getHomeDiscount } from "@/services/DiscountService";
import { useEffect, useState } from "react";

const DiscountSection = () => {
  const [discounts, setDiscounts] = useState<Discount[] | null>(null);
  const [copyCode, setCopyCode] = useState<string | null>(null);

  const fetchDiscounts = async () => {
    const data = await getHomeDiscount();
    if (Array.isArray(data)) {
      setDiscounts(data);
    }
  };

  useEffect(() => {
    fetchDiscounts();
  }, []);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopyCode(code);
    setTimeout(() => {
      setCopyCode(null);
    }, 2000);
  };

  return (
    <>
      <div className="flex items-center justify-between border-b-[1px] border-red-200 pb-[10px] lg:pb-[15px] mb-[10px] lg:mb-[15px]">
        <h1 className="text-[1.5rem] lg:text-[1.8rem] font-bold text-red-700">
          Mã giảm giá hot
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {discounts && discounts.length > 0 ? (
          discounts.map((discount) => (
            <div
              key={discount.code}
              className="bg-red-50 w-full justify-between rounded-xl flex"
            >
              <div className="flex flex-col p-[15px] lg:p-[20px] gap-[18px]">
                <h1 className="text-[1rem] lg:text-[1.3rem] font-bold text-red-800">
                  {discount.code}
                </h1>
                <div className="flex items-center gap-[10px]">
                  <div>
                    <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-gray-500">
                      {discount.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div>
                    <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-gray-500">
                      Hết hạn: {discount.date_end}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center relative w-[45%] lg:w-[40%] items-center border-l-[2px] p-[15px] lg:p-[20px] border-dashed border-gray-200">
                <div className="w-[45px] h-[45px] rounded-full bg-white absolute top-[-15%] lg:top-[-13%] sm:left-[-13.5%] left-[-19%] lg:left-[-11.5%]"></div>
                <button
                  className="px-2 lg:px-4 py-1 text-[0.8rem] lg:text-[1.1rem] lg:py-2 bg-red-700 text-white rounded-md hover:bg-red-600"
                  onClick={() => handleCopyCode(discount.code)}
                >
                  {copyCode === discount.code ? "Copied" : "Copy"}
                </button>
                <div className="w-[45px] h-[45px] rounded-full bg-white absolute bottom-[-15%] lg:bottom-[-13%] left-[-18.5%] sm:left-[-13.5%] lg:left-[-11.5%]"></div>
              </div>
            </div>
          ))
        ) : (
          <p>No discounts available</p>
        )}
      </div>
    </>
  );
};

export default DiscountSection;

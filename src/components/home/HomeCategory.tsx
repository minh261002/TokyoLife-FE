import type { HomeCategory } from "@/types/Category";
import { useState, useEffect } from "react";
import { getCategoryInHome } from "@/services/CategoryService";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  const [homeCategory, setHomeCategory] = useState<HomeCategory[] | null>(null);

  const fetchHomeCategory = async () => {
    const data = await getCategoryInHome();
    if (data && Array.isArray(data)) {
      setHomeCategory(data);
    }
  };

  useEffect(() => {
    fetchHomeCategory();
  }, []);

  return (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
      {homeCategory && homeCategory.length > 0 ? (
        homeCategory.map((category) => (
          <Link
            to={`/danh-muc/${category.slug}`}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className=" rounded-full w-32 h-32 flex items-center justify-center overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-2 text-base font-medium">{category.name}</div>
          </Link>
        ))
      ) : (
        <div>Không có dữ liệu</div>
      )}
    </div>
  );
};

export default HomeCategory;

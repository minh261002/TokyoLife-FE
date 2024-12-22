import { getCategoryInMenu } from "@/services/CategoryService";
import type { Category } from "@/types/Category";
import { useEffect, useState } from "react";

const HeaderBottom = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    const data = await getCategoryInMenu();
    if (Array.isArray(data)) {
      setCategories(data);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <nav className="bg-white border-gray-200 shadow-md py-2 flex items-center justify-center"></nav>
  );
};

export default HeaderBottom;

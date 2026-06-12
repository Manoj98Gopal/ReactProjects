import React from "react";
import { useUIStore } from "../store/useUIStore";
import { useCategories } from "../hooks/useProducts";

const CategoryFilter = () => {
  const { data: categories, isLoading } = useCategories;
  const selectedCategory = useUIStore((s) => s.selectedCategory);
  const setCategory = useUIStore((s) => s.setCategory);

  if (isLoading)
    return <p className="text-sm text-gray-500">Loading categories...</p>;

  const all = ["all", ...(categories || [])];
  return (
    <div className="flex gap-2 flex-wrap mb-6">
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition
            ${
              selectedCategory === cat
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

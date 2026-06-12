import { useProducts } from "../hooks/useProducts";
import { useUIStore } from "../store/useUIStore";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const selectedCategory = useUIStore((s) => s.selectedCategory);
  const searchQuery = useUIStore((s) => s.searchQuery);

  const { data: products, isLoading, isError } = useProducts(selectedCategory);

  // Senior dev — filter on frontend after API returns data
  const filtered = products?.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading)
    return (
      <div className="text-center py-20 text-gray-500">Loading products...</div>
    );

  if (isError)
    return (
      <div className="text-center py-20 text-red-500">
        Something went wrong!
      </div>
    );

  return (
    <div>
      <CategoryFilter />
      <p className="text-sm text-gray-500 mb-4">
        {filtered?.length} products found
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

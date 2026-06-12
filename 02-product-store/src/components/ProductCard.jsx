import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { useDeleteProduct } from "../hooks/useProducts";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const addItem = useCartStore((s) => s.addItem);
  const deleteProduct = useDeleteProduct();

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3 hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        onClick={() => navigate(`/product/${product.id}`)}
        className="h-48 object-contain mx-auto cursor-pointer hover:scale-105 transition"
      />

      <p className="text-sm font-semibold text-gray-800 line-clamp-2">
        {product.title}
      </p>

      <span className="text-xs text-gray-400 capitalize">
        {product.category}
      </span>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-red-500">${product.price}</span>
        <span className="text-xs text-gray-500">
          ⭐ {product.rating.rate} ({product.rating.count})
        </span>
      </div>

      <button
        onClick={() => addItem(product)}
        className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition"
      >
        Add to Cart
      </button>

      <button
        onClick={() => deleteProduct.mutate(product.id)}
        disabled={deleteProduct.isPending}
        className="w-full border border-red-400 text-red-400 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition disabled:opacity-50"
      >
        {deleteProduct.isPending ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default ProductCard;

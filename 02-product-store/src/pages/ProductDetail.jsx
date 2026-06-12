import { useParams, useNavigate } from "react-router-dom";
import { useProduct } from "../hooks/useProducts";
import { useCartStore } from "../store/useCartStore";

const ProductDetail = () => {
  const { id } = useParams(); // get id from URL
  const navigate = useNavigate();
  const addItem = useCartStore((s) => s.addItem);

  const { data: product, isLoading, isError } = useProduct(Number(id));

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 animate-pulse text-lg">
          Loading product...
        </p>
      </div>
    );

  if (isError)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-400 text-lg">Failed to load product.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-500 hover:text-gray-900 transition text-sm font-medium"
        >
          ← Back
        </button>

        {/* Product Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row gap-10">
          {/* Image */}
          <div className="flex items-center justify-center md:w-72 h-72 flex-shrink-0">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 flex-1">
            <span className="text-xs text-gray-400 capitalize bg-gray-100 px-3 py-1 rounded-full w-fit">
              {product.category}
            </span>

            <h1 className="text-2xl font-bold text-gray-800 leading-snug">
              {product.title}
            </h1>

            <p className="text-sm text-gray-500 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mt-2">
              <span className="text-3xl font-bold text-red-500">
                ${product.price}
              </span>
              <span className="text-sm text-gray-400">
                ⭐ {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>

            <button
              onClick={() => {
                addItem(product);
                navigate(-1);
              }}
              className="mt-auto w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

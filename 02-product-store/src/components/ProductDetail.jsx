import { useUIStore } from "../store/useUIStore";
import { useCartStore } from "../store/useCartStore";
import { useProduct } from "../hooks/useProducts";

const ProductDetail = () => {
  const isDetailOpen = useUIStore((s) => s.isDetailOpen);
  const selectedProductId = useUIStore((s) => s.selectedProductId);
  const closeDetail = useUIStore((s) => s.closeDetail);
  const addItem = useCartStore((s) => s.addItem);

  // React Query only fetches when selectedProductId exists
  // enabled: !!selectedProductId  means
  // if selectedProductId is null  → don't fetch
  // if selectedProductId is 1,2,3 → fetch
  const { data: product, isLoading, isError } = useProduct(selectedProductId);

  if (!isDetailOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={closeDetail} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 z-10 p-8">
        {/* Close Button */}
        <button
          onClick={closeDetail}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl"
        >
          ✕
        </button>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400 animate-pulse">Loading product...</p>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="flex items-center justify-center h-64">
            <p className="text-red-400">Failed to load product.</p>
          </div>
        )}

        {/* Product Content */}
        {product && (
          <div className="flex flex-col sm:flex-row gap-8">
            {/* Image */}
            <div className="flex-shrink-0 flex items-center justify-center w-full sm:w-56 h-56">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3 flex-1">
              <span className="text-xs text-gray-400 capitalize bg-gray-100 px-3 py-1 rounded-full w-fit">
                {product.category}
              </span>

              <h2 className="text-lg font-bold text-gray-800 leading-snug">
                {product.title}
              </h2>

              <p className="text-sm text-gray-500 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-2xl font-bold text-red-500">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-400">
                  ⭐ {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>

              <button
                onClick={() => {
                  addItem(product);
                  closeDetail();
                }}
                className="mt-auto w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

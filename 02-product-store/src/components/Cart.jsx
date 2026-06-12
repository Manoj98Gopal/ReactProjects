import { useCartStore } from "../store/useCartStore";

const Cart = () => {
  const items = useCartStore((s) => s.items);
  const isCartOpen = useCartStore((s) => s.isCartOpen);
  const toggleCart = useCartStore((s) => s.toggleCart);
  const removeItem = useCartStore((s) => s.removeItem);
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const clearCart = useCartStore((s) => s.clearCart);
  const getTotalPrice = useCartStore((s) => s.getTotalPrice);

  // console.log("items :", items);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="flex-1 bg-black/40" onClick={toggleCart} />

      {/* Cart Panel */}
      <div className="w-96 bg-white h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button
            onClick={toggleCart}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
          {items.length === 0 && (
            <p className="text-center text-gray-400 mt-20">Cart is empty</p>
          )}
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 items-center border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 object-contain"
              />

              <div className="flex-1">
                <p className="text-xs font-medium text-gray-800 line-clamp-2">
                  {item.title}
                </p>
                <p className="text-sm font-bold text-red-500 mt-1">
                  ${item.price}
                </p>

                {/* Qty controls */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-6 h-6 rounded-full bg-gray-200 text-sm font-bold hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="text-sm font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-6 h-6 rounded-full bg-gray-200 text-sm font-bold hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-400 hover:text-red-600 text-lg"
              >
                🗑
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-t">
            <div className="flex justify-between text-base font-bold mb-4">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
              Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full mt-2 text-sm text-gray-400 hover:text-red-500 transition"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

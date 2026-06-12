import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const cartStore = (set, get) => ({
  // state
  items: [],
  isCartOpen: false,

  // Add item or increase qty if already exists
  addItem: (product) =>
    set(
      (state) => {
        const exists = state.items.find((i) => i.id === product.id);

        if (exists) {
          return {
            items: state.items.map((i) =>
              i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
            )
          };
        }
        return { items: [...state.items, { ...product, quantity: 1 }] };
      },
      false,
      "cart/addItem"
    ),

  // Remove item completely
  removeItem: (id) =>
    set(
      (state) => ({
        items: state.items.filter((i) => i.id !== id)
      }),
      false,
      "cart/removeItem"
    ),

  // Decrease quantity
  decreaseQty: (id) =>
    set(
      (state) => ({
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
        )
      }),
      false,
      "cart/decreaseQty"
    ),

  // increase quantity
  increaseQty: (id) =>
    set(
      (state) => ({
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity: Math.max(1, i.quantity + 1) } : i
        )
      }),
      false,
      "cart/decreaseQty"
    ),

  // Clear entire cart
  clearCart: () => set({ items: [] }, false, "cart/clear"),

  // Toggle cart sidebar open/close
  toggleCart: () =>
    set(
      (state) => ({
        isCartOpen: !state.isCartOpen
      }),
      false,
      "cart/toggle"
    ),

  // Computed values — use get() to read current state
  getTotalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
  getTotalPrice: () =>
    get().items.reduce((sum, i) => sum + i.price * i.quantity, 0)
});

export const useCartStore = create(
  devtools(persist(cartStore, { name: "cart-storage" }))
);

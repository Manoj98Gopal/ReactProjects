import { create } from "zustand";
import { devtools } from "zustand/middleware";

const uiStore = (set) => ({
  // existing state
  selectedCategory: "all",
  searchQuery: "",
  selectedProductId: null,
  isDetailOpen: false,
  isCreateOpen: false,

  setCategory: (category) =>
    set({ selectedCategory: category }, false, "ui/setCategory"),

  setSearch: (query) => set({ searchQuery: query }, false, "ui/setSearch"),

  resetFilters: (query) =>
    set({ selectedCategory: "all", searchQuery: "" }, false, "ui/resetFilters"),

  openDetail: (id) =>
    set({ selectedProductId: id, isDetailOpen: true }, false, "ui/openDetail"),

  closeDetail: () =>
    set(
      { selectedProductId: null, isDetailOpen: false },
      false,
      "ui/closeDetail"
    ),

  openCreate: () => set({ isCreateOpen: true }, false, "ui/openCreate"),
  closeCreate: () => set({ isCreateOpen: false }, false, "ui/closeCreate")
});

export const useUIStore = create(devtools(uiStore));

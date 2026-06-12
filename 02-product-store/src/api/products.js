import { api } from "../lib/axios";

// Query Key Factory
export const productKeys = {
  all: ["products"],
  list: (category) => ["products", "list", category],
  detail: (id) => ["products", "detail", id],
  categories: () => ["products", "categories"]
};

// GET all products or by category
export const getProducts = async (category) => {
  const url =
    category && category !== "all"
      ? `/products/category/${category}`
      : "/products";

  const { data } = await api.get(url);
  console.log("getting the data :", data);
  return data;
};

// GET single product
export const getProduct = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

// GET all categories
export const getCategories = async () => {
  const { data } = await api.get("/products/categories");
  return data;
};

// POST — create product
export const createProduct = async (product) => {
  const { data } = await api.post("/products", product);
  return data;
};

// PUT — update product
export const updateProduct = async ({ id, ...product }) => {
  const { data } = await api.put(`/products/${id}`, product);
  return data;
};

// DELETE — delete product
export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};

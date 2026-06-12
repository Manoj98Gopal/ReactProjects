import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProduct,
  deleteProduct,
  getCategories,
  getProduct,
  getProducts,
  productKeys,
  updateProduct
} from "../api/products";

// GET all products
export const useProducts = (category = "all") => {
  return useQuery({
    queryKey: productKeys.list(category),
    queryFn: () => getProducts(category)
  });
};

// GET single product
export const useProduct = (id) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => getProduct(id),
    enabled: !!id //don't run if no id
  });
};

// Get categories
export const useCategories = () => {
  return useQuery({
    queryKey: productKeys.categories(),
    queryFn: () => getCategories(),
    staleTime: Infinity
  });
};

// create
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: productKeys.all
      });
    }
  });
};

// update
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: productKeys.all
      });
    }
  });
};

// delete
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: productKeys.all
      });
    }
  });
};

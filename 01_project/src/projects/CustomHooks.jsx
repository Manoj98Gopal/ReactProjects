import React, { useEffect, useMemo, useState } from "react";
import ProductCard, { ProductCardSkeleton } from "../components/ProductCard";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";

const url = "https://dummyjson.com/products";
const LIMIT = 4;
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};

const CustomHooks = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 500);
  const skip = (page - 1) * LIMIT;

  const queryParams = useMemo(() => {
    const searchText = debouncedSearch.trim();

    return debouncedSearch.trim()
      ? `${url}/search?q=${searchText}&limit=${LIMIT}&skip=${skip}`
      : `${url}?limit=${LIMIT}&skip=${skip}`;
  }, [debouncedSearch, skip]);

  const { data, error, loading } = useFetch(queryParams, options);

  const totalProducts = data?.total || 0;
  const totalPages = Math.ceil(totalProducts / LIMIT);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  if (error) {
    return (
      <div className="pt-14">
        <p className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="pt-14">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-950">Products</h1>
          <p className="mt-1 text-sm text-slate-600">
            Products fetched with your custom hook.
          </p>
        </div>

        <div className="relative w-full lg:max-w-sm">
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pr-20 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : data?.total > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-slate-300 p-8 text-center">
          <p className="font-semibold text-slate-950">No products found</p>
          <p className="mt-1 text-sm text-slate-600">
            Try searching by product name, brand, category, or tag.
          </p>
        </div>
      )}

      {totalProducts > 0 && (
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            Page {page} of {totalPages}
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPage((currentPage) => currentPage - 1)}
              disabled={!hasPreviousPage || loading}
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-white"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() => setPage((currentPage) => currentPage + 1)}
              disabled={!hasNextPage || loading}
              className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomHooks;

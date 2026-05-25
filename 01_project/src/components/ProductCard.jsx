import React from "react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  const discountedPrice =
    product.discountPercentage > 0
      ? product.price - (product.price * product.discountPercentage) / 100
      : product.price;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative flex aspect-square items-center justify-center bg-slate-50 p-5">
        <img
          src={product.thumbnail || product.images?.[0]}
          alt={product.title}
          className="h-full w-full object-contain"
        />

        {product.discountPercentage > 0 && (
          <span className="absolute left-3 top-3 rounded bg-rose-600 px-2 py-1 text-xs font-semibold text-white">
            {Math.round(product.discountPercentage)}% off
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-wide text-slate-500">
            <span>{product.category}</span>
            <span className="rounded bg-emerald-50 px-2 py-1 text-emerald-700">
              {product.availabilityStatus}
            </span>
          </div>

          <h2 className="min-h-12 text-lg font-semibold leading-6 text-slate-950">
            {product.title}
          </h2>

          <p className="h-12 overflow-hidden text-sm leading-6 text-slate-600">
            {product.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded border border-slate-200 px-2 py-1 text-xs text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto space-y-3">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-2xl font-bold text-slate-950">
                ${discountedPrice.toFixed(2)}
              </p>
              {product.discountPercentage > 0 && (
                <p className="text-sm text-slate-400 line-through">
                  ${product.price.toFixed(2)}
                </p>
              )}
            </div>

            <div className="text-right">
              <p className="font-semibold text-amber-600">
                ★ {product.rating?.toFixed(1)}
              </p>
              <p className="text-xs text-slate-500">{product.stock} in stock</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
            <p>
              <span className="font-semibold text-slate-800">Brand:</span>{" "}
              {product.brand || "N/A"}
            </p>
            <p>
              <span className="font-semibold text-slate-800">SKU:</span>{" "}
              {product.sku}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <article className="h-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="aspect-square animate-pulse bg-slate-100" />

      <div className="space-y-4 p-4">
        <div className="flex justify-between gap-3">
          <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />
          <div className="h-6 w-16 animate-pulse rounded bg-slate-200" />
        </div>

        <div className="space-y-2">
          <div className="h-5 w-4/5 animate-pulse rounded bg-slate-200" />
          <div className="h-5 w-3/5 animate-pulse rounded bg-slate-200" />
        </div>

        <div className="space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-slate-200" />
          <div className="h-3 w-11/12 animate-pulse rounded bg-slate-200" />
        </div>

        <div className="flex gap-2">
          <div className="h-7 w-16 animate-pulse rounded bg-slate-200" />
          <div className="h-7 w-20 animate-pulse rounded bg-slate-200" />
        </div>

        <div className="flex items-end justify-between pt-3">
          <div className="space-y-2">
            <div className="h-7 w-24 animate-pulse rounded bg-slate-200" />
            <div className="h-4 w-16 animate-pulse rounded bg-slate-200" />
          </div>
          <div className="space-y-2">
            <div className="h-5 w-14 animate-pulse rounded bg-slate-200" />
            <div className="h-3 w-16 animate-pulse rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

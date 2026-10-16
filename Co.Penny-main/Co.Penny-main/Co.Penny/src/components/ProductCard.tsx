export interface Product {
  id: number;
  name: string;
  description: string;
  ram: string;
  storage: string;
  price: number;
  image: string;
  stock: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="group rounded-2xl border border-neutral-100 bg-white p-4 transition hover:shadow-lg">
      <div className="relative mb-4 flex h-48 items-center justify-center rounded-xl bg-neutral-50">
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-full object-contain p-4 ${isOutOfStock ? "opacity-60" : ""}`}
        />
        {isOutOfStock ? (
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/40">
            <span className="text-lg font-semibold text-white">Out of stock</span>
          </div>
        ) : (
          <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#121212] px-3 py-1 text-xs font-medium text-[#FFD100]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00873E]"></span>
            In Stock ({product.stock})
          </span>
        )}
      </div>

      <h3 className="mb-1 font-semibold text-neutral-900">{product.name}</h3>
      <p className="mb-3 text-sm text-neutral-500">{product.description}</p>

      <div className="mb-4 flex gap-2">
        <span className="rounded-md bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
          {product.ram}
        </span>
        <span className="rounded-md bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
          {product.storage}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <span className="text-lg font-bold text-neutral-900">
            ${product.price.toLocaleString()}
          </span>
          <span className="text-sm text-neutral-500"> JMD/day</span>
        </div>
        <button
          disabled={isOutOfStock}
          className={`flex items-center gap-1 rounded-full border px-4 py-2 text-sm font-medium transition ${
            isOutOfStock
              ? "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-400"
              : "border-neutral-300 bg-[#121212] text-white hover:border-neutral-900 hover:bg-neutral-900"
          }`}
        >
          Rent
          <svg
            className={`h-4 w-4 ${isOutOfStock ? "text-neutral-400" : "text-amber-300"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

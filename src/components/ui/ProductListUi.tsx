import type { ProductListProps } from "../../types/types";

export default function ProductListUi({
  product = [],
  loading = false,
  fetchProduct,
}: ProductListProps) {
  return (
    <div>
      <button
        type="button"
        className="bg-amber-300 text-gray-800 rounded-lg p-2"
        onClick={fetchProduct}
      >
        {" "}
        Click for more products
      </button>
      <div>
        {loading ? (
          <div className="bg-gray-900 text-2xl">loading....</div>
        ) : (
          <div>
            {product.map((item) => (
              <div
                key={item.id}
                className="border-b text-amber-50 border-gray-200 p-2"
              >
                <div>{item.name}</div>
                <div>{item.brand}</div>
                <div>{item.id}</div>
                <div>{item.category}</div>
                <div>{item.price}</div>
                <div>{item.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

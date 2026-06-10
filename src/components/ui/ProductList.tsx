import type { ProductListProps } from "../../types/types";

export default function ProductList({
  product = [],
  loading = false,
}: ProductListProps) {
  return (
    <div>
      <div>
        {loading ? (
          <div className="bg-gray-900 text-2xl">loading....</div>
        ) : (
          <div
            className="   grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-6
    p-3 
          "
          >
            {product.map((item) => (
              <div
                className="
    bg-white
    rounded-3xl
    shadow-md
    hover:shadow-xl
    transition-all
    duration-300
    overflow-hidden
   
    w-full
  "
              >
                {/* Image */}
                <div className="bg-gray-100 flex justify-center">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="
        h-auto
        w-full
        object-cover
        object-top
        transition-transform
        duration-300
        hover:scale-105
      "
                  />
                </div>

                {/* Details */}
                <div className="p-4 space-y-2">
                  <h2
                    className="
        text-base
        sm:text-lg
        font-bold
        text-gray-800
        line-clamp-1
      "
                  >
                    {item.name}
                  </h2>

                  <p className="text-sm text-gray-500">{item.brand}</p>

                  <div className="flex justify-between items-center">
                    <span
                      className="
          text-xs
          bg-blue-100
          text-blue-700
          px-3
          py-1
          rounded-full
        "
                    >
                      {item.category}
                    </span>

                    <span
                      className="
          text-lg
          sm:text-xl
          font-bold
          text-green-600
        "
                    >
                      ₹{item.price}
                    </span>
                  </div>

                  <p
                    className="
        text-sm
        text-gray-600
        line-clamp-2
      "
                  >
                    {item.description}
                  </p>

                  <button
                    className="
        w-full
        py-2
        rounded-xl
        bg-black
        text-white
        hover:bg-gray-800
        transition
      "
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

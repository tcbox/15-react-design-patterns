import type { RecommendedTagsProps } from "../../types/types";

function RecommendedOption(props: RecommendedTagsProps) {
  const { product, fetchProducts, filter } = props;

  return (
    <div className="h-auto px-5 py-4 w-full justify-items-start z-10">
      <h2 className="text-3xl font-semibold mb-5 ">Recommended</h2>
      <div
        className="w-full flex gap-5 my-2 items-center justify-evenly 
      "
      >
        {product.map((item) => (
          <div key={item.categoryId} className="">
            <div className="bg-gray-700 text-shadow-md tracking-wider font-extralight  p-2 rounded-md border border-gray-200/30">
              {item.category}
            </div>
          </div>
        ))}
        <button
          onClick={fetchProducts}
          className="bg-blue-500 rounded-md p-2 text-md "
        >
          Get Products
        </button>
        <div>{filter.minRating}</div>
      </div>
    </div>
  );
}

export default RecommendedOption;

import React, { useState } from "react";

import NavBar from "./ui/NavBar";
import RecommendedOption from "./ui/RecommendedOption";
import FilterProducts from "./ui/FilterProducts";
import ProductList from "./ui/ProductList";
import useProducts from "./hooks/useProducts";
import { filterProducts } from "./utils/filterProducts";

const filtered = {
  search: "",
  category: "All",
  brand: "All",
  minPrice: 0,
  maxPrice: 100000,
  minRating: 0,
  inStock: false,
  sortBy: "default",
};

function AppDp() {
  const { product, loading, fetchProducts } = useProducts();

  const [filter, setFilter] = useState(filtered);

  const filteredProduct = filterProducts(product, filter);
  return (
    <div>
      <NavBar />
      <div className="flex h-screen">
        <div className="w-2/12 bg-gray-800">
          <FilterProducts filter={filter} setfilter={setFilter} />
        </div>
        <div className=" w-10/12 ">
          <div className="flex items-center justify-center ">
            <RecommendedOption
              product={product}
              filter={filter}
              fetchProducts={fetchProducts}
            />
          </div>
          <ProductList product={filteredProduct} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default AppDp;

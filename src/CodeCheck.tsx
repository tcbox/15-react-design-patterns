import React, { useState, useMemo } from "react";
import FilterProducts from "./components/ui/FilterProducts";
import type { ProductFilters } from "./types/types";

const ProductListing = () => {
  // 1. API nunchi vachina original products
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "electronics" },
    { id: 2, name: "Shirt", category: "clothing" },
    { id: 3, name: "Mobile", category: "electronics" },
  ]);

  // 2. Filter state (idi mee FilterProducts component ki pass chestham)
  const [filter, setFilter] = useState<ProductFilters>({
    search: "", // searchQuery badulu 'search' ani vadandi (mee type prakaram)
    category: "All", // leda ""
    brand: "", // leda ""
    minPrice: 0,
    maxPrice: 100000, // Edoka maximum default price
    minRating: 0,
    inStock: false,
    sortBy: "newest",
  });

  // 3. useMemo tho Filtering Logic
  const filteredProducts = useMemo(() => {
    console.log("Filtering products..."); // Idi eppudu run avuthundo chudataniki

    return products.filter((product) => {
      // Category match avvala (ledu ante empty unte anni allow cheyyali)
      const matchesCategory =
        filter.category === "" || product.category === filter.category;
      console.log("Products:=>", filter);
      console.log("Filters:=>", product);

      // Search query match avvala
      const matchesSearch =
        !filter.search ||
        product.name.toLowerCase().includes(filter.search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [products, filter]); // <-- Dependency Array

  return (
    <div>
      {/* Filters set cheyadaniki mee component */}
      <FilterProducts filter={filter} setfilter={setFilter} />

      {/* Filter ayina products chupinchadaniki */}
      <div>
        <h3>Results ({filteredProducts.length})</h3>
        <ul>
          {filteredProducts.map((p) => (
            <li key={p.id}>
              {p.name} - {p.category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductListing;

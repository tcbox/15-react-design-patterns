import type { ProductFilters, ProductListType } from "../../types/types";

export const filterProducts = (
  products: ProductListType[],
  filters: ProductFilters,
) => {
  const filtered = products.filter((item) => {
    const price = Number(item.price);
    const rating = Number(item.rating);
    const searchMatch =
      !filters.search ||
      item.name.toLocaleLowerCase().includes(filters.search.toLowerCase());
    const categoryMatch =
      filters.category === "All" || item.category === filters.category;
    const brandMatch = filters.brand === "All" || item.brand === filters.brand;
    const priceMatch = price >= filters.minPrice && price <= filters.maxPrice;
    const ratingMatch = rating >= filters.minRating;

    const stockMatch = !filters.inStock || item.inStock;

    return (
      searchMatch &&
      categoryMatch &&
      brandMatch &&
      priceMatch &&
      ratingMatch &&
      stockMatch
    );
  });
  switch (filters.sortBy) {
    case "price-low":
      filtered.sort((a, b) => Number(a.price) - Number(b.price));
      break;

    case "price-high":
      filtered.sort((a, b) => Number(b.price) - Number(a.price));
      break;

    case "rating":
      filtered.sort((a, b) => Number(b.rating) - Number(a.rating));
      break;

    case "newest":
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      break;

    default:
      break;
  }

  return filtered;
};

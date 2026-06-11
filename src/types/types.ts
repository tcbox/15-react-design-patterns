export type ProductListType = {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  categoryId: string;
  category: string;
  imageUrl: string;
  rating: string;
  reviewCount: string;
  inStock: string;
  stock: string;
  brand: string;
  tags: string;
  features: string;
  createdAt: string;
};

export type ProductListProps = {
  product: ProductListType[];
  loading: boolean;
};
export interface ProductFilters {
  search: string;
  category: string;
  brand: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  inStock: boolean;
  sortBy: string;
}
export type CatogeryOnlyType = Pick<ProductListType, "category" | "categoryId">;

export type RecommendedTagsProps = {
  product: CatogeryOnlyType[];
  filter: ProductFilters;
  fetchProducts: () => Promise<void> | void;
  // setfilter: React.Dispatch<React.SetStateAction<ProductFilters>>;
};

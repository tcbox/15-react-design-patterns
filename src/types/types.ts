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
  fetchProduct: () => Promise<void>;
};

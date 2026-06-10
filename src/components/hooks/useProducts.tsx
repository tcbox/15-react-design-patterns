import { useEffect, useState, useCallback } from "react";
import api from "../../configs/api";
import { AxiosError, isAxiosError } from "axios";
import type { ProductListType } from "../../types/types";

function useProducts() {
  const [product, setProduct] = useState<ProductListType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get("products");
      const data = res.data.map((item: ProductListType) => {
        return {
          ...item,
          price: Number(item.price),
          rating: Number(item.rating),
        };
      });
      setProduct(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        isAxiosError(error.response?.data || error.message);
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const runFun = () => {
      fetchProducts();
    };
    runFun();
  }, [fetchProducts]);
  return { product, loading, fetchProducts };
}

export default useProducts;

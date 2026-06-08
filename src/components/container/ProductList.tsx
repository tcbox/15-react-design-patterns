import { AxiosError, isAxiosError } from "axios";
import type { ProductListType } from "../../types/types";

import { useCallback, useEffect, useState } from "react";
import ProductListUi from "../ui/ProductListUi";
import api from "../../configs/api";

export default function ProductList() {
  const [product, setProduct] = useState<ProductListType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get("products");
      const data = res.data;
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
  return (
    <div>
      <ProductListUi
        product={product}
        loading={loading}
        fetchProduct={fetchProducts}
      />
    </div>
  );
}

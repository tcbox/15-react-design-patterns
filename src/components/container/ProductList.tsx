import axios, { AxiosError, isAxiosError } from "axios";
import type { ProductListType } from "../../types/types";
import { BASE_API_URL } from "../../configs/baseUrl";
import { useState } from "react";

export default function ProductList() {
  const [Product, setProduct] = useState<ProductListType[] | null>([]);

  const FetchProducts = axios
    .get(BASE_API_URL(`products`))
    .then((res) => {
      const data = res.data;
      setProduct(data);
    })
    .catch((err) => {
      if (err instanceof AxiosError) {
        isAxiosError(err);
      } else {
        console.error(err);
      }
    });
  console.log(Product);

  FetchProducts();
  return { Product };
}

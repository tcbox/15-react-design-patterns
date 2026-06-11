import React, { type Dispatch, type SetStateAction } from "react";
import type { ProductFilters } from "../../types/types";

const FilterProducts = (props: {
  filter: ProductFilters;
  setfilter: Dispatch<SetStateAction<ProductFilters>>;
}) => {
  const { filter, setfilter } = props;
  return (
    <div>
      <div></div>
    </div>
  );
};

export default FilterProducts;

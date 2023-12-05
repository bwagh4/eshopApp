import React from "react";
import ProductView from "./ProductView";
import ProductDetails from "./ProductDetails";

const ProductBody = () => {
  return (
    <div className="flex flex-col md:flex-row p-10">
      <div className="sm:w-full md:w-full lg:w-1/2">
        <ProductView />
      </div>
     <ProductDetails/>
    </div>
  );
};

export default ProductBody;

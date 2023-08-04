import React from "react";
import ProductDetails from "../features/Products/components/Product-Details";
import Navbar from "../features/navbar/Navbar";

const ProductDetailsPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetails />
      </Navbar>
    </div>
  );
};

export default ProductDetailsPage;

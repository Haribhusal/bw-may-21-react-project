import React from "react";
import ProductsSection from "../sections/ProductsSection";

const Products = () => {
  return (
    <main className="p-10 bg-violet-50">
      <h3 className="mb-10 font-bold text-2xl">All Products</h3>
      <ProductsSection />
    </main>
  );
};

export default Products;

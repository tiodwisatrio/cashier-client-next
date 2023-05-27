import React, { useEffect, useState } from "react";
import Layout from "@/components/layouts/Layout.jsx";
import ProductList from "@/components/elements/ProductList/ProductList";
import Cart from "@/components/elements/Cart/Cart";
import api from "@/api/index.js";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      const data = await response.data.payload;
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <div className="ml-16 mr-8 mt-8 mb-3">
        <h1 className="font-bold">Cashier App</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <ProductList products={products} />
        <Cart />
      </div>
    </Layout>
  );
}

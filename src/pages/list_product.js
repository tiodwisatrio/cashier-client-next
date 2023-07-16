import React, { useEffect, useState } from "react";
import Layout from "@/components/layouts/Layout.jsx";

import api from "@/api/index.js";
import Link from "next/link";

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  const handleChangeSearch = (e) => {
    const { target } = e;
    const { value } = target;
    setSearchProduct(value);
  };

  const filteredProduct = products.filter((product) => {
    return product.name.toLowerCase().includes(searchProduct.toLowerCase());
  });

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
      <div className="ml-16 mr-8 mt-8 mb-3 relative">
        <h1 className="font-bold">Cashier App</h1>
      </div>
      <div className="flex flex-row gap-x-2 mb-6 ml-16">
        <input
          type="text"
          placeholder="search product by name..."
          onChange={handleChangeSearch}
          className="placeholder:text-sm text-sm  px-4 py-2 rounded-sm text-[#ff8730] border-2 focus:outline-none focus:border-[#ff8730] w-[250px]"
        />

        <button className="bg-[#ff8730] rounded px-4 py-[9px] text-white text-sm">
          Search
        </button>

        <Link
          className="bg-teal-700 hover:bg-teal-800 transition-all duration-300 rounded px-4 py-[9px] text-white text-sm"
          href="/add_product"
        >
          Tambah Product
        </Link>
      </div>
      <div className="flex flex-col-reverse md:flex-row ml-16 w-full">
        <table className="w-[90%] mb-10">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-[#ff8730] text-white border border-gray-300">
                No
              </th>
              <th className="px-4 py-2 bg-[#ff8730] text-white border border-gray-300">
                Gambar Product
              </th>
              <th className="px-4 py-2 bg-[#ff8730] text-white border border-gray-300">
                Nama Product
              </th>
              <th className="px-4 py-2 bg-[#ff8730] text-white border border-gray-300">
                Harga Product
              </th>
              <th className="px-4 py-2 bg-[#ff8730] text-white border border-gray-300">
                Stok Product
              </th>
              <th className="px-4 py-2 bg-[#ff8730] text-white border border-gray-300">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping */}
            {filteredProduct.map((product, index) => {
              return (
                <tr key={index} className="text-center">
                  <td className="px-4 py-2 border border-gray-300">
                    {product.id}
                  </td>
                  <td className="px-4 py-2 border border-gray-300 mx-auto text-center flex justify-center items-center">
                    <img
                      src={product.img_product}
                      alt="image_product"
                      className="object-contain w-[100px] h-[100px] relative "
                    />
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {product.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {product.price}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {product.stock}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button className="bg-[#3078ff] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#1046ac] mr-4">
                      Edit ✏️
                    </button>
                    <button className="bg-[#ea4524] text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#b92d12]">
                      Delete 🗑️
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

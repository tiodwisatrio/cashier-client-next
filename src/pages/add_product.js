import React from "react";
import Layout from "@/components/layouts/Layout";

const AddProduct = () => {
  return (
    <Layout>
      <div className="ml-16 mr-8 mt-8 mb-3 flex items-center justify-start gap-x-3">
        <h1 className="font-bold">Cashier App</h1>
        <span>-</span>
        <p className="font-semibold">Tambah Product</p>
      </div>
      <div className="flex flex-col ml-16 w-[70%] mt-12">
        <form className="w-full">
          <div className="mb-8">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="namaProduct"
            >
              Nama Product
            </label>
            <input
              type="text"
              id="namaProduct"
              placeholder="Masukkan nama product"
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="namaProduct"
            >
              Harga Product
            </label>
            <input
              type="number"
              id="hargaProduct"
              placeholder="Masukkan harga product"
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="namaProduct"
            >
              Stock Product
            </label>
            <input
              type="number"
              id="stockProduct"
              placeholder="Masukkan stock product"
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="namaProduct"
            >
              Link Gambar Product
            </label>
            <input
              type="text"
              id="linkGambarProduct"
              placeholder="Masukkan link gambar product"
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </form>
        <button className="w-full mt-4 bg-[#ff8730] py-4 px-3 text-center rounded text-white font-medium text-[18px] hover:bg-[#cb651d] transition-all duration-300">
          Submit
        </button>
      </div>
    </Layout>
  );
};

export default AddProduct;

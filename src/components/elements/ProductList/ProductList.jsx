import { useCartsDispatch } from "@/context/CartContext";
import React, { useState } from "react";

const ProductList = ({ products }) => {
  const dispatch = useCartsDispatch();
  const [searchProduct, setSearchProduct] = useState("");

  const handleAddToCart = (product) => {
    // console.log(product);
    dispatch({
      type: "added",
      payload: product,
    });
  };

  const handleChangeSearch = (e) => {
    const { target } = e;
    const { value } = target;
    setSearchProduct(value);
  };

  console.log({ searchProduct });

  const filteredProduct = products.filter((product) => {
    return product.name.toLowerCase().includes(searchProduct.toLowerCase());
  });

  // const handleFilteredProduct = () => {
  //   const filteredProducts = products.filter((product) => {
  //     return {
  //       ...product,
  //       name: product.name.toLowerCase().includes(searchProduct.toLowerCase()),
  //     };
  //   });
  //   return filteredProducts;
  // };

  return (
    <>
      <div className="flex flex-col ml-16 w-[100%] ">
        
        <div className="flex flex-row gap-x-2 mb-6">
          <input
            type="text"
            placeholder="search product"
            onChange={handleChangeSearch}
            className="placeholder:text-sm text-sm  px-4 py-2 rounded-sm text-[#ff8730] border-2 focus:outline-none focus:border-[#ff8730] w-[250px]"
          />

          <button className="bg-[#ff8730] rounded px-4 py-[9px] text-white text-sm">
            Search
          </button>
        </div>
        {/* <div className="w-full flex gap-4 flex-wrap items-center justify-center"> */}
        <div className="w-full flex gap-4 flex-wrap items-center justify-start h-full">
          {/* ${index === cards.length - 1 ? 'pr-0' : ''} */}
          {/* <div className={`w-full flex flex-wrap items-center justify-start h-full overflow-auto ${`products`}`}> */}
          {filteredProduct.map((product, index) => {
            return (
              <div
                key={index}
                className={`productCard bg-white py-2 w-[210px] h-[250px] rounded-lg shadow-lg ${
                  index === filteredProduct.length - 1 ? "pr-0" : ""
                }`}
              >
                <div></div>
                <img
                  src={product.img_product}
                  alt="image_product"
                  className="object-contain w-full h-[140px] relative bg-transparent aspect-square  p-2 rounded-lg bg-blend-color-burn"
                />
                <div className="p-4 flex flex-col">
                  <div className="flex flex-row justify-between items-center">
                    <h1 className="text-base">{product.name}</h1>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="text-2xl bg-[#ff8730] text-white px-2 rounded-md transition-all duration-100 hover:bg-[#f67418]"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-4">
                    <p className="font-semibold text-xl text-[#ff8730]">
                      Rp {product.price}
                    </p>
                    <p className="text-[12px] opacity-70">
                      stock: {product.stock}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;

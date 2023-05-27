import React, { useState } from "react";
import { useCarts, useCartsDispatch } from "@/context/CartContext";
import api from "@/api";
import toRupiah from "@develoka/angka-rupiah-js";

import { toast } from "react-toastify";
const Cart = () => {
  const [payAmount, setPayAmount] = useState(0);
  const carts = useCarts();
  const dispatch = useCartsDispatch();

  const handleIncreaseCart = (product) => {
    dispatch({
      type: "added",
      payload: product,
    });
  };

  const handleDecreaseCart = (product) => {
    dispatch({
      type: "decrease",
      payload: product,
    });
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < carts.length; i++) {
      totalPrice += carts[i].price * carts[i].quantity;
    }
    return totalPrice;
  };

  const handleChangePay = (e) => {
    const { target } = e;
    const { value } = target;
    setPayAmount(value);
  };

  const handleCheckout = async () => {
    const products = carts.map((item) => {
      return {
        id: item.id,
        quantity: item.quantity,
      };
    });
    try {
      const payload = {
        total_price: +getTotalPrice(),
        paid_amount: +payAmount,
        products,
      };
      await api.post("/transactions", payload);
      setPayAmount("");
      dispatch({
        type: "clear",
      });
      toast.success("Checkout berhasil👌", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      throw error(error);
    }
  };

  const isDisabledButton = () => {
    return (
      !payAmount ||
      +payAmount < +getTotalPrice() ||
      carts.length === 0 ||
      +payAmount < 0 ||
      +payAmount[0] === 0
    );
  };

  return (
    <div
      className={`w-[100%] md:w-[30%] bg-white shadow-lg rounded-2xl px-3 py-2 mr-4`}
    >
      <h1 className="text-center m-6 font-semibold">Keranjang Belanja</h1>

      <div className="max-h-[270px] overflow-auto flex flex-col gap-y-4">
        {carts.map((cart, index) => {
          return (
            <>
              <div
                key={index}
                className="flex items-center justify-between flex-row "
              >
                <div className="flex flex-row items-center gap-y-[2px] gap-x-2 ">
                  <div className="">
                    <img
                      src={cart.img_product}
                      alt={cart.name}
                      className="w-14 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <p className="text-sm">{cart.name}</p>
                    <p className="text-sm font-semibold">
                      {toRupiah(cart.price, { replaceZeroDecimals: true })}
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-2 items-center justify-between ">
                  <button
                    onClick={() => handleDecreaseCart(cart)}
                    className="bg-rose-600 px-2.5 py-[1.5px] rounded text-white transition-all duration-200  hover:bg-rose-700 "
                  >
                    -
                  </button>
                  <p className="text-sm">{cart.quantity}</p>
                  <button
                    onClick={() => handleIncreaseCart(cart)}
                    className="bg-[#ff8730] px-2 py-[1.5px] rounded text-white transition-all duration-200  hover:bg-[#d26212]"
                  >
                    +
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="checkout  flex flex-col gap-y-3 z-10 py-3 m">
        <div className="flex flex-row items-center justify-between mt-2">
          <p className="font-semibold ">Total Harga :</p>
          <h3 className="font-semibold">
            {toRupiah(getTotalPrice(), { replaceZeroDecimals: true })}
          </h3>
        </div>
        <div className="flex flex-row gap-x-2 items-center justify-between">
          <label className="text-[12px]">Bayar :</label>
          <input
            placeholder="-"
            type="number"
            onChange={handleChangePay}
            value={payAmount}
            className="placeholder:text-[13px] text-[13px]  px-2 py-1 rounded-sm text-[#ff8730] border-2 focus:outline-none focus:border-[#ff8730]"
          />
        </div>
        <div className="flex flex-row gap-x-2 items-center justify-between">
          <label className="text-[12px]">Kembalian :</label>
          <input
            placeholder="-"
            type="number"
            onChange={handleChangePay}
            disabled={true}
            value={payAmount - getTotalPrice()}
            className="placeholder:text-[13px] text-[13px]  px-2 py-1 rounded-sm text-[#ff8730] border-2 focus:outline-none focus:border-[#ff8730]"
          />
        </div>
        <button
          onClick={handleCheckout}
          disabled={isDisabledButton()}
          className="w-full bg-[#ff8730] rounded px-3 py-3 text-white font-medium tracking-wide mt-2 transition-all duration-200 hover:bg-[#eb6708] disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

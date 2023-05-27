import React, { useState } from "react";
import toRupiah from "@develoka/angka-rupiah-js";

const Transactions = ({ transactions }) => {
  const [searchTransaction, setSearchTransaction] = useState("");

  const handleChangeTransaction = (e) => {
    const { target } = e;
    const { value } = target;
    setSearchTransaction(value.toUpperCase());
  };

  const filteredTransaction = transactions.filter((transaction) => {
    return transaction.no_order.toUpperCase().includes(searchTransaction);
  });

  const handlePrintTableButton = () => {
    window.print();
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-x-2 -mt-2 mb-0">
        <input
          type="text"
          placeholder="search transaction..."
          onChange={handleChangeTransaction}
          className="placeholder:text-sm text-sm  px-4 py-2 rounded-sm text-[#ff8730] border-2 focus:outline-none focus:border-[#ff8730] w-[250px]"
        />
        <button className="bg-[#ff8730] rounded px-4 py-[9px] text-white text-sm">
          Search
        </button>
        <button
          onClick={handlePrintTableButton}
          className="bg-blue-800 px-4 py-[9px] rounded text-white text-sm"
        >
          Cetak
        </button>
      </div>

      {/* Table */}
      <div className="container w-full mx-auto mt-8 mb-8 px-32 print-container">
        <table className="print-table min-w-full border border-gray-300 text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-[#ff8730] text-white">
                Kode Transaksi
              </th>
              <th className="px-4 py-2 bg-[#ff8730] text-white">Nama Produk</th>
              <th className="px-4 py-2 bg-[#ff8730] text-white">
                Jumlah Produk
              </th>
              <th className="px-4 py-2 bg-[#ff8730] text-white">Total Harga</th>
              <th className="px-4 py-2 bg-[#ff8730] text-white">Total Bayar</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping */}
            {filteredTransaction.map((transaction, index) => {
              return (
                <tr key={index}>
                  <td className="px-4 py-2 border border-gray-300">
                    {transaction.no_order}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {transaction.products.map((product, index) => {
                      return (
                        <div key={index}>
                          <p>{product.product}</p>
                        </div>
                      );
                    })}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {transaction.products.map((product, index) => {
                      return (
                        <div key={index}>
                          <p>{product.quantity}</p>
                        </div>
                      );
                    })}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {toRupiah(transaction.total_price)}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {toRupiah(transaction.paid_amount)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Transactions;

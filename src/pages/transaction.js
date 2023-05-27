import React, { useState, useEffect } from "react";
import Layout from "@/components/layouts/Layout.jsx";
import api from "@/api";
import Transactions from "@/components/elements/Transactions/Transactions";

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await api.get("/transactions");
      const data = response.data.payload.transactions;
      setTransactions(data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <Layout>
      <h1 className="font-semibold text-center text-2xl m-6">
        Transaction History
      </h1>
      <Transactions transactions={transactions} />
    </Layout>
  );
}

import { useQuery } from "@tanstack/react-query";
import { allTransactions } from "../api/auth";
import TransactionItem from "../components/TransactionItem";
import { useState } from "react";

const Transactions = () => {
  const [selectType, setSelectType] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleTypeClick = (type) => {
    setSelectType(type);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const { data: transactionsData } = useQuery({
    queryKey: ["transactions"],
    queryFn: allTransactions,
  });

  const filteredTransactions = transactionsData?.filter((transaction) => {
    if (selectType && transaction.type !== selectType) {
      return false;
    }
    if (startDate && new Date(transaction.createdAt) < new Date(startDate)) {
      return false;
    }
    if (endDate && new Date(transaction.createdAt) > new Date(endDate)) {
      return false;
    }
    if (
      searchQuery &&
      !transaction.amount?.toString().includes(searchQuery) &&
      !transaction.type?.includes(searchQuery) &&
      !transaction.createdAt?.includes(searchQuery)
    ) {
      return false;
    }
    return true;
  });

  const transactionList = filteredTransactions?.map((transaction) => (
    <TransactionItem
      key={transaction.id}
      amount={transaction.amount}
      type={transaction.type}
      date={transaction.createdAt}
    />
  ));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Bank Transaction History</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearchInputChange}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-2"
        />
      </div>
      <div className="flex justify-center mb-4">
        <div className="flex items-center mb-2 mr-4">
          <input
            type="radio"
            id="all"
            checked={selectType === null}
            onClick={() => handleTypeClick(null)}
            className="mr-1"
          />
          <label htmlFor="all">All</label>
        </div>
        <div className="flex items-center mb-2 mr-4">
          <input
            type="radio"
            id="deposit"
            checked={selectType === "deposit"}
            onClick={() => handleTypeClick("deposit")}
            className="mr-1"
          />
          <label htmlFor="deposit">Deposit</label>
        </div>
        <div className="flex items-center mb-2 mr-4">
          <input
            type="radio"
            id="withdraw"
            checked={selectType === "withdraw"}
            onClick={() => handleTypeClick("withdraw")}
            className="mr-1"
          />
          <label htmlFor="withdraw">Withdraw</label>
        </div>
        <div className="flex items-center mb-2 mr-4">
          <input
            type="radio"
            id="transfer"
            checked={selectType === "transfer"}
            onClick={() => handleTypeClick("transfer")}
            className="mr-1"
          />
          <label htmlFor="transfer">Transfer</label>
        </div>
      </div>
      <div className="flex justify-center items-center mb-4">
        <input
          type="date"
          onChange={handleStartDateChange}
          className="w-1/4 border border-gray-300 rounded px-4 py-2 mr-2"
        />
        <input
          type="date"
          onChange={handleEndDateChange}
          className="w-1/4 border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <ul className="space-y-4">{transactionList}</ul>
    </div>
  );
};

export default Transactions;

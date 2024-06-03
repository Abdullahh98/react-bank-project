import { useQuery } from "@tanstack/react-query";
import { allTransactions } from "../api/auth";
import { data } from "autoprefixer";
import TransactionItem from "../components/TransactionItem";
import { useState } from "react";

const Transactions = () => {
  const [selectType, setSelectType] = useState(null);

  const handleTypeClick = (type) => {
    setSelectType(type);
  };

  const { data: transactionsData } = useQuery({
    queryKey: ["transactions"],
    queryFn: allTransactions,
  });

  const filteredTransactions = transactionsData?.filter((transaction) => {
    if (selectType) {
      return transaction.type === selectType;
    }
    return true;
  });

  const transactionList = filteredTransactions?.map((transaction) => {
    return (
      <TransactionItem
        amount={transaction.amount}
        type={transaction.type}
        date={transaction.createdAt}
      ></TransactionItem>
    );
  });

  return (
    <div className="h-[655px] flex flex-col">
      <div className="bg-blue-500 h-[120px]"></div>
      <div className="bg-green-500 h-[130px]">
        <div className=" text-center py-3">
          <h1>Filter</h1>
        </div>
        <div className=" flex justify-evenly">
          <button onClick={() => handleTypeClick(null)}>All</button>
          <button onClick={() => handleTypeClick("deposit")}> Deposit </button>
          <button onClick={() => handleTypeClick("withdraw")}>Withdraw</button>
          <button onClick={() => handleTypeClick("transfer")}>Transfer</button>
        </div>
      </div>
      <div className="bg-purple-500 h-[130px]"></div>
      <div className=" h-full flex justify-center items-center">
        <div className=" lg:h-[95%] lg:w-full rounded-md flex flex-col justify-center items-center overflow-scroll gap-3 p-3">
          {/* here is where we display the transaction cards */}
          {transactionList}
        </div>
      </div>
    </div>
  );
};
export default Transactions;

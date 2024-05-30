import { useQuery } from "@tanstack/react-query";
import { allTransactions } from "../api/auth";
import { data } from "autoprefixer";
import TransactionItem from "../components/TransactionItem";

const Transactions = () => {
  const { data: transactionsData } = useQuery({
    queryKey: ["transactions"],
    queryFn: allTransactions,
  });

  console.log(transactionsData);
  const transactionList = transactionsData?.map((transaction) => {
    return (
      <TransactionItem
        amount={transaction.amount}
        type={transaction.type}
        date={transaction.createdAt}
      ></TransactionItem>
    );
  });

  return (
    <div className=" bg-red-600 h-[600px] flex flex-col">
      <div className="bg-blue-500 h-[150px]"></div>
      <div className="bg-green-500 h-[150px]"></div>
      <div className="bg-purple-500 h-[150px]"></div>
      <div className="bg-pink-500 h-[100vh]">
        <div className="  bg-white text-red-500 h-[90%] w-[90%]rounded-md">
          {/* here is where we display the transaction cards */}
          {transactionList}
        </div>
      </div>
    </div>
  );
};
export default Transactions;

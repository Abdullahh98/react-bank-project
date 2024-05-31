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
    <div className="  h-[655px] flex flex-col">
      <div className="bg-blue-500 h-[120px]"></div>
      <div className="bg-green-500 h-[130px]"></div>
      <div className="bg-purple-500 h-[130px]"></div>
      <div className=" h-full flex justify-center items-center">
        <div className=" lg:h-[95%] lg:w-full rounded-md flex flex-col justify-center items-center overflow-scroll gap-3 p-3 ">
          {/* here is where we display the transaction cards */}
          {transactionList}
        </div>
      </div>
    </div>
  );
};
export default Transactions;

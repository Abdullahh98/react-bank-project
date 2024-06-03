import React from "react";

const TransactionItem = ({ amount, date, type }) => {
  return (
    <div className=" flex flex-col w-[650px] h-full justify-center items-center rounded-md shadow-lg shadow-slate-300">
      {type == "deposit" ? (
        <div className=" w-full text-green-500 flex justify-center ">
          {amount}
        </div>
      ) : (
        <div className=" w-full text-red-500 flex justify-center">{amount}</div>
      )}

      <div className=" w-full text-gray-500 flex justify-center">{date}</div>
      <div className=" w-full text-black flex justify-center">{type}</div>
    </div>
  );
};

export default TransactionItem;

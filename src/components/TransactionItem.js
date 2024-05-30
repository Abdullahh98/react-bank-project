import React from "react";

const TransactionItem = ({ amount, date, type }) => {
  return (
    <div>
      <div className=" text-blue-500">{amount}</div>
      <div className="  text-gray-500">{date}</div>
      <div className=" text-black">{type}</div>
    </div>
  );
};

export default TransactionItem;

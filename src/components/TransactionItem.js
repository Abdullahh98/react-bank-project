import React from "react";

const TransactionItem = ({ amount, date, type }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto lg:mx-8 xl:mx-16">
        <div className="flex justify-between items-center bg-white border border-gray-200 rounded-lg shadow-md p-4">
          <div
            className={`text-lg font-semibold ${
              type === "deposit" ? "text-green-600" : "text-red-600"
            }`}
          >
            {amount} KWD
          </div>
          <div className="text-sm text-gray-500">{date}</div>
          <div className="text-sm font-semibold">{type}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;

import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { put_deposit } from "../api/auth";

const DepositForm = () => {
  const [amount, setAmount] = useState("");

  const depositMutation = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => put_deposit(amount),
    onSuccess: () => {
      console.log("Deposit successful");
    },
    onError: (error) => {
      console.error("Deposit error:", error);
    },
  });

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    depositMutation.mutate();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Deposit Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="amount"
            >
              Deposit Amount:
            </label>
            <input
              id="amount"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              value={amount}
              onChange={handleChange}
              required
              placeholder="Enter amount"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Deposit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepositForm;

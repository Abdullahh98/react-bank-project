import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { put_deposit } from "../api/auth";
import { useQueryClient } from "@tanstack/react-query";

const DepositForm = () => {
  const queryClient = useQueryClient();
  const [amount, setAmount] = useState("");
  const depositMutation = useMutation({
    mutationKey: ["deposit"],
    mutationFn: () => put_deposit(amount),
    onSuccess: () => {
      alert("Deposit successful");
      queryClient.invalidateQueries(["profile"]);
      setAmount(""); // Reset the amount to the input tag
    },
    onError: () => {
      alert("Deposit error");
    },
  });

  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission by default
    if (amount <= "0") {
      alert("You cannot deposit 0 amount and negative");
      return; // Exit the function if amount is 0
    }
    // Proceed with deposit if amount is not 0
    depositMutation.mutate();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
        <div className="px-6 py-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-gray-700 font-bold mb-2"
              >
                Deposit Amount:
              </label>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={handleChange}
                required
                placeholder="Enter amount"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Deposit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DepositForm;

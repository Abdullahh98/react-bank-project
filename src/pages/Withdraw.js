import React from "react";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { withdraw } from "../api/auth";
import { useQueryClient } from "@tanstack/react-query";

const Withdraw = () => {
  const queryClient = useQueryClient();
  const [amount, setAmount] = useState("");
  const withdrawMutation = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: () => withdraw(amount),
    onSuccess: () => {
      alert("Withdraw successful");
      queryClient.invalidateQueries(["profile"]);
      setAmount(""); // Reset the amount to the input tag
    },
    onError: () => {
      alert("You cannot withdraw more than what you have. Check your balance.");
    },
  });

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (amount <= 0) {
      alert("You cannot withdraw 0 amount and negative");
      return; // Exit the function if amount is 0
    }
    withdrawMutation.mutate();
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
                Withdraw Amount:
              </label>
              <input
                id="withdraw"
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
              className=" bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Withdraw
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;

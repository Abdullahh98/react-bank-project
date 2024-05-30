import React from "react";
import { useQuery } from "@tanstack/react-query";
import { transaction } from "../api/auth";

const Transaction = () => {
  const {
    data: deposit,
    isLoading,
    isError,
  } = useQuery({
    queryKey: "transaction",
    queryFn: transaction,
    onSuccess: (data) => {
      // Successfully fetched profile data, update cache
      //   queryClient.setQueryData("userProfile", data);
    },
    onError: (error) => {
      // Handle error
      console.error("Error fetching user profile:", error);
    },
  });
  console.log(deposit);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching profile.</div>;
  }

  return (
    <div className=" my-12 max-w-md mx-auto p-4 border shadow-lg border-gray-300 rounded-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">User Amount</h2>
        <p className="text-lg">amount: {deposit[2].amount}</p>
      </div>
    </div>
  );
};

export default Transaction;

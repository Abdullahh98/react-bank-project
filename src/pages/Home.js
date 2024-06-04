import React, { useState } from "react";
import DepositForm from "./Deposit";
import Withdraw from "./Withdraw";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../api/auth";

const Home = () => {
  const [selected, setSelected] = useState(false);
  const [deposit, setDeposit] = useState("withdraw");

  const { data: profile } = useQuery({
    queryKey: "profile",
    queryFn: getUserProfile,
  });

  const handleToggle = (event) => {
    setSelected(event.target.checked);
    if (deposit === "withdraw") {
      setDeposit("deposit");
    } else {
      setDeposit("withdraw");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {profile && (
        <>
          <div className="my-12 w-[25%] h-[100%] mx-auto p-6 shadow-lg bg-white border border-gray-300 rounded-lg">
            <p className="text-center mb-2">Your available Balance:</p>
            <p className="text-3xl font-semibold text-center mb-4">
              {profile.balance} <span className="text-green-500">KWD</span>
            </p>
          </div>
          <label className="inline-flex items-center cursor-pointer mt-4">
            <input
              onChange={handleToggle}
              type="checkbox"
              value=""
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-100 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {deposit}
            </span>
          </label>
          {selected ? <DepositForm /> : <Withdraw />}
        </>
      )}
    </div>
  );
};

export default Home;

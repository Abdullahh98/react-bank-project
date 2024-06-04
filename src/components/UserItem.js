import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { transfer } from "../api/auth";

const UserItem = ({ image, id, balance }) => {
  const [amount, setAmount] = useState("");

  const { mutate } = useMutation({
    mutationKey: ["transfer"],
    mutationFn: () => transfer(id, amount),
    onSuccess: () => {
      alert("transfer successful");
    },
    onError: () => {
      alert("transfer unsuccessful check your balance!");
    },
  });

  const handlaChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="  flex">
      <div className=" flex flex-col w-[300px] h-[300px] justify-center items-center rounded-lg shadow-lg shadow-slate-200">
        <div className="  flex justify-center items-center p-5">
          <img
            className="h-[120px] w-[120px] rounded-[50%] "
            src={`https://react-bank-project.eapi.joincoded.com/${image}`}
          />
        </div>
        <div className=" flex justify-center items-center">{id}</div>
        <div className=" flex justify-center items-center ">
          {" "}
          Balance: {balance}{" "}
        </div>
        <input onChange={handlaChange} className=" border"></input>
        <button
          onClick={mutate}
          className="  bg-green-500 hover:bg-green-600 rounded-lg p-1 w-[40%] text-gray-100 "
        >
          Transfer
        </button>
      </div>
    </div>
  );
};

export default UserItem;

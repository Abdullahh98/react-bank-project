import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllUsers } from "../api/auth";
import UserItem from "../components/UserItem";
import { transfer } from "../api/auth";

const Users = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  const usersList = users?.map((user) => {
    return (
      <>
        <UserItem
          id={user.username}
          balance={user.balance}
          image={user.image}
        />
      </>
    );
  });

  return (
    <div className="flex">
      <div className=" flex justify-center gap-20 p-2 flex-wrap w-full h-full ">
        {usersList}
      </div>
    </div>
  );
};

export default Users;

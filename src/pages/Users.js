import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../api/auth";
import UserItem from "../components/UserItem";

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
    <div>
      <div>{usersList}</div>
    </div>
  );
};

export default Users;

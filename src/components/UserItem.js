import React from "react";

const UserItem = ({ image, id, balance }) => {
  return (
    <div className=" bg-gray-500 flex   ">
      <div className=" bg-red-200 flex flex-col w-[300px] h-[200px]">
        <div className=" bg-yellow-200">
          <img src={`https://react-bank-project.eapi.joincoded.com/${image}`} />
        </div>
        <div className=" bg-blue-300"> {id} </div>
        <div className=" bg-green-400"> {balance} </div>
      </div>
    </div>
  );
};

export default UserItem;

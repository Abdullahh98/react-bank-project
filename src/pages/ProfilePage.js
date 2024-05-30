import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile } from "../api/auth";

const Profile = () => {
  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: "profile",
    queryFn: getUserProfile,
    onSuccess: (data) => {
      // Successfully fetched profile data, update cache
      //   queryClient.setQueryData("userProfile", data);
    },
    onError: (error) => {
      // Handle error
      console.error("Error fetching user profile:", error);
    },
  });
  console.log(profile);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching profile.</div>;
  }

  return (
    <div className=" my-12 max-w-md mx-auto p-4 border shadow-lg border-gray-300 rounded-lg">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <p className="text-lg">Name: {profile.username}</p>
        <img
          src={`https://react-bank-project.eapi.joincoded.com/${profile.image}`}
          alt="User"
          className="w-24 h-24 rounded-full mx-auto my-4"
        />
        <p className="text-lg">Balance: {profile.balance}</p>
        {/* Render other profile information here */}
      </div>
    </div>
  );
};

export default Profile;

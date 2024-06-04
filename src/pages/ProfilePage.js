import React from "react";
import { useQuery } from "@tanstack/react-query";
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
      // queryClient.setQueryData("userProfile", data);
    },
    onError: (error) => {
      // Handle error
      console.error("Error fetching user profile:", error);
    },
  });

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center">Error fetching profile.</div>;
  }

  return (
    <div className="my-12 max-w-md mx-auto p-4 border shadow-lg border-gray-300 rounded-lg">
      <div className="text-center">
        <p className="text-xl font-semibold">Name: {profile.username}</p>
        <div className="flex justify-center">
          <img
            src={`https://react-bank-project.eapi.joincoded.com/${profile.image}`}
            alt="User"
            className="w-24 h-24 rounded-full my-4"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-xl font-semibold">Balance: {profile.balance}</p>
        {/* Render other profile information here */}
      </div>
    </div>
  );
};

export default Profile;

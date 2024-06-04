import instance from ".";
import { storeToken } from "./storage";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  if (data.token) {
    storeToken(data.token);
  }
  return data;
};

const register = async (userInfo) => {
  try {
    // This is for seding the request with files
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    // END
    const { data } = await instance.post(
      "/mini-project/api/auth/register",
      formData
    );
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};

const allTransactions = async () => {
  const res = await instance.get("/mini-project/api/transactions/my");

  return res.data;
};

const getUserProfile = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me/");
  return data;
};

const transaction = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};

const put_deposit = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/deposit",
    { amount: amount }
  );
  return data;
};

const withdraw = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/withdraw",
    { amount: amount }
  );
  return data;
};

const transfer = async () => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/transfer/<username>"
  );
  return data;
};

const updateProfile = async (image) => {
  const { data } = await instance.put("/mini-project/api/auth/profile", {
    image: image,
  });
  return data;
};

export {
  register,
  login,
  getUserProfile,
  put_deposit,
  transaction,
  allTransactions,
  withdraw,
  transfer,
  updateProfile,
};

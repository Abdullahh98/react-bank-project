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

export { login };
